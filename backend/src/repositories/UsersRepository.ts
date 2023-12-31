import { User, UserModel } from '../models';

export function getUsers() {
  return UserModel.find();
}

export function getUserByUsername(username: string) {
  return UserModel.findOne({ username });
}

export function getUserByEmail(email: string) {
  return UserModel.findOne({ email });
}

export function getUserBySessionToken(sessionToken: string) {
  return UserModel.findOne({ 'authentication.sessionToken': sessionToken });
}

export function getUserById(id: string) {
  return UserModel.findById(id);
}

export function createUser(user: Record<string, string>) {
  return UserModel.create(user);
}

export function deleteUserById(id: string) {
  return UserModel.findByIdAndDelete(id);
}

export function updateUserById(id: string, user: User) {
  return UserModel.findByIdAndUpdate(id, user);
}

export function addOrder(userId: string, orderId: string) {
  return UserModel.findByIdAndUpdate(
    userId,
    { $push: { orders: orderId } },
    { new: true },
  );
}
