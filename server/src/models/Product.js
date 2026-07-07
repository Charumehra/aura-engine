import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: 2,
      maxlength: 150
    },

    sku: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true
    },

    category: {
      type: String,
      required: true,
      trim: true
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    cost: {
      type: Number,
      required: true,
      min: 0
    },

    stockQuantity: {
      type: Number,
      required: true,
      default: 0,
      min: 0
    },

    reorderLevel: {
      type: Number,
      required: true,
      default: 10,
      min: 0
    },

    lastUpdated: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

// productSchema.index({ sku: 1 });

productSchema.index({ productName: "text" });

productSchema.index({ category: 1 });

productSchema.index({ stockQuantity: 1 });

productSchema.index({ price: 1 });

export default mongoose.model("Product", productSchema);