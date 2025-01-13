const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {
  let yılbaşı = new Date('2026-01-01 00:00:00')
    let zaman = ms(yılbaşı - Date.now())

    message.channel.send(`\`Yeni Yılbaşının kutlanmasına\` **${zaman.days}** \`Gün\` **${zaman.hours}** \`Saat\` **${zaman.minutes}** \`Dakika Kaldı.\``)

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
    kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
  name: 'yılbaşı',

  description: 'Yılbaşının kutlanmasına kaç gün kaç saat kaç dakika kaç saniye olduğunu gösterir.',
  usage: '!!yılbaşı'
};
