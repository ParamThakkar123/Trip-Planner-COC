import mongoose from "mongoose";

const {Schema} = mongoose;

const TripSchema = new Schema({
    id:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String, //work leisure solo family
        required: true
    },
    
    country:{
        type: Array, 
        required: true
    },
    states:{
        type: Array,
        required: true
    },
    cities:{
        type: Array,
        required: true
    },

    locations: {
        type: Array
    },

    preftrans:{
        type:Array //preferred means of transportation
    },

    preffood:{
        type:Array //preferred means of transportation
    },
    
    addedAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    },
    bookings:{
        type: Array,
        default: []
    }
}, {timestamps: true})

export default mongoose.model("trip", TripSchema);