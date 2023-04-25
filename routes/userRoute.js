import express from "express";
import changePassword from "../controllers/auth/changePassword.js";
import forgotPassword from "../controllers/auth/forgotPassword.js";
import getUser from "../controllers/getUser.js";
import login from "../controllers/auth/login.js";
import loginStatus from "../controllers/auth/loginStatus.js";
import logout from "../controllers/auth/logout.js";
import register from "../controllers/auth/register.js";
import resetPassword from "../controllers/auth/resetPassword.js";
import updateUser from "../controllers/updateUser.js";
import uploadProfilePhoto from "../controllers/uploadProfilePhoto.js";
import protect from "../middlewares/authMiddleware.js";
import multer from "multer";
import fs from "fs";


// Set up Multer storage engine
const storage = multer.diskStorage({
  //destination: (req, file, cb) => {
  // cb(null, "uploads/");
  //},
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

// Set up Multer upload middleware
const upload = multer({ storage: storage });

// Create the uploads directory if it does not exist
if (!fs.existsSync('./uploads')){
  fs.mkdirSync('./uploads');
}

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/user", protect, getUser);
router.get("/loggedin", loginStatus);
router.patch("/updateuser", protect, updateUser);
router.patch("/changepassword", protect, changePassword);
router.post("/forgotpassword", forgotPassword);
router.post("/resetpassword", resetPassword)
router.post("/upload", upload.single("image"),protect, uploadProfilePhoto);

export default router;
