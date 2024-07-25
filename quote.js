// import fs from "node:fs/promises";
import { readFile } from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "quotes.json";

export async function getQuotes() {
  try {
    const data = await readFile(fileName, "utf8");
    console.log(data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

export async function addQuote(quoteText) {}

export async function getRandomQuote() {}

export async function editQuote(id, quoteText) {}

export async function deleteQuote(id) {}
