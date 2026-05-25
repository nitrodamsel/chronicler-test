import cors from "cors";
import express, { type NextFunction, type Request, type Response } from "express";
import { RESPONSE_MESSAGES } from "./constants/response-messages.js";
import { AppError } from "./lib/errors.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import { requestLogger } from "./middlewares/request-logger.middleware.js";
import { apiRouter } from "./routes/index.js";

export const app = express();

app.disable("x-powered-by");

// Enable CORS for all routes
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Parse URL-encoded data with the querystring library (extended: false)
app.use(express.urlencoded({ extended: true }));

// Log incoming requests using the requestLogger middleware
app.use(requestLogger);

// Mount the API router at the /api path
app.use("/api", apiRouter);

// Handle 404 errors for undefined routes
app.use((_req: Request, _res: Response, next: NextFunction) => {
  next(new AppError(404, RESPONSE_MESSAGES.routeNotFound));
});

// Global error handling middleware
app.use(errorHandler);
