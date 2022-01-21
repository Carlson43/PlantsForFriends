import {
  Bson,
  MongoClient,
} from "https://deno.land/x/mongo@v0.29.0/mod.ts";

const client = new MongoClient();

// Connecting to a Local Database
await client.connect("mongodb://127.0.0.1:27017");

// Connecting to a Mongo Atlas Database
await client.connect({
  db: "Test",
  tls: true,
  servers: [
    {
      host: "cluster0",
      port: 27017,
    },
  ],
  credential: {
    username: "Test",
    password: "uTyAZp11kktRh3YH",
    db: "Test",
    mechanism: "SCRAM-SHA-1",
  },
});

// Connect using srv url
await client.connect(
  "mongodb+srv://Test:uTyAZp11kktRh3YH@cluster0/Deno?authMechanism=SCRAM-SHA-1",
);

//uTyAZp11kktRh3YH