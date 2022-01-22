const config = require ("C:/Users/grandma77/OneDrive/Documents/discord/DiscordSRV/config.json")

module.exports = {
    name: "ip",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply(`Bedrock: ${config.minecraftBIP}  Java: ${config.minecraftIP}`)
    }
}