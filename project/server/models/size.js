const mongoose = require("mongoose");
const { Schema } = mongoose;

const sizeSchema = new Schema(
  {
    name: {
      type: String,
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

const Size = mongoose.model("Size", sizeSchema);

module.exports = Size;
