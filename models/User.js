const mongoose = require("../db/connection");



const userSchema = new mongoose.Schema(
  {
      username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
      },
         
    password: {
      type: String,
      minLength: 8,
      required: true,
    },
   
  },
  {
    timestamps: true,
    toJSON:{
      virtuals: true,
      //ret is the returned Mongoose document
      transform: (_doc, ret) => {
        delete ret.password;
        return ret;
      },
    },
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;