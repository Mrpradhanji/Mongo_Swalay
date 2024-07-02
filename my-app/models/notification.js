import mongoose from "mongoose";

const NotifySchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
      },
      time:{
        type:DateTime,
        default:null,

      },
      message:{
        type:String,
        default:null
    },
});

const Notify = mongoose.models.Notify || mongoose.model("Notify",NotifySchema);

export default Notify;
