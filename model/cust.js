import mongoose from "mongoose";

const custSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required : true
        },

        phone:{
            type : Number,
            required : true
        },

        pincode:{
            type : Number,
            required : true
        },

        city:{
            type : String,
            required : true
        }
    },
    {
        timestamps: true,
    }
)

const custModel = mongoose.model("custModel",custSchema)

export default custModel
 
