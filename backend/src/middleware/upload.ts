import multer from "multer";
import express from "express";
import path from "path";

const router = express.Router();

const uploadPath = path.join(process.cwd(), "src", "uploads");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniquefile = Date.now() + "-" + file.originalname;
    cb(null, uniquefile);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("imageUrl"), (req, res) => {
  if (req.file) {
    res.json({ filename: req.file.filename });
  } else {
    res.status(400).json({ Error: "No file uploaded" });
  }
});

export default router;