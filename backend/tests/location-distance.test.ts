import request from "supertest";
import { app } from "../src/app.js";

describe("POST /api/v1/locations/distance", () => {
  it("returns totalDistance from two-column text data", async () => {
    const payload = ["3   4", "4   3", "2   5", "1   3", "3   9", "3   3"].join("\n");

    const response = await request(app)
      .post("/api/v1/locations/distance")
      .attach("file", Buffer.from(payload, "utf-8"), "input.txt");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "Total distance calculated successfully.",
      data: {
        totalDistance: 11,
      },
    });
  });

  it("rejects non .txt uploads", async () => {
    const response = await request(app)
      .post("/api/v1/locations/distance")
      .attach("file", Buffer.from("1 2", "utf-8"), "input.csv");

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: "Only .txt files are allowed.",
      error: "Only .txt files are allowed.",
    });
  });

  it("returns a meaningful validation message for malformed rows", async () => {
    const response = await request(app)
      .post("/api/v1/locations/distance")
      .attach("file", Buffer.from("1 2 3", "utf-8"), "input.txt");

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: "Line 1 must contain exactly two values separated by whitespace.",
      error: "Line 1 must contain exactly two values separated by whitespace.",
    });
  });
});
