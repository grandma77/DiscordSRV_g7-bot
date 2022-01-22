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

client.loadEvents(bot, false)

module.exports = bot

client.on("ready", () => {
    client.user.setStatus("online"),
    client.user.setActivity("g7/help", { type : "WATCHING"})
})

client.on("messageCreate", (message) =>{
    if (message.content == `${config.prefix}help`){
        message.reply("This bot is being worked on right now")
    }
    if (message.content == `${config.prefix}ip`){
        message.reply(`Bedrock: ${config.minecraftBIP}  Java ${config.minecraftIP}`)
    }
})

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(config.welcomeChannelId).send({
        content: `Welcome ,<@${member.id}> to our server! Read the <#${config.rulesChannelId}>`,
        files: [img]
    })

    member.roles.add(config.defaultRoleId)
})

client.on("guildMemberRemove", () => {
    member.guild.channels.cache.get(config.welcomeChannelId).send({
        content: `We are sorry to see u go <@${member.id}>`
    })
})

client.login(config.token)