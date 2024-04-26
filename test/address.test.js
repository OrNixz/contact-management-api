import {
  createTestContact,
  createTestUser,
  getTestContact,
  removeAllTestAddresses,
  removeAllTestContacts,
  removeTestUser,
} from "./test-util.js";
import { web } from "../src/app/web.js";
import supertest from "supertest";

describe("POST /api/contacts/:contactId/addresses", function () {
  beforeEach(async () => {
    await createTestUser();
    await createTestContact();
  });

  afterEach(async () => {
    await removeAllTestAddresses();
    await removeAllTestContacts();
    await removeTestUser();
  });

  it("should can create new address", async () => {
    const testContact = await getTestContact();

    const result = await supertest(web)
      .post("/api/contacts/" + testContact.id + "/addresses")
      .set("Authorization", "test")
      .send({
        street: "1 Chome-1-1 Yurakucho",
        city: "Chiyoda",
        province: "Tokyo",
        country: "Japan",
        postal_code: "100-0006",
      });

    expect(result.status).toBe(200);
    expect(result.body.data.id).toBeDefined();
    expect(result.body.data.street).toBe("1 Chome-1-1 Yurakucho");
    expect(result.body.data.city).toBe("Chiyoda");
    expect(result.body.data.province).toBe("Tokyo");
    expect(result.body.data.country).toBe("Japan");
    expect(result.body.data.postal_code).toBe("100-0006");
  });

  it("should reject the address request if it is invalid", async () => {
    const testContact = await getTestContact();

    const result = await supertest(web)
      .post("/api/contacts/" + testContact.id + "/addresses")
      .set("Authorization", "test")
      .send({
        street: "1 Chome-1-1 Yurakucho",
        city: "Chiyoda",
        province: "Tokyo",
        country: "",
        postal_code: "",
      });

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });

  it("should reject the address if the contact is not found", async () => {
    const testContact = await getTestContact();

    const result = await supertest(web)
      .post("/api/contacts/" + (testContact.id + 1) + "/addresses")
      .set("Authorization", "test")
      .send({
        street: "1 Chome-1-1 Yurakucho",
        city: "Chiyoda",
        province: "Tokyo",
        country: "",
        postal_code: "",
      });

    expect(result.status).toBe(404);
    expect(result.body.errors).toBeDefined();
  });
});
