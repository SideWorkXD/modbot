const { EmbedBuilder } = require('discord.js');


module.exports = {
	name: 'help',
    aliases: ['hlp', 'h'],
	description: 'Shows a list of available commands',
	execute(message, args) {
		// Create an embed object
		const embed = new EmbedBuilder()
            .setAuthor({ name: 'MODERATION BOT' })
            .setColor('#4c0385')
            .setDescription('**HERE ARE THE AVAILABLE COMMANDS**   \n\n <a:dstar:859462751255658506> __Basic__:\n avatar, ascii, prefix  \n\n <a:dstar:859462751255658506>__Advanced__:\n kick, ban, serverinfo, userinfo, ping  \n\n <a:dstar:859462751255658506> __Utility__:\n prefix, owner, support, invite  ')
			.setThumbnail('https://media.discordapp.net/attachments/1135823713741324400/1224790058117365893/standard_2.gif?ex=661ec5a1&is=660c50a1&hm=3b28d48e71b849b736e4f3b632e216a02e3dc0fd5fe66c5605ade9b8b981bd45&=')

		
		
		
		message.channel.send({ embeds: [embed] });
	},
};
