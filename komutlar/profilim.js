const Discord = require('discord.js');
const db = require('quick.db')
const moment = require('moment');
require('moment-duration-format');
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
exports.run = function (client, message, args) {
  
  var aylar = {
      "01": "Ocak",
      "02": "Şubat",
      "03": "Mart",
      "04": "Nisan",
      "05": "Mayıs",
      "06": "Haziran",
      "07": "Temmuz",
      "08": "Ağustos",
      "09": "Eylül",
      "10": "Ekim",
      "11": "Kasım",
      "12": "Aralık"
    }
    var duration = moment.duration(client.uptime).format(" D [gün] H [saat] m [dakika] s [saniye]")
  
  var üye = message.mentions.users.first();
  if (üye) {
    const profil = new Discord.MessageEmbed()
.setAuthor(üye.username, üye.displayAvatarURL)
.setColor("BLACK")
          .setThumbnail(üye.displayAvatarURL)
.addField('Profiliniz:', `\`Ad:\` ${üye.username + '#' + üye.discriminator}\n\`ID:\` ${üye.id}\n\`Son Mesajı:\` ${üye.lastMessage}\n\`Son Mesaj İD:\` ${üye.lastMessageID}\n\`Hesabın Oluşturulduğu Tarih:\` ${(`${moment(üye.createdAt).format('DD')} ${aylar[moment(üye.createdAt).format('MM')]} ${moment(üye.createdAt).format('YYYY HH:mm:ss')}`)}\n\`Kullanıcı Bot Mu?\` ${üye.bot ? 'Evet' : 'Hayır'}\n\`Kullanıcının Rolleri:\` ${message.guild.members.get(üye.id).roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ')}`)
    .setTimestamp()
message.channel.send(profil)
  } else {
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.setColor('BLACK')
.setThumbnail(message.author.avatarURL())
.addField('Profiliniz:', `\`Ad:\` ${message.author.username + '#' + message.author.discriminator}\n\`ID:\` ${message.author.id}\n\`Son Mesajı:\` ${message.author.lastMessage}\n\`Son Mesaj İD:\` ${message.author.lastMessageID}\n\`Hesabın Oluşturulduğu Tarih:\` ${(`${moment(message.author.createdAt).format('DD')} ${aylar[moment(message.author.createdAt).format('MM')]} ${moment(message.author.createdAt).format('YYYY HH:mm:ss')}`)}\n\`Kullanıcı Bot Mu?\` ${message.author.bot ? 'Evet' : 'Hayır'}\n\`Kullanıcının Rolleri:\` ${message.guild.members.cache.get(message.author.id).roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ')}`)
.setTimestamp()
message.channel.send(embed)
  
  }
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["profil"],
  permLevel: 0
};
exports.help = {
  name: 'profil',
  description: 'Profilinizi Gösterir.',
  usage: '!!profil'
};
