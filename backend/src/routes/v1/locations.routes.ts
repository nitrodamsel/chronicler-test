import { Router } from "express";
import { postLocationDistance } from "../../controllers/locations/distance.controller.js";
import { uploadTxtFile } from "../../middlewares/upload.middleware.js";

export const locationsRouter = Router();

locationsRouter.post("/distance", uploadTxtFile, postLocationDistance);
