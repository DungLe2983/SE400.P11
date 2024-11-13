const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: [String],
      default: [],
    },
    phoneNumber: {
      type: [String],
    },
    avatar: {
      type: [String],
    },
    cartId: {
      type: Schema.Types.ObjectId,
      ref: "Cart",
    },
    role: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
