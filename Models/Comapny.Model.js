import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  mobile: { type: String },
  companyStartDate: { type: Date },
  companyName: { type: String },
  companyId: { type: String },
  domain: { type: String },
  numberOfEmployees: { type: Number },
  gstNumber: { type: String },
  address: { type: String },
  city: { type: String },
  pincode: { type: String },
  country: { type: String },
  status:{type:Boolean,default:true}
});

const Company = mongoose.model('Company', companySchema);

export default Company;