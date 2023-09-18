import { TokenModel } from '../models';

export function createToken(token: string) {
  return TokenModel.create({ token });
}

export function deleteToken(token: string) {
  return TokenModel.findOneAndDelete({ token });
}

export function getToken(token: string) {
  return TokenModel.findOne({ token });
}
