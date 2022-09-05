const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require ("jsonwebtoken");

//User Register
router.post("/register",async (req,res)=>{

  //Email Exist
   const emailExist = await User.findOne({
      email : req.body.email
   });
   if(emailExist) return res.status(400).send("Email Already Exist");

  //Hash Password
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = await bcrypt.hashSync(req.body.password, salt)

  //Create User
  const userRegister= new User({
    name : req.body.name,
    email : req.body.email,
    password : hashPassword
  });
  try {
    const saveUser =await userRegister.save();
    res.json(saveUser);
  } catch (error) {
    res.json({message : error});
  }
});


//User Login
router.post("/login",async (req,res)=>{
  //checking email in db
  const user = await User.findOne({email : req.body.email});
  if(!user) return res.status(400).send("Email is wrond");

  //Checking Password
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if(!validPassword) return res.status(400).send("Invalid Password");

  //create and assign a token
  const token = jwt.sign({_id : user._id}, process.env.Token_Secret);
  res.header("auth-token", token).send({token : token});

})

module.exports = router;
