//uTyAZp11kktRh3YH

import {
    Bson,
    MongoClient,
  } from "https://deno.land/x/mongo@v0.29.0/mod.ts";

  const client = new MongoClient();
const db = client.database("Database")


// Connecting to a Mongo Atlas Database
await client.connect({
  db: "Deno",
  tls: true,
  servers: [
    {
      host: "mongodb+srv://Test:uTyAZp11kktRh3YH@cluster0.jjpui.mongodb.net/Database?retryWrites=true&w=majority",
      port: 27017,
    },
  ],
  credential: {
    username: "PlantsForFriends",
    password: "laptop-omen-viselike",
    db: "Deno",
    mechanism: "SCRAM-SHA-1",
  },
});
