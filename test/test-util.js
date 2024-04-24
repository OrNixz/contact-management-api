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

export const getTestUser = async () => {
  return prismaClient.user.findUnique({
    where: {
      username: "ornixz",
    },
  });
};

export const removeAllTestContacts = async () => {
  await prismaClient.contact.deleteMany({
    where: {
      username: "ornixz",
    },
  });
};

export const createTestContact = async () => {
  await prismaClient.contact.create({
    data: {
      username: "ornixz",
      first_name: "Afif",
      last_name: "Ramadhan",
      email: "ramadhanafif172@gmail.com",
      phone: "081209876543",
    },
  });
};

export const getTestContact = async () => {
  return prismaClient.contact.findFirst({
    where: {
      username: "ornixz",
    },
  });
};
