import mongoose from "mongoose";
import admissionSchema from "../schemas/admissionSchema.js";

const Admission = mongoose.model("Admission", admissionSchema);

export default Admission;