import { generateToken } from "../jwt/generateToken.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
export const signup = async (req, res) => {
  const { fullname, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword)
    return res.status(400).json({ message: "Passwords do not match" });

  try {
    const user = await User.findOne({ email });

    if (user)
      return res.status(201).json({ message: "User already exists" ,success: false });
   
   
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ fullname, email, password: hashedPassword });

    const result = await newUser.save();
    if(newUser){
      generateToken(result._id,res);
      res.status(201).json({ message: "User created successfully",success: true ,user:newUser });
    }

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
 
  const { email, password } = req.body;

  try {
   
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(200).json({ message: "Invalid email or password" ,success: false});
    }

    generateToken(user._id, res);

    res.status(200).json({ message: "Login successful",success: true , user: { id: user._id, email: user.email } });
    
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export const getUser = async (req, res) => {
 
  try {
    const users = await User.find().select("-password");
    

   
    if (!users) {
      return res.status(200).json({ message: "Users not found" ,success: false});
    }

    res.status(200).json({ message: "Users found",success: true , users });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }

}
