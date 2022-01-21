import {
  Bson,
  MongoClient,
} from "https://deno.land/x/mongo@v0.29.0/mod.ts";

// const client = new MongoClient();


// // Connecting to a Mongo Atlas Database
// await client.connect({
//   db: "Test",
//   tls: true,
//   servers: [
//     {
//       host: "cluster0-jjpui.mongodb.net",
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
// await client.connect(
//   "mongodb+srv://Test:Test@cluster0-jjpui.mongodb.net/Test?authMechanism=SCRAM-SHA-1",
// );

//uTyAZp11kktRh3YH

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.jjpui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});