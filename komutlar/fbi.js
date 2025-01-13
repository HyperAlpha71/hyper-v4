const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
 
 const fbi = new Discord.MessageEmbed()

.setColor("BLACK")
.setImage("https://media1.giphy.com/media/QUY2pzDAKVpX3QacCg/200.gif")
.setTitle("FBİ Open The Door!!");

  message.channel.send(fbi);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fbi"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "fbi",
  description: "Bot Fbi Gif Atar",
  usage: "[Prefix]fbi"
};
