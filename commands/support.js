const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'support',
    description: 'Support server of this Bot',
    execute(message, args) {
        const supportServerLink = 'https://discord.gg/BsdfHF6r2M';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle('Support server')
            .setDescription(`Click [here](${supportServerLink}) to join our server.\n We will be there for you anytime <a:discord:859462724613570596>`)
            .setThumbnail(`https://media.discordapp.net/attachments/1135823713741324400/1224790058117365893/standard_2.gif?ex=661ec5a1&is=660c50a1&hm=3b28d48e71b849b736e4f3b632e216a02e3dc0fd5fe66c5605ade9b8b981bd45&=`)
            .setTimestamp();


        message.channel.send({ embeds: [embed] });
    },
};
