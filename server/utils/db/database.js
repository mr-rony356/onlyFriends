const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");

// Access the environment file
// Switch between .env.development and .env.production state
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const client = new MongoClient(process.env.DATABASE_URL);

// Middleware to attach the database client to the request object
const database = async (req, res, next) => {
  try {
    if (!client.isConnected()) {
      await client.connect(); // Connect the client if not already connected
    }
    req.dbClient = client;
    req.db = client.db(process.env.DATABASE_NAME);
    return next();
  } catch (error) {
    console.error("Failed to connect to the database", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = database;
