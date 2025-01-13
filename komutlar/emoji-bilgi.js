const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let emojiname = args[0];
  const emoji = message.guild.emojis.cache.find(
    motion => motion.name === `${emojiname}`
  );
  if (!emojiname)
    return message.channel.send(
      "**Emoji İsmi Yazmalısın ki Sana Emojinin Bilgilerini Atabileyim.**"
    );
  const emojibilgi = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setThumbnail(`${emoji.url}`)
    .addField("💳 Emojinin İsmi", `${emojiname}`)
    .addField("💎 Emoji ID", `${emoji.id}`)
    .addField("📃 Link", `${emoji.url}`)
    .setTimestamp();
  message.channel.send(emojibilgi);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["emoji-bilgi"],
  permLevel: 0
};

exports.help = {
  name: "emoji-bilgi",
  description: "Emojinin Bilgilerini Atar",
  usage: "!!emoji-bilgi <İsim>"
};
