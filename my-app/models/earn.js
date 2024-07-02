import mongoose from "mongoose";

const EarnSchema = new mongoose.Schema({
       
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    label: {
        type: String,
        default: null,
    },
    earning: {
        type: String,
        default: null,
    },
    period: {
        type: String,
        default: null,
    },
    stamp: {
        type: Date,
        default: Date.now,
    },
      

});

const Earn = mongoose.models.Earn || mongoose.model("Earn",EarnSchema);

export default Earn;