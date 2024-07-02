
import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({

    id: {
        type :Number,
       /* validate :{
            validator : function(value){
                return value.toString().length<=11;
            },
            message : (props)=>`${props.value} exceeds the 11 digit limit`
        },*/
        //required : [true, "Please provide a id"],
        unique : true,
        required:true,
    },
    label : {
        type : String,
        default : null,
        //required : [true,"Enter payment label"],
    },
    amount :{
        type : String,
        default : null,
        //required : [true,"Enter Amount"],

    },
    status:{
        type : Number,
        default : null,
        /*validate:{
            validator:function(value){
                return value.toString().length<=11;
            },
            message : (props) =>`{props.value} exceeds the 11 digit limit`
        },*/
        

    },
    time:{
        type:String,
        default : null,
       // required : [true,'Enter Time']
    },
   
});
// if taken User then small all and pluralise the variable
const Payment = mongoose.models.Payment || mongoose.model("Payment",PaymentSchema);


export default Payment;