const Discord = require('discord.js');
module.exports = {
    name: 'botinfo',
    description: 'Veja informações minhas!',
    cooldown: 5,
    execute(client, msg) {
        const Whoami = new Discord.MessageEmbed()
            .setColor('#d95e40')
            .setURL('https://www.gtatorcidas.net')
            .setThumbnail('https://images-ext-1.discordapp.net/external/3APO-IDm6tPqv16ESdk1jQ1XtMqsPHuyyY0ImtKujTY/%3Fsize%3D128/https/cdn.discordapp.com/avatars/741487082450583592/22542beae5b8e0397cc086962658f2d2.png')
            .addFields(
                { name: `Meu nome Tag :bookmark: `, value: `\`${client.user.tag}\` `, inline: false },
                { name: `Fui criado em :date: `, value: `\`${client.user.createdAt.toUTCString().substr(0, 16)}\` `, inline: false },
                //{ name: `ㅤ`, value: `ㅤ`},
                { name: `Comandos `, value: `\`Digite ${client.config.prefix}comandos\``, inline: false },
                //{ name: 'Entrei nesse servidor em :date:', value: `${client.joinedAt.toUTCString().substr(0, 16)} `, inline: false },
                { name: `Servidor oficial`, value: '`GTA TORCIDAS - OFICIAL`', inline: false },
                { name: `ID `, value: `\`741487082450583592\``, inline: false },
            )
            .setTimestamp()
            .setFooter(`Desenvolvido por apocryphos#6766 <3`, 'https://cdn.discordapp.com/avatars/727312542006902815/d23d25542bf9da4dcb4e2f1376ec3356.png?size=128');

        msg.reply('**eu ainda estou em fase de desenvolvimento. Caso algum comando não funcione ou esteja funcionando de forma errada, avise ao meu desenvolvedor, por favor!**');
        msg.channel.send(Whoami);

    }
}