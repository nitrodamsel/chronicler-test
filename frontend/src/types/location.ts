import type { SuccessResponse } from "./base";

type DistanceData = {
  totalDistance: number;
};

export type DistanceResponse = SuccessResponse<DistanceData>;
