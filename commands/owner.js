const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const discordLink = 'https://discord.gg/BsdfHF6r2M';
        const InstagramLink = 'https://www.instagram.com/ig.billo';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 🫅 Owner Info')
            .setDescription(`__**About me**__:\n 🤖 Myself Bilal aka BilloXD. I am a discord bot developer, server manager, CGI/VFX artist. Blender and Adobe After Effects are love. You will get faster replies on instagram than other social media. Feel free to contact me!\n ❤️ [BilloXD](${discordLink})\n 💙 [ig.billo](${InstagramLink})`)
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};
