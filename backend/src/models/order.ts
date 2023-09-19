import mongoose from 'mongoose';

interface OrderItem extends mongoose.Document {
  item: mongoose.Schema.Types.ObjectId;
  quantity: number;
}

const OrderItemsSchema = new mongoose.Schema<OrderItem>({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MenuItem',
  },
  quantity: mongoose.Schema.Types.Number,
});

interface Order extends mongoose.Document {
  id: mongoose.Schema.Types.ObjectId;
  user: mongoose.Schema.Types.ObjectId;
  items: OrderItem[];
  total: number;
  timestamps: {
    createdAt: Date;
    updatedAt: Date;
  };
}

const OrderSchema = new mongoose.Schema<Order>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: { type: [OrderItemsSchema], required: true },
  total: { type: Number, required: true },
  timestamps: {
    createdAt: { type: Date, default: Date },
    updatedAt: { type: Date, default: Date },
  },
});

export const OrderModel = mongoose.model('Order', OrderSchema);
