//uTyAZp11kktRh3YH

import {
    Bson,
    MongoClient,
  } from "https://deno.land/x/mongo@v0.29.0/mod.ts";


  import { Client } from "https://deno.land/x/mysql/mod.ts";



// Connecting to a Mongo Atlas Database
await Client.connect({
  db: "Deno",
  tls: true,
  servers: [
    {
      host: "mongodb+srv://Test:uTyAZp11kktRh3YH@cluster0.jjpui.mongodb.net/Deno?retryWrites=true&w=majority",
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
