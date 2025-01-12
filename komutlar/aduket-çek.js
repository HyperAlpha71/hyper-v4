const Discord = require("discord.js");

exports.run = function(client, message, args) {

const isim = message.mentions.users.first();

if (!isim)

return message.reply("**Aduket Çekeceğin Kişiyi Etiketlemelisin ki Aduket Çekebilesin**");

const aduket = new Discord.MessageEmbed()

    .setDescription(
      `${isim} ` + `**${message.author.username}** Adlı Kişi Size Aduket Çekti`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/747769679984066582/748464442249052251/street-fighter-60854-18102018130021.gif"
    ) 
    .setFooter(client.user.username + " Aduket Mesajı Attı", client.user.avatarURL)
    .setTimestamp();

return message.channel.send(aduket);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aduket-çek"],
  permLevel: 0
};

exports.help = {
  name: "aduket-çek",
  description: "Etiketlediğiniz Kişiye Aduket Çeker.",
  usage: "[prefix]aduket-çek <etiket>"
};
