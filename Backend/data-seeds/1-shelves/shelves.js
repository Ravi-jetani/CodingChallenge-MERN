const faker = require("faker");
const { getObjectId } = require("mongo-seeding");

const shelves = [
  {
    _id: getObjectId("fiction"),
    name: "Fiction",
    slug: "fiction",
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  },
  {
    _id: getObjectId("non-fiction"),
    name: "Non fiction",
    slug: "non-fiction",
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  },
  {
    _id: getObjectId("poetry"),
    name: "Poetry",
    slug: "poetry",
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  },
];

module.exports = shelves;
