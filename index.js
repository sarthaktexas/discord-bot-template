require('dotenv').config()

const Discord = require("discord.js");
const config = require("./config.js");
const client = new Discord.Client();

client.on('ready', () => {
	console.log('Logged in as ' + client.user.username + '#' + client.user.discriminator);
});

client.on('message', async msg => {
    console.log(msg.content);
});

client.login(process.env.DISCORD_TOKEN);