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
			.setThumbnail('https://media.discordapp.net/attachments/1149279708924629003/1222700836170502265/standard_1.gif?ex=66172be4&is=6604b6e4&hm=c53649fae3271e7a8dc5e6dea8b2edfcf1ee7f76f5e607eecc3530aed39164d9&=')

		
		
		
		message.channel.send({ embeds: [embed] });
	},
};
