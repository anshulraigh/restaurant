const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  taste: {
    type: String,
    enum: ["spicy", "sweet", "sour", "bitter", "salty"],
    required: true
  },
  is_drink: {
    type: Boolean,
    required: true
  },
  ingredients: {
    type: [String],
    default: []
  },
  num_sales: {
    type: Number,
    default: 0
  }
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;