const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  
let user = message.mentions.users.first() || message.author  
  
const avatar = new Discord.MessageEmbed()
 .setColor("BLACK")
 .setImage(user.avatarURL())
  message.channel.send(avatar)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["avatar"],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'Bot Avatarınızı Atar.',
  usage: '!!avatar'
}; 
