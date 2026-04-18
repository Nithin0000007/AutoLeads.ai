// models/Lead.js

import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    business_type: String,
    message: String,
    source: String,
  },
  { timestamps: true }
);

export default mongoose.model('Lead', leadSchema);