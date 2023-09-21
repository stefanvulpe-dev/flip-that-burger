import {
  DeleteObjectCommand,
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import crypto from 'crypto';
import sharp from 'sharp';

const randomImageName = (bytes = 32) =>
  crypto.randomBytes(bytes).toString('hex');

export const S3 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.ACCOUNT_ID!}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID!,
    secretAccessKey: process.env.SECRET_ACCESS_KEY!,
  },
});

export async function uploadFile(file: Express.Multer.File) {
  try {
    const buffer = await sharp(file.buffer)
      .resize(400, 400, { fit: 'cover' })
      .toBuffer();
    const Key = randomImageName();

    await S3.send(
      new PutObjectCommand({
        Bucket: process.env.BUCKET_NAME!,
        Key,
        Body: buffer,
        ContentType: file.mimetype,
      }),
    );
    return Key;
  } catch (error) {
    throw new Error('Error uploading file');
  }
}

export async function deleteFile(Key: string) {
  try {
    await S3.send(
      new DeleteObjectCommand({
        Bucket: process.env.BUCKET_NAME!,
        Key,
      }),
    );
  } catch (error) {
    throw new Error('Error deleting file');
  }
}

export async function getFile(Key: string) {
  try {
    const url = await getSignedUrl(
      S3,
      new GetObjectCommand({
        Bucket: process.env.BUCKET_NAME!,
        Key,
      }),
      { expiresIn: 3600 },
    );
    return url;
  } catch (error) {
    throw new Error('Error getting file');
  }
}
