//basic route banaya hai abhi ke liye

const Pricing = require("../models/Pricing");

exports.getAllPricing = async (req, res) => {
  try {
    const pricing = await Pricing.find();
    res.status(200).json(pricing);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving pricing data", error: err });
  }
};

exports.createPricing = async (req, res) => {
  const { drugName, dosage, price, marketPrice } = req.body;
  try {
    const newPricing = new Pricing({ drugName, dosage, price, marketPrice });
    await newPricing.save();
    res.status(201).json(newPricing);
  } catch (err) {
    res.status(500).json({ message: "Error creating pricing data", error: err });
  }
};
