const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join("+");

  if (!yazi) return message.channel.send(`Hata: Lütfen Bir Yazı Yazın`);
  const banner = `https://dummyimage.com/2000x500/33363c/ffffff&text=${yazi}`.replace(
    " ",
    "+"
  );

  const banneroluşturucu = new Discord.MessageEmbed()
    .setTitle("Banner Başarıyla Oluşturuldu")
    .setColor("GREEN")
    .setImage(banner)
    .setFooter("Oluşturucu: Hyper V4");
  message.channel.send(banneroluşturucu);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banner-oluştur"],
  permLevel: 0
};

exports.help = {
  name: "banner-oluştur",
  description: "Yazdığınız Yazıyı Bot Bannera çevirir.",
  usage: "!!banner-oluştur <yazı>"
};
