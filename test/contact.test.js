import supertest from "supertest";
import {
  createTestUser,
  removeAllTestContacts,
  removeTestUser,
} from "./test-util.js";
import { web } from "../src/app/web.js";

describe("POST /api/contacts", function () {
  beforeEach(async () => {
    await createTestUser();
  });

  afterEach(async () => {
    await removeAllTestContacts();
    await removeTestUser();
  });

  it("should can create new contact", async () => {
    const result = await supertest(web)
      .post("/api/contacts")
      .set("Authorization", "test")
      .send({
        first_name: "Afif",
        last_name: "Ramadhan",
        email: "ramadhanafif172@gmail.com",
        phone: "081209876543",
      });

    expect(result.status).toBe(200);
    expect(result.body.data.id).toBeDefined();
    expect(result.body.data.first_name).toBe("Afif");
    expect(result.body.data.last_name).toBe("Ramadhan");
    expect(result.body.data.email).toBe("ramadhanafif172@gmail.com");
    expect(result.body.data.phone).toBe("081209876543");
  });

  it("should reject if the request is invalid", async () => {
    const result = await supertest(web)
      .post("/api/contacts")
      .set("Authorization", "test")
      .send({
        first_name: "",
        last_name: "Ramadhan",
        email: "ramadhanafif172",
        phone: "08120987654323520218409197979679676911289401",
      });
    
    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });
});
