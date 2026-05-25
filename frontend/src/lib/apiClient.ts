import axios from "axios";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "/api/v1",
});

// POST function with catch block to handle errors and return a consistent error message format
export async function safePost<T>(url: string, data?: unknown): Promise<T> {
  try {
    const response = await apiClient.post<T>(url, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.error ?? error.message;
      console.error("API POST request failed:", message);
      throw new Error(message, { cause: error });
    }

    throw new Error(
      error instanceof Error ? error.message : "An unknown error occurred during the API request.",
      { cause: error },
    );
  }
}
