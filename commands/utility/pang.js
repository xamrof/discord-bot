const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pang")
    .setDescription("Replies with pong"),
  async execute(interaction) {
    await interaction.reply("pong!");
  },
};
