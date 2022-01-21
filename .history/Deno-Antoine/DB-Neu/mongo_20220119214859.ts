import {
    Bson,
    MongoClient,
  } from "https://deno.land/x/mongo@v0.29.0/mod.ts";


  import { Client } from "https://deno.land/x/mysql/mod.ts";

  const client = new MongoClient();

// Connecting to a Mongo Atlas Database
await client.connect({
  db: "Deno",
  tls: true,
  servers: [
    {
      host: "cluster0",
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


//uTyAZp11kktRh3YH