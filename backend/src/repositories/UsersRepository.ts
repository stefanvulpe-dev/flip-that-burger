import { User, UserModel } from '../models';

export function getUsers() {
  return UserModel.find();
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

export function createUser(user: User) {
  return UserModel.create(user);
}

export function deleteUserById(id: string) {
  return UserModel.findByIdAndDelete(id);
}

export function updateUserById(id: string, user: User) {
  return UserModel.findByIdAndUpdate(id, user);
}
