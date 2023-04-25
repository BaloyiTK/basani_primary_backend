import User from "../../models/userModel.js";
import asyncHandler from "express-async-handler";

const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  // check if required fields are filled
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the required fields!");
  }

  // check if password is at least 6 characters long
  if (password.length < 6) {
    res.status(400);
    throw new Error("The password must be at least 6 characters!");
  }

  // check if a user with the same email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error(
      "User already exists, please login or use a different email address!"
    );
  }

  // create a new user with the given information
  const user = await User.create({
    username,
    email,
    password,
  });

  if (user) {
    // if user is created successfully, return user information along with a token
    const { _id, name, email, photo } = user;
    return res.status(201).json({ _id, name, email, photo });
  } else {
    // if user is not created successfully, throw an error
    res.status(400);
    throw new Error("Invalid user data!");
  }
});

export default register;
