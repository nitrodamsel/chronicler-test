import type { DistanceResponse } from "../types/location";
import { safePost } from "./apiClient";

// Submits a .txt file containing location data to the backend and returns the total distance calculated by the server
export async function submitLocationsFile(file: File): Promise<DistanceResponse> {
  const formData = new FormData();
  formData.append("file", file);

  const response = await safePost<DistanceResponse>("/locations/distance", formData);

  return response;
}
