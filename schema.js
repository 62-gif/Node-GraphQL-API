import mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  maidenName: { type: String, default: "" },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female", "other"], required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthDate: { type: Date, required: true },
  image: { type: String },
  bloodGroup: { type: String },
  height: { type: Number },
  weight: { type: Number },
  eyeColor: { type: String },
  hair: {
    color: { type: String },
    type: { type: String },
  },
  ip: { type: String },
  address: {
    address: { type: String },
    city: { type: String },
    state: { type: String },
    stateCode: { type: String },
    postalCode: { type: String },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number },
    },
    country: { type: String },
  },
  macAddress: { type: String },
  university: { type: String },
  bank: {
    cardExpire: { type: String },
    cardNumber: { type: String },
    cardType: { type: String },
    currency: { type: String },
    iban: { type: String },
  },
  company: {
    department: { type: String },
    name: { type: String },
    title: { type: String },
    address: {
      address: { type: String },
      city: { type: String },
      state: { type: String },
      stateCode: { type: String },
      postalCode: { type: String },
      coordinates: {
        lat: { type: Number },
        lng: { type: Number },
      },
      country: { type: String },
    },
  },
  ein: { type: String },
  ssn: { type: String },
  userAgent: { type: String },
  crypto: {
    coin: { type: String },
    wallet: { type: String },
    network: { type: String },
  },
  role: { type: String, enum: ["admin", "moderator", "user"], default: "user" },
});


export const  gradeSchema = new mongoose.Schema({
  student_id: Number,
  class_id: Number,
  scores: Array,
});




