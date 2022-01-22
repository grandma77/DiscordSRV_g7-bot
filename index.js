const Discord = require ("discord.js")

const config = require("./config.json")

const generateImage = require("./generateImage.js")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
        "GUILD_PRESENCES",
        "GUILD_INVITES",
        "GUILD_BANS",
        "DIRECT_MESSAGES",
        "GUILD_VOICE_STATES",
        "GUILD_SCHEDULED_EVENTS",
        "GUILD_INTEGRATIONS"
    ]
})

let bot = {
    client,
    prefix: "g7/",
    owners: "718471510796533911"
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

client.on("ready", () => {
    client.user.setStatus("online"),
    client.user.setActivity("g7/help", { type : "WATCHING"})
})


client.login(config.token)