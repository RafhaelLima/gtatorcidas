const Discord = require('discord.js');

module.exports = {
	name: 'ajuda',
	description: 'Comando de ajuda.',
	cooldown: 5,
	execute(client, msg) {
		const helpEmbed = new Discord.MessageEmbed()
			.setColor('#d95e10')
			.setTitle('GTA Torcidas - Bot Discord')
			.setThumbnail('https://raw.githubusercontent.com/luizeduardomr/Horus-bot/master/.github/horusavatar.png')
			.setDescription('Olá ' + '<@' + `${msg.member.user.id}` + '>' + '! Eu sou o GT Bot! Eu sou um bot' +
				' construído para atender todas suas necessidades, ou quase todas...\n \nEnfim, eu espero que você goste de mim, sinta-se livre para me usar...' +
				' digo, usar os comandos disponíveis atualmente, ok? \n \nCaso tenha sugestões de comandos novos, entre no meu servidor oficial!')
			//.setURL('https://discord.com/invite/A3c3DB4 ')
			.addFields(
				{ name: 'Lista de comandos', value: `Digite ` + client.config.prefix + `comandos para ver a lista de comandos disponíveis` },
				{ name: 'Me ajuda a ficar online!', value: 'É... atualmente não estou online, ainda estou sendo desenvolvido.. mas um dia precisarei de ajuda!' },
				{ name: 'Siga o Insta do meu criador lindo e maravilhoso!', value: 'https://www.instagram.com/gtatorcidasofc' }
			)
			.setFooter(`Desenvolvido por apocryphos#6766 <3`, 'https://cdn.discordapp.com/avatars/727312542006902815/d23d25542bf9da4dcb4e2f1376ec3356.png?size=128');
		msg.reply('**eu ainda estou em fase de desenvolvimento. Caso algum comando não funcione ou esteja funcionando de forma errada, avise ao meu desenvolvedor, por favor!**');
		msg.channel.send(helpEmbed);		//msg.reply('https://discord.com/invite/A3c3DB4')
	}
};
