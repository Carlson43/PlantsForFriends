import {
    Bson,
    MongoClient,
  } from "https://deno.land/x/mongo@0.29.0/mod.ts";

  const client = new MongoClient();



// Connecting to a Mongo Atlas Database
await client.connect({
  db: "Deno",
  tls: true,
  servers: [
    {
      host: "mongodb+srv://PlantsForFriends:<password>@cluster0.jjpui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
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
