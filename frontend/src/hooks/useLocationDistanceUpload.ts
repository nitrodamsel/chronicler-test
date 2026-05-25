import { useState, type ChangeEvent } from "react";
import { submitLocationsFile } from "../lib/locationsApi";

// Helper function to check if a given file is a plain text file based on its name and MIME type
function isPlainTextFile(file: File) {
  const fileName = file.name.toLowerCase();
  return fileName.endsWith(".txt") || file.type === "text/plain";
}

// Custom hook to manage the state and logic for uploading a .txt file and calculating the total distance
export function useLocationDistanceUpload() {
  // States to manage the selected file, error messages, total distance, and submission status
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [totalDistance, setTotalDistance] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to handle the file submission process, including API call and error handling
  const submitFile = async (file: File) => {
    setIsSubmitting(true);
    setErrorMessage(null);
    setTotalDistance(null);

    try {
      const response = await submitLocationsFile(file);
      setTotalDistance(response.data.totalDistance);
    } catch (error) {
      console.error(error);
      setErrorMessage(error instanceof Error ? error.message : "An unknown error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Event handler for when the user selects a file
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const nextFile = event.target.files?.[0] ?? null;

    if (!nextFile) {
      setSelectedFile(null);
      setErrorMessage(null);
      setTotalDistance(null);
      return;
    }

    if (!isPlainTextFile(nextFile)) {
      setSelectedFile(null);
      setErrorMessage("Please upload a .txt file.");
      setTotalDistance(null);
      return;
    }

    setSelectedFile(nextFile);
    setErrorMessage(null);
    await submitFile(nextFile);
  };

  // Return the relevant state and handler function for use in components
  return {
    errorMessage,
    fileName: selectedFile?.name ?? null,
    handleFileChange,
    isSubmitting,
    totalDistance,
  };
}
