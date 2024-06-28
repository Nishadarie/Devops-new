const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, address, telephone } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword, address, telephone });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); // Use 201 for resource creation
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      return res.status(401).json({ error: "Wrong Credentials!" });
    }

    const token = jwt.sign(
      {
        _id: user._id,
        username: user.username,
        email: user.email,
        address: user.address,
        telephone: user.telephone
      },
      process.env.SECRET,
      { expiresIn: "3d" }
    );

    res.cookie("token", token, { httpOnly: true, sameSite: "none", secure: true });
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      address: user.address,
      telephone: user.telephone
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Logout
router.get("/logout", (req, res) => {
  res.clearCookie("token", { sameSite: "none", secure: true }).status(200).send("User logged out successfully");
});

module.exports = router;


//Refetch user
router.get("/refetch", (req, res)=>{
  const token=req.cookies.token
  jwt.verify(token,process.env.SECRET,{},async(err, data)=>{
    if(err){
      return res.status(404).json(err)
    }
    res.status(200).json(data)
  })
})


module.exports=router