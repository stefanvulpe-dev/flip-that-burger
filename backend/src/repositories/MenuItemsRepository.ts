import { Category, MenuItemModel } from '../models';

export function createItem(item: Record<string, string>) {
  return MenuItemModel.create(item);
}

export function getAllItems() {
  return MenuItemModel.find();
}

export function getCategory(category: Category) {
  return MenuItemModel.find({ category });
}

export function getNewest(category: Category) {
  return MenuItemModel.find({ category, new: true });
}

export function getTopSellers() {
  return MenuItemModel.find({ topSeller: true });
}
