const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [Gün] H [Saat] m [Dakika] s [Saniye]");

const botbilgi = new Discord.MessageEmbed()
  .setTimestamp()
 .setColor('BLACK')
 .addField(`📈 »  \`Şuan Pingim\`` ,`${client.ws.ping} Milisaniye`,true)
 .addField(`👑 » \`Yapımcım\`` ,`<@748847669970993162>`,true)
 .addField(`💻 » \`Node.js Sürüm:\``, `${process.version}`, true)
 .addField(`⚙️ » \`Discord.js Sürüm:\``, "v"+Discord.version, true)
 .addField(`💬 » \`Hizmet Verdiği Kanal Sayısı\``, `${client.channels.cache.size  }`, true)
 .addField(`📍 » \`Olduğum Sunucu Sayısı\``, `${client.guilds.cache.size}`, true)
 .addField(`💾 » \`Bellek Kullanımı\``, (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true) 
 .addField(`🕒 » \`Botun Çalışma Süresi\``, `${duration}`, true)
 .addField(`🔨 » \`Sürüm\``, `v1.1`, true)
 
  message.channel.send(botbilgi)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'bot-bilgi',
  description: 'Botun Bilgilerini Atar',
  usage: '!!bot-bilgi'
}; 
