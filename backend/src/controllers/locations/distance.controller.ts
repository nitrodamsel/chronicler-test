import type { Request, Response } from "express";
import { RESPONSE_MESSAGES } from "../../constants/response-messages.js";
import { AppError } from "../../lib/errors.js";
import { calculateTotalDistanceFromText } from "../../services/location-distance.service.js";

export function postLocationDistance(req: Request, res: Response): void {
  if (!req.file) {
    throw new AppError(400, RESPONSE_MESSAGES.uploadFileRequired);
  }

  // Convert the uploaded file's buffer to a string and calculate the total distance using the service function
  const content = req.file.buffer.toString("utf-8");
  const totalDistance = calculateTotalDistanceFromText(content);

  res.status(200).json({
    message: RESPONSE_MESSAGES.locationDistanceCalculated,
    data: {
      totalDistance,
    },
  });
}
