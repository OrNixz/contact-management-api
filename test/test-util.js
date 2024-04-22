import { prismaClient } from "../src/app/database.js";
import bcrypt from "bcrypt";

export const removeTestUser = async () => {
  await prismaClient.user.deleteMany({
    where: {
      username: "ornixz",
    },
  });
};

export const createTestUser = async () => {
  await prismaClient.user.create({
    data: {
      username: "ornixz",
      password: await bcrypt.hash("rahasia", 10),
      name: "Afif Ramadhan",
      token: "test",
    },
  });
};
