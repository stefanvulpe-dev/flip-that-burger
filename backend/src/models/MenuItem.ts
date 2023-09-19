import mongoose from 'mongoose';
import { MenuItem } from '../utils';

const MenuItemSchema = new mongoose.Schema<MenuItem>({
  name: { type: mongoose.Schema.Types.String, required: true },
  type: { type: mongoose.Schema.Types.String, required: true },
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
