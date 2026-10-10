"use server";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

async function main() {
	const connectionString = process.env.DATABASE_URL;

	if (!connectionString) {
		throw new Error("DATABASE_URL is not configured");
	}

	const client = postgres(connectionString!, { prepare: false, max: 5 });
	const db = drizzle({ client });
	return db;
}

main();
