import { Event } from "../structures/Event";
import { client } from "..";
import { CommandInteractionOptionResolver } from "discord.js";
import { ExtendedInteraction } from "../typings/Command";

export default new Event("interactionCreate", async function (interaction) {
  if (interaction.isCommand()) {
    await interaction.deferReply();
    const command = client.commands.get(interaction.commandName);
    if (!command)
      return interaction.followUp("Var olmayan bir komutu çalıştırdın.");

    command.run({
      args: interaction.options as CommandInteractionOptionResolver,
      client,
      interaction: interaction as ExtendedInteraction,
    });
  }
});
