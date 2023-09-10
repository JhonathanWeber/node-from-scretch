import { sql } from "./db.js";

const createTable = async () => {
  try {
    await sql`
            CREATE TABLE IF NOT EXISTS Videos (
                id TEXT PRIMARY KEY,
                title   TEXT,
                description TEXT,
                duration INTEGER
                );
                `;
    throw "Table created";
  } catch (error) {
    return console.log(error);
  }
};

const deleteTable = async () => {
  try {
    await sql`
            DROP TABLE IF EXISTS Videos;
            `;
    throw "Table deleted";
  } catch (error) {
    return console.log(error);
  }
};

// createTable();
// deleteTable();
