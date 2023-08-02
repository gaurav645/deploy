import mongoose from "mongoose";
mongoose.pluralize(null);

const userModel=new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
export default mongoose.model("user",userModel,"user");