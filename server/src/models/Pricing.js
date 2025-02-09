const mongoose = require("mongoose");

const pricingSchema = new mongoose.Schema(
  {
    drugName: { type: String, required: true },
    dosage: { type: String, required: true },
    price: { type: Number, required: true },
    marketPrice: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Pricing = mongoose.model("Pricing", pricingSchema);

module.exports = Pricing;
