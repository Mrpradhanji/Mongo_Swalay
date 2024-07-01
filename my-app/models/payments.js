
import mongoose,{Schema} from 'mongoose';

const PaymentSchema = new Schema({

    id: {
        type :Number,
       /* validate :{
            validator : function(value){
                return value.toString().length<=11;
            },
            message : (props)=>`${props.value} exceeds the 11 digit limit`
        },*/
        required : [true, "Please provide a id"],
        unique : true,
    },
    label : {
        type : String,
        required : [true,"Enter payment label"],
    },
    amount :{
        type : String,
        required : [true,"Enter Amount"],

    },
    status:{
        type : Number,
        /*validate:{
            validator:function(value){
                return value.toString().length<=11;
            },
            message : (props) =>`{props.value} exceeds the 11 digit limit`
        },*/
        

    },
    time:{
        type:String,
        required : [true,'Enter Time']
    },
   
});
// if taken User then small all and pluralise the variable
const Payment = mongoose.models.Payments || mongoose.model("Payment",PaymentSchema)


export default Payment;