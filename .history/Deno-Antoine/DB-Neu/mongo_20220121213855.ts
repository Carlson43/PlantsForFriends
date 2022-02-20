import {
  Bson,
  MongoClient,
} from "https://deno.land/x/mongo@v0.29.0/mod.ts";

const client = new MongoClient();


// // Connecting to a Mongo Atlas Database
// await client.connect({
//   db: "Test",
//   tls: true,
//   servers: [
//     {
//       host: "mongodb+srv://Test:Test@cluster0.jjpui.mongodb.net/Test?retryWrites=true&w=majority",
//       port: 27017,
//     },
//   ],
//   credential: {
//     username: "Test",
//     password: "Test",
//     db: "Test",
//     mechanism: "SCRAM-SHA-1",
//   },
// });

// Connect using srv url
await client.connect(
  "mongodb+srv://Test:Test@Test/Test?authMechanism=SCRAM-SHA-1",
);

//uTyAZp11kktRh3YH