import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  items: [{
    type: String // Assuming you have a Product model
  }],
  transactionId: {
    type: String,
    required: true,
  },
  paymentIntentId: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
});

export const Order = mongoose.model('Order', orderSchema);
