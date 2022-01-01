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
        "GUILD_SCHEDULED_EVENTS"
    ]
})

client.on("ready", () => {
    client.user.setActivity("g7/help", { type: "WATCHING" })
    console.log(`${client.user.tag} is online`)})

    client.on("messageCreate", (message) =>{
    if (message.content == "g7/help"){
        message.reply("This bot is being worked on right now")
    }
})

const welcomeChannelId= "926213293595578388"

const defaultRoleId= "926202709382668338"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `Welcome ,<@${member.id}> to the server!`,
        files: [img]
    })

    member.roles.add(defaultRoleId)
})

client.on("guildMemberRemove", (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: "We are sad to see you go <@${member.id}>"
    })
})

client.login(config.token)