import supertest from "supertest";
import { web } from "../src/app/web.js";
import { prismaClient } from "../src/app/database.js";
import { logger } from "../src/app/logging.js";

describe("POST /api/users", function () {
  afterEach(async () => {
    await prismaClient.user.deleteMany({
      where: {
        username: "ornixz",
      },
    });
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
