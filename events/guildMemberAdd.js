const config = require ("C:/Users/grandma77/OneDrive/Documents/discord/DiscordSRV/config.json")

module.exports = {
    name: "guildMemberAdd",
    run: async ({member}) => {
        const img = await generateImage(member)
        member.guild.channels.cache.get(config.welcomeChannelId).send({
        content: `Welcome ,<@${member.id}> to our server! Read the <#${config.rulesChannelId}>`,
        files: [img]
     })

     member.roles.add(config.defaultRoleId)
    }
}