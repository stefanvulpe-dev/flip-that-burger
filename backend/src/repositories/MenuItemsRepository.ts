import { MenuItemModel } from '../models';

type TItem = 'burger' | 'pizza' | 'coffee' | 'beverage' | 'chicken';

export function createItem(item: Record<string, string>) {
  return MenuItemModel.create(item);
}

export function getAllItems() {
  return MenuItemModel.find();
}

export function getItems(type: TItem) {
  return MenuItemModel.find({ type });
}

export function getNewest(type: TItem) {
  return MenuItemModel.find({ type, new: true });
}

export function getTopSellers(type: TItem) {
  return MenuItemModel.find({ type, topSeller: true });
}
