import mongoose from 'mongoose';
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  orders: mongoose.Schema.Types.ObjectId[];
  timestamps: {
    createdAt: Date;
    updatedAt: Date;
  };
}

const UserSchema = new mongoose.Schema<User>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  orders: { type: [mongoose.Schema.Types.ObjectId], ref: 'Order', default: [] },
  timestamps: {
    createdAt: { type: Date, default: Date },
    updatedAt: { type: Date, default: Date },
  },
});

export const UserModel = mongoose.model('User', UserSchema);
