import mongoose from "mongoose";

import emailSchema from "../schemas/emailSchema.js";

const Email = mongoose.model("Email", emailSchema)

export default Email;