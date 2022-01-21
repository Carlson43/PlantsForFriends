import {
  Bson,
  MongoClient,
} from "https://deno.land/x/mongo@v0.29.0/mod.ts";

const client = new MongoClient();


// Connecting to a Mongo Atlas Database
// await client.connect({
//   db: "Test",
//   tls: true,
//   servers: [
//     {
//       host: "Cluster0-jjpui.mongodb.net",
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

// // Connect using srv url
await client.connect(
  "mongodb+srv://Test:Test@cluster0.jjpui.mongodb.net/Test?authMechanism=SCRAM-SHA-1",
);

// Defining schema interface
interface UserSchema {
  _id: Bson.ObjectId;
  username: string;
  password: string;
}

const db = client.database("Test");
const users = db.collection<UserSchema>("Test");

const insertId = await users.insertOne({
  username: "user1",
  password: "pass1",
});


