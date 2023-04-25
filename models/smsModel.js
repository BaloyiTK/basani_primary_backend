import mongoose from "mongoose";
import smsSchema from "../schemas/smsSchema";

const Sms = mongoose.model("SMS", smsSchema);

export default Sms;