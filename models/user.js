import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address.'],
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', UserSchema);
export default User;
