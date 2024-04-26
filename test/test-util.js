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

export const createManyTestContact = async () => {
  for (let i = 1; i <= 15; i++) {
    await prismaClient.contact.create({
      data: {
        username: `ornixz`,
        first_name: `Afif ${i}`,
        last_name: `Ramadhan ${i}`,
        email: `ramadhanafif172${i}@gmail.com`,
        phone: `081209876543${i}`,
      },
    });
  }
};

export const getTestContact = async () => {
  return prismaClient.contact.findFirst({
    where: {
      username: "ornixz",
    },
  });
};

export const removeAllTestAddresses = async () => {
  return prismaClient.address.deleteMany({
    where: {
      contact: {
        username: "ornixz",
      },
    },
  });
};
