import mongoose from "mongoose";

const {Schema} = mongoose;

const RoomSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    phonenumber:{
        type: Number,
        required: true
    },
    bedCount:{
        type: Number,
        required: true
    },
    guestCount:{
        type: Number,
        required: true
    },
    bathroomCount:{
        type: Number,
        required: true
    },
    kingbed:{
        type: Number,
        required: true
    },
    queenbed:{
        type: Number,
        required: true
    },
    imageurls:[],
    breakfastPrice:{
        type: Number,
        required: true
    },
    roomPrice:{
        type: Number,
        required: true
    },
    TV:{
        type: Boolean,
        default: false
    },
    balcony:{
        type: Boolean,
        default: false
    },
    freeWifi:{
        type: Boolean,
        default: false
    },
    cityView:{
        type: Boolean,
        default: false
    },
    oceanView:{
        type: Boolean,
        default: false
    },
    forestView:{
        type: Boolean,
        default: false
    },
    mountainView:{
        type: Boolean,
        default: false
    },
    airCondition:{
        type: Boolean,
        default: false
    },
    soundProof:{
        type: Boolean,
        default: false
    },
    currentBookings:[]
}, {timestamps: true})

export default mongoose.model("room", RoomSchema);