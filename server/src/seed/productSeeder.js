import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import { faker } from "@faker-js/faker";

import connectDB from "../config/db.js";
import Product from "../models/Product.js";
import { categories } from "../constants/categories.js";

const TOTAL_PRODUCTS = 50000;
const BATCH_SIZE = 1000;

const generateProduct = (index) => {
  const cost = faker.number.float({
    min: 5,
    max: 500,
    fractionDigits: 2,
  });

  const price = faker.number.float({
    min: cost + 5,
    max: cost + 500,
    fractionDigits: 2,
  });

  return {
    productName: faker.commerce.productName(),

    sku: `SKU${String(index + 1).padStart(6, "0")}`,

    category:
      categories[Math.floor(Math.random() * categories.length)],

    price,

    cost,

    stockQuantity: faker.number.int({
      min: 0,
      max: 1000,
    }),

    reorderLevel: faker.number.int({
      min: 5,
      max: 50,
    }),

    lastUpdated: faker.date.recent(),
  };
};

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log("Connected to MongoDB");

    await Product.deleteMany({});

    console.log("Old products removed.");

    for (let i = 0; i < TOTAL_PRODUCTS; i += BATCH_SIZE) {
      const products = [];

      for (
        let j = i;
        j < Math.min(i + BATCH_SIZE, TOTAL_PRODUCTS);
        j++
      ) {
        products.push(generateProduct(j));
      }

      try {
  await Product.insertMany(products, { ordered: true });

  console.log(
    `Inserted ${Math.min(i + BATCH_SIZE, TOTAL_PRODUCTS)}/${TOTAL_PRODUCTS}`
  );
} catch (err) {
  console.error("Batch failed!");
  console.error(err);
  throw err;
}

      console.log(
        `Inserted ${Math.min(
          i + BATCH_SIZE,
          TOTAL_PRODUCTS
        )}/${TOTAL_PRODUCTS}`
      );
    }

    console.log("Database seeded successfully.");

    mongoose.connection.close();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

seedDatabase();
