const Discord = require('discord.js')
exports.run = async (client, message, args) => {
let guild = message.guild;

guild.fetchInvites()
.then(invites => message.channel.send(`\`Bu Sunucuda Şu Anda\` **${invites.size}** \`Adet Davet Linki Bulunmaktadır.\``))
.catch(console.error);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["invite"],
    permLevel: 0
  };
  
exports.help = {
    name: 'davet-bilgi',
    description: 'Sunucuda Kaç Adet **Davet Linki** Olduğunu Gösterir',
    usage: '[Prefix]davet-bilgi'
  };
