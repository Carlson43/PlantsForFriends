
import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "PlantsForFriends",
  password: "laptop-omen-viselike",
});

async function createDatabase(dbname: "Data") {
    console.log("Creating database");
    await client.execute(`CREATE DATABASE IF NOT EXISTS ${dbname}`);
  }


  await createDatabase("Data");