import { Router } from "express";
import { healthRouter } from "./health.routes.js";
import { locationsRouter } from "./locations.routes.js";

export const apiRouter = Router();

apiRouter.use("/health", healthRouter);
apiRouter.use("/locations", locationsRouter);
