import mongoose from "mongoose";

const {Schema} = mongoose;

const RoomSchema = new Schema({
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
        type: String,
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
    Image:{
        type: String,
        required: true
    },
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
    hotelId:{
        type: String,
        required: true
    },
    booking:{
        type: Array,
        default: []
    }
}, {timestamps: true})

export default mongoose.model("room", RoomSchema);