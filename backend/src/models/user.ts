import mongoose from 'mongoose';

export type User = {
  username: string;
  email: string;
  authentication: {
    password: string;
    token: string;
  };
  timestamps: {
    createdAt: Date;
    updatedAt: Date;
  };
};

const UserSchema = new mongoose.Schema<User>({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  authentication: {
    password: { type: String, required: true, select: false },
    token: { type: String, select: false },
  },
  timestamps: {
    createdAt: { type: Date, default: Date },
    updatedAt: { type: Date, default: Date },
  },
});

export const UserModel = mongoose.model('User', UserSchema);
