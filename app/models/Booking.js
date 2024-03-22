import mongoose from "mongoose";

const {Schema} = mongoose;

const BookingSchema = new Schema({
    id:{
        type: String,
    },
    hotelId:{
        type: String
    },
    roomId:{
        type: String
    },
    userName:{
        type: String,
    },
    userId:{
        type: String,
    },
    hotelOwnerId:{
        type: String
    },
    startDate:{
        type: Date
    },
    endDate:{
        type: Date,
    },
    breakfastIncluded:{
        type: Boolean
    },
    currency:{
        type: String
    },
    totalPrice:{
        type: Number
    },
    paymentStatus:{
        type: Boolean,
        default: false
    },
    paymentIntentId:{
        type: String,
        unique: true
    },
    bookedAt:{
        type: Date,
        default: Date.now
    }
}, {timestamps: true})

export default mongoose.model("Bookings", BookingSchema);