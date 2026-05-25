import request from "supertest";
import { app } from "../src/app.js";

describe("GET /health", () => {
  it("returns the service status payload", async () => {
    const response = await request(app).get("/api/v1/health");

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      status: "ok",
    });
    expect(typeof response.body.timestamp).toBe("string");
  });
});
