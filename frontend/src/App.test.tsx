import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import { submitLocationsFile } from "./lib/locationsApi";

vi.mock("./lib/locationsApi", () => ({
  submitLocationsFile: vi.fn(),
}));

const mockedSubmitLocationsFile = vi.mocked(submitLocationsFile);

describe("App", () => {
  beforeEach(() => {
    mockedSubmitLocationsFile.mockReset();
  });

  it("auto-submits a .txt file and shows the returned distance", async () => {
    mockedSubmitLocationsFile.mockResolvedValue({
      message: "Total distance calculated successfully.",
      data: { totalDistance: 123 },
    });

    render(<App />);

    expect(screen.getByRole("heading", { name: /chronicler/i })).toBeInTheDocument();

    const fileInput = screen.getByLabelText(/choose a text file/i);
    const file = new File(["1 2\n3 4"], "input.txt", { type: "text/plain" });

    fireEvent.change(fileInput, { target: { files: [file] } });

    await waitFor(() => expect(mockedSubmitLocationsFile).toHaveBeenCalledWith(file));

    expect(screen.getByText(/selected: input.txt/i)).toBeInTheDocument();
    expect(screen.getByText("123")).toBeInTheDocument();
  });

  it("rejects non-txt files before calling the api", () => {
    render(<App />);

    const fileInput = screen.getByLabelText(/choose a text file/i);
    const file = new File(["<html />"], "notes.md", { type: "text/markdown" });

    fireEvent.change(fileInput, { target: { files: [file] } });

    expect(screen.getByRole("alert")).toHaveTextContent(/upload a \.txt file/i);
    expect(mockedSubmitLocationsFile).not.toHaveBeenCalled();
  });
});
