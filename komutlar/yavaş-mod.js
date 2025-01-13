const Discord = require('discord.js');

exports.run = async(client, message, args) => {
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`Yanlış Komut Kullanıdınız. **Doğru Kullanım:** \`!!yavaş-mod [0/300]\``)
                .setColor("RED")
                .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 21600) {
    return message.channel.send(new Discord.MessageEmbed().setDescription("Süre Limiti Maksimum **300** Saniye Yapabilirim.").setColor("RED"));
}
    message.channel.send(new Discord.MessageEmbed().setDescription(`Yazma Süre Limiti Başarıyla **${limit}** Saniye Olarak Ayarlanmıştır. Artık Bu Kanalda Üyeler **${limit}** Saniyede 1 Mesaj Atabilecektir.`).setColor("GREEN"));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yavaş-mod"],
  permLevel: 3,
};

exports.help = {
  name: 'yavaş-mod',
  description: 'Sohbete Yazma Sınırı (Süre) Ekler.',
  usage: '[Prefix]yavaş-mod [0/300]',
};
