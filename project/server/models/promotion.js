const mongoose = require("mongoose");
const { Schema } = mongoose;

const promotionSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
    },
    discountPercentage: {
      type: Number,
      default: 0,
    },
    discountPrice: {
      type: Number,
      default: 0,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Promotion = mongoose.model("Promotion", promotionSchema);

module.exports = Promotion;
