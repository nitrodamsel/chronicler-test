import multer from "multer";
import path from "node:path";
import { RESPONSE_MESSAGES } from "../constants/response-messages.js";
import { AppError } from "../lib/errors.js";

// Multer configuration to handle file uploads, specifically for .txt files
const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (_req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase();

    if (extension !== ".txt") {
      cb(new AppError(400, RESPONSE_MESSAGES.uploadTxtOnly));
      return;
    }

    cb(null, true);
  },
});

// Middleware function to handle the upload of a single .txt file with the field name "file"
export const uploadTxtFile = upload.single("file");
