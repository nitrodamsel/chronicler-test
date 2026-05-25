export const RESPONSE_MESSAGES = {
  locationDistanceCalculated: "Total distance calculated successfully.",
  routeNotFound: "The requested endpoint was not found.",
  internalServerError: "Something went wrong on the server. Please try again.",
  uploadFileRequired: "Please upload a .txt file in the 'file' field.",
  uploadTxtOnly: "Only .txt files are allowed.",
  uploadEmptyFile: "The uploaded file is empty.",
  invalidRowFormat: (lineNumber: number) =>
    `Line ${lineNumber} must contain exactly two values separated by whitespace.`,
  invalidRowNumber: (lineNumber: number) =>
    `Line ${lineNumber} must contain valid numbers in both columns.`,
} as const;
