import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import users from '../models/auth.js';

export const signup=async(req,res)=>{
    
    const{name,email,password}=req.body;
   
    try{
        const existinguser=await users.findOne({email});
        if (existinguser){
            return res.status(404).json({message:'user already exist.This email already taken'})
        }
        const hashedPassword=await bcrypt.hash(password,12)
        const newUser=await users.create({name,email,password:hashedPassword})
        const token=jwt.sign({email:newUser.email,id:newUser._id},"text",{expiresIn:'1hr'})
        res.status(201).json({
            message: `User ${email} has signed up successfully.`})
        res.status(200).json({result:newUser,token})
    }catch(error){
        res.status(500).json('something went wrong...');
        console.log(error);
    }

}
export const login=async(req,res)=>{
    const{email,password}=req.body;
    console.log('here inside controllers login')
   // res.json({ 'message:' this `${email}` 'has logged inwith this password' `${password}` });
    try{
        const existinguser=await users.findOne({email});
        if (!existinguser){
            return res.status(404).json({message:"user don't exist"});
        }
        const isPasswordCrt=await bcrypt.compare(password,existinguser.password);
        if (!isPasswordCrt){
            return res.status(400).json({message:"Invalid credentials"})
        } 
        const token=jwt.sign({email:existinguser.email,id:existinguser._id},"text",{expiresIn:'1hr'});
        res.status(200).json({result:existinguser,token})
    }catch(error){

        res.status(500).json('something went wrong...');
        console.log(error)
    }

}
