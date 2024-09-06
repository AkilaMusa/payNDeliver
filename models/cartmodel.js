import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "product"
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  image: {
    type: String,
    required: true
  }
}, { _id: false });

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  products: [productSchema],
  total: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  collection: 'cart',
});

cartSchema.pre('save', function(next) {
  this.total = this.products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
  next();
});

const Cart = mongoose.models.Cart || mongoose.model('Cart', cartSchema);

export default Cart;