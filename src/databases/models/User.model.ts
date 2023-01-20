import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Note from './Note.model';
import { toNumber } from 'lodash';

const Schema = mongoose.Schema;

export interface UserDocument extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  generateJwtFromUser(): Promise<string>;
}

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Please enter a first name'],
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Please enter a email address'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address',
      ],
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minlength: [6, 'Password must be a minimum of 6 characters'],
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

// Generate Json Web Token From User
UserSchema.methods.generateJwtFromUser = function () {
  const { JSON_SECRET_KEY, JWT_EXPIRE } = process.env;

  const payload = {
    id: this._id,
    email: this.email,
  };

  const token = jwt.sign(payload, JSON_SECRET_KEY as string, {
    expiresIn: JWT_EXPIRE,
  });
  return token;
};

// Password hashing
UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) next(err);
      this.password = hash;
      next();
    });
  });
});

// Delete notes when user deleted
UserSchema.pre('remove', async function (next) {
  await Note.deleteMany({
    //@ts-ignore
    userId: this._id,
  });
  next();
});

const User = mongoose.model<UserDocument>('user', UserSchema);

export default User;
