import supertest from "supertest";
import { web } from "../src/app/web.js";
import { logger } from "../src/app/logging.js";
import { createTestUser, removeTestUser } from "./test-util.js";

describe("POST /api/users", function () {
  afterEach(async () => {
    await removeTestUser();
  });

  it("should can register new user", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "ornixz",
      password: "rahasia",
      name: "Afif Ramadhan",
    });

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("ornixz");
    expect(result.body.data.name).toBe("Afif Ramadhan");
    expect(result.body.data.password).toBeUndefined();
  });

  it("should reject if the request is invalid", async () => {
    const result = await supertest(web).post("/api/users").send({
      username: "",
      password: "",
      name: "",
    });

    logger.info(result.body);

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });

  it("should reject if the username is already taken", async () => {
    let result = await supertest(web).post("/api/users").send({
      username: "ornixz",
      password: "rahasia",
      name: "Afif Ramadhan",
    });

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("ornixz");
    expect(result.body.data.name).toBe("Afif Ramadhan");
    expect(result.body.data.password).toBeUndefined();

    result = await supertest(web).post("/api/users").send({
      username: "ornixz",
      password: "rahasia",
      name: "Afif Ramadhan",
    });

    logger.info(result.body);

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });
});

describe("POST /api/users/login", function () {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeTestUser();
  });

  it("should can login with correct credentials", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      username: "ornixz",
      password: "rahasia",
    });

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data.token).toBeDefined();
    expect(result.body.data.token).not.toBe("test");
  });

  it("should reject login if the request is invalid", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      username: "",
      password: "",
    });

    logger.info(result.body);

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });

  it("should reject login if the password is wrong", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      username: "ornixz",
      password: "salah",
    });

    logger.info(result.body);

    expect(result.status).toBe(401);
    expect(result.body.errors).toBeDefined();
  });

  it("should reject login if the username is wrong", async () => {
    const result = await supertest(web).post("/api/users/login").send({
      username: "salah",
      password: "rahasia",
    });

    logger.info(result.body);

    expect(result.status).toBe(401);
    expect(result.body.errors).toBeDefined();
  });
});

describe("GET /api/users/current", function () {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeTestUser();
  });

  it("should can get current user", async () => {
    const result = await supertest(web)
      .get("/api/users/current")
      .set("Authorization", "test");

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("ornixz");
    expect(result.body.data.name).toBe("Afif Ramadhan");
  });

  it("should reject if the token is invalid", async () => {
    const result = await supertest(web)
      .get("/api/users/current")
      .set("Authorization", "token");

    expect(result.status).toBe(401);
    expect(result.body.errors).toBeDefined();
  });
});
