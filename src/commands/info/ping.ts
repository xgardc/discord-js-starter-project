import { Command } from "../../structures/Command";

export default new Command({
  name: "ping",
  description: "Ping pong!",
  run: async function ({ interaction }) {
    interaction.followUp("Pong");
  },
  
});

/**
 * ve kodları öneriyo
 *  komutlar böyle