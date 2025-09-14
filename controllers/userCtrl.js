const asyncHandler = require("express-async-handler");
const User = require("../models/usermodel");
const { generateToken } = require("../configs/jwtoken");

const createUser = asyncHandler (async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({email:email});
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.json({message:'user created Successfully',data:newUser});
  } else {
    throw new Error('user Already Exist')
  }
});
const loginsUserCtrl = asyncHandler( async (req,res) => {
  const {email,password} = req.body;
  const findUser = await User.findOne({email:email});
  if(findUser && await findUser.isPasswordMatched(password)){
    res.json({
      _id : findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser._id),
    })
  }
  else{
    throw new Error('In-Valid credentials')
  }
})

module.exports = { createUser,loginsUserCtrl };
