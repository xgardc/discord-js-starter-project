import { Event } from "../structures/Event";

export default new Event("ready", function (client) {
  console.log(`Logged in as ${client.user.tag}`);
});
