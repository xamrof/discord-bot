const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("translate")
    .setDescription("Translate a Language")
    .addStringOption(text => 
      text
      .setName('sentence')
      .setDescription('The setence that will be translated')
    )
    ,
  async execute(interaction) {
    const probando = async (text) => {
      const response = await fetch('http://127.0.0.1:5000/portuguese', {
      method: 'POST',
      body: JSON.stringify({text}),
      headers: {
        'Content-Type': 'application/json'
      }
      })
      const data = await response.json()
      return data
    }

    const text = interaction.options.getString('sentence')

    const {translation} = await probando(text)

    await interaction.reply(translation);

  },
};
