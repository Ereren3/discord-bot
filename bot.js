require('dotenv').config();
const {Client, Events, GatewayIntentBits} = require('discord.js')
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});
const PREFIX = '31 '

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.content.startsWith(PREFIX)) {

        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(' ');

        if (CMD_NAME === 'kick') {

            if (args[0].toString().startsWith('<@')) {

                if (message.member.permissions.has('2')) {

                    message.guild.members.kick(args[0]
                        .toString()
                        .slice(2, 20))
                        .then(
                            message.reply('user kicked!')
                        )
                        .catch(err => console.log(err));
                } else {
                    message.reply('Yapamazsin orospu evladi')
                }

            }


        } else if (CMD_NAME === 'ban') {

            if (args[0].toString().startsWith('<@')) {

                if (message.member.permissions.has('4')) {

                    message.guild.members.kick(args[0]
                        .toString()
                        .slice(2, 20))
                        .then(
                            message.reply('user kicked!')
                        )
                        .catch(err => console.log(err));
                } else {
                    message.reply('Yapamazsin orospu evladi')
                }

            }

        } else if (CMD_NAME === 'delete') {

            if (message.member.permissions.has('8192')){
                message.channel
            }

        }


    }

});

client.login(process.env.DISCORDJS_BOT_TOKEN);