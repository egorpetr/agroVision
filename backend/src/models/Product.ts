import mongoose from 'mongoose';

export interface IProduct extends mongoose.Document {
  title: string;
  description: string;
  price: string;
  category: string;
  stock: number;
  image?: string;
}

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  image: {
    type: String,
  },
}, {
  timestamps: true,
});

export default mongoose.model<IProduct>('Product', productSchema); 