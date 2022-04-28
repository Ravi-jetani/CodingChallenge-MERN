const faker = require("faker");
const { getObjectId } = require("mongo-seeding");

const books = [];
const shelves = ["fiction", "non-fiction", "poetry"];
for (let i = 0; i < 100; i += 1) {
  books.push({
    shelfId: getObjectId(shelves[Math.floor(Math.random() * shelves.length)]),
    title: faker.commerce.productName(),
    isbn: faker.random.alphaNumeric(10),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  });
}

module.exports = books;
