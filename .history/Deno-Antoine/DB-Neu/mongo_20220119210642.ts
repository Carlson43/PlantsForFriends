import {
    Bson,
    MongoClient,
  } from "https://deno.land/x/mongo@v0.29.0/mod.ts";

  const client = new MongoClient();



// Connecting to a Mongo Atlas Database
await client.connect({
  db: "Deno",
  tls: true,
  servers: [
    {
      host: "https://cloud.mongodb.com/v2/61e86d7ab7cdf94f4af33ecc#clusters",
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
