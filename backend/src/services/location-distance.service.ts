import { RESPONSE_MESSAGES } from "../constants/response-messages.js";
import { AppError } from "../lib/errors.js";

// Converts a line of text into a pair of numbers, validating the format and content
function toNumbersPair(line: string, lineNumber: number): [number, number] {
  const pieces = line.trim().split(/\s+/); // Split the line by whitespace and trim it

  // Validate that the line contains exactly two pieces of data
  if (pieces.length !== 2) {
    throw new AppError(400, RESPONSE_MESSAGES.invalidRowFormat(lineNumber));
  }

  // Convert the two pieces of data into numbers
  const left = Number(pieces[0]);
  const right = Number(pieces[1]);

  // Validate that both numbers are finite
  if (!Number.isFinite(left) || !Number.isFinite(right)) {
    throw new AppError(400, RESPONSE_MESSAGES.invalidRowNumber(lineNumber));
  }

  // Return the pair of numbers as a tuple
  return [left, right];
}

// Calculates the total distance from the text content of the uploaded file
export function calculateTotalDistanceFromText(content: string): number {
  // Split the content into lines, trim whitespace, and filter out empty lines
  const lines = content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  // If there are no valid lines, throw an error indicating the file is empty
  if (lines.length === 0) {
    throw new AppError(400, RESPONSE_MESSAGES.uploadEmptyFile);
  }

  // Initialize two arrays to hold the left and right values from each line
  const leftList: number[] = [];
  const rightList: number[] = [];

  // Process each line to extract the left and right numbers, and populate the respective arrays
  lines.forEach((line, index) => {
    const [left, right] = toNumbersPair(line, index + 1);
    leftList.push(left);
    rightList.push(right);
  });

  // Sort both lists for accurate comparison of corresponding values
  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  // Calculate the total distance by summing the absolute differences between corresponding values in the sorted lists
  return leftList.reduce((total, leftValue, index) => {
    return total + Math.abs(leftValue - rightList[index]);
  }, 0);
}
