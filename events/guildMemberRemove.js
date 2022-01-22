module.exports = {
    name: "guildMemberRemove",
    run: async ({member}) => {
        member.guild.channels.cache.get(config.welcomeChannelId).send({
            content: `We are sorry to see u go <@${member.id}>`
        })
    }
}