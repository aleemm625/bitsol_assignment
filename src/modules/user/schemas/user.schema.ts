import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  role: {
    type: String,
    enum: ['admin', 'normal'],
  },
  phoneNo: String,
  addresses: [
    {
      addressLine1: String,
      addressLine2: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});
