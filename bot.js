const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("533668174227570708")
setInterval(function() {
channel.send(`test test credits free account gg  no lucky `);
}, 30)
})

client.login(process.env.BOT_TOKEN);