const { string } = require('joi');
const mongoose = require('mongoose');


const registrationSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        presentLocation: {
            type: String,
            required: true,
        },
        deliveryLocation: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isEighteen: {
            type: Boolean,
            required: true,
        },
        riderVehicle: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            enum: ['male', 'female'],
            required: true,
        },
        yourImg: {
            type: String,
            required: true,
        },
        nid: {
            type: Number,
            required: true,
        },
        nidfrontImg: {
            type: String,
            required: true,
        },
        nidBackImg: {
            type: String,
            required: true,
        },
        nomineeImg: {
            type: String,
            required: true,
        },
    }
)

const Rider = mongoose.model("Rider", registrationSchema);

module.exports = Rider;