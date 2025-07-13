import jwt from 'jsonwebtoken'

//login seller:/api/seller/login

import { JsonWebTokenError } from "jsonwebtoken";

export const sellerLogin=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(password===process.env.SELLER_PASSWORD && 
        email===process.env.SELLER_EMAIL){
            const token=jwt.sign({email},process.env.JWT_SECRET,{expiredIn:'7d'});
        
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
      
        return res.json({success:false,message:"logged in"});
      }else{
        return res.json({success:false,message:"invalid creds"})
      }
    }catch(error){
        console.log(error.message);
        res.json({success:false,message:error.message});
    }
}

//check seller auth: /api/seller/is-auth
export const isSellerAuth = async (req, res) => {
  try {
    return res.json({ success: true, user });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

//logout seller user: /api/seller/logout 

export const sellerLogout = async (req, res) => {
  try {
    res.clearCookie("sellerToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
      return res.json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};