
import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "PlantsForFriends",
  password: "laptop-omen-viselike",
});

console.log(client)