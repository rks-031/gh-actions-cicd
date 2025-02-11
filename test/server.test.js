const request = require("supertest");
const app = require("../server"); // Modify this to export the app instance

describe("GET /", () => {
  it("should return Hello, Cloud Run!", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello, Cloud Run!");
  });
});
