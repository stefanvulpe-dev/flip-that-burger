import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date },
  updatedAt: { type: Date, default: Date },
});

export const TokenModel = mongoose.model('Token', TokenSchema);
