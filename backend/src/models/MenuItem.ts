import mongoose from 'mongoose';

export type Category =
  | 'burger'
  | 'pizza'
  | 'coffee'
  | 'beverage'
  | 'chicken'
  | 'all';

export type MenuItem = {
  id: mongoose.Schema.Types.ObjectId;
  category: Category;
  name: string;
  ingredients: string[];
  price: number;
  image: string;
  new?: boolean;
  topSeller?: boolean;
};

const MenuItemSchema = new mongoose.Schema<MenuItem>({
  name: { type: mongoose.Schema.Types.String, required: true },
  category: { type: mongoose.Schema.Types.String, required: true },
  ingredients: {
    type: [mongoose.Schema.Types.String],
    required: true,
    maxlength: 10,
  },
  price: { type: mongoose.Schema.Types.Number, required: true },
  image: { type: mongoose.Schema.Types.String, required: true },
  new: { type: mongoose.Schema.Types.Boolean, default: false },
  topSeller: { type: mongoose.Schema.Types.Boolean, default: false },
});

export const MenuItemModel = mongoose.model('MenuItem', MenuItemSchema);
