const mongoose = require("mongoose");
const { Schema } = mongoose;

const productVariantSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    sizeId: {
      type: Schema.Types.ObjectId,
      ref: "Size",
    },
    colorId: {
      type: Schema.Types.ObjectId,
      ref: "Color",
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductVariant = mongoose.model("ProductVariant", productVariantSchema);

module.exports = ProductVariant;
