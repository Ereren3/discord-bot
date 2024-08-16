const {SlashCommandBuilder, EmbedBuilder, PermissionsBitField} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Clear messages from the server')
        .addIntegerOption((option) => {
            option
                .setName('amount')
                .setDescription('amount of messages to clear')
                .setMinValue(1)
                .setMaxValue(100)
                .setRequired(true)
        })
        .addUserOption((option) => {
            option
                .setName('target')
                .setDescription('use this for specific person to clear')
        }),
    userPermissions: [PermissionsBitField.Flags.MessageDelete],
    botPermissions: [PermissionsBitField.Flags.MessageDelete],

    async execute(client, interaction) {
        const {options, channel} = interaction;
        let amount = options.getNumber();
        const target = options.getUser();
        
    }
}