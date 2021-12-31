const Discord = require ("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
    ]
})

client.on("ready", () => {
    console.log(`${client.user.tag} is online`)})

client.on("messageCreate", (message) =>{
    if (message.content == "g7/help"){
        message.reply("This bot is being worked on right now")
    }
})

client.login(procces.env.TOKEN)

