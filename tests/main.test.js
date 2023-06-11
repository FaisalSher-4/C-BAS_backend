const app = require("../routes/userManagement"); // your Express app
const request = require("supertest");

test("login with valid credentials", async () => {
  const response = await request(app)
    .post("/login")
    .send({ email: "test@test.com", password: "test123" });
  expect(response.statusCode).toBe(200);
  expect(response.body.message).toBe("User logged in successfully");
  expect(response.body.user).toHaveProperty("email", "test@test.com");
});

test("login with invalid email", async () => {
  const response = await request(app)
    .post("/login")
    .send({ email: "wrong@test.com", password: "test123" });
  expect(response.statusCode).toBe(401);
  expect(response.body.message).toBe("Invalid email or password");
});

test("login with invalid password", async () => {
  const response = await request(app)
    .post("/login")
    .send({ email: "test@test.com", password: "wrong123" });
  expect(response.statusCode).toBe(401);
  expect(response.body.message).toBe("Invalid email or password");
});
