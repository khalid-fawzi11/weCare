
import express  from "express";
import * as auth from "./auth.controller.js";

const auth=express.Router()

auth.post('/signup',auth.signUp)
auth.post('/signin',auth.signIn)
auth.get('/signin/showuser',auth.getAllUserSignIn)


export default auth
