import mongoose, { Schema } from 'mongoose';

const PaymentSchema = new Schema({
    id: {
        type: Number,
        required: [true, "Please provide an id"],
        unique: true,
    },
    label: {
        type: String,
        required: [true, "Enter payment label"],
    },
    amount: {
        type: String,
        required: [true, "Enter Amount"],
    },
    status: {
        type: Number,
    },
    time: {
        type: String,
        required: [true, "Enter Time"],
    },
});

const Payment = mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);

export default Payment;
