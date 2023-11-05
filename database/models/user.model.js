import {Schema,model} from "mongoose";
import bcrypt from "bcrypt"
const userSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },

    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        
    },
    password:{
        type:String,
        require:true

    },
    role:{
        type:String,
        enum:['admin','user'],
    },
    isActive:{
        type:Boolean,
        default:true
    },
    verified:{
        type:Boolean,
        default:false
    },
    blocked:{
        type:Boolean,
        default:false
    },
    phone:{
        type:String,
        unique:true,
        required:true,
    }
},{timestamps:true})

userSchema.pre('save',function(){
  
    this.password=bcrypt.hashSync(this.password,8)
})

userSchema.pre('findOneAndUpdate',function(){
  
    if(this._update.password)this._update.password=bcrypt.hashSync( this._update.password,8)
})

export const userModel=model('user',userSchema)
