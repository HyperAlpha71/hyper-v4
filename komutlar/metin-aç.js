const Discord = require("discord.js");
exports.run = (client, message, args) => {
  let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: null
  });
  
  message.channel.send("Metin Kanalı Artık ``Yazılabilir`` Durumuna Getirildi.");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "metin",
  permLevel: 3
};

exports.help = {
  name: "metin-aç",
  description: "Metin Kanalınızı Açmaya Yarar.",
  usage: "aç"
};
