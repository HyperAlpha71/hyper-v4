const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const Ping = new Discord.MessageEmbed()
  .setColor("YELLOW")
  .setTimestamp()
  .addField(`\`⚡️ Şuan Pingim ⚡️\`` ,`${client.ws.ping} Milisaniye`)
  message.channel.send(Ping)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ping"],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping(Bunuda Almayında)',
  usage: 'ping'
}; 
