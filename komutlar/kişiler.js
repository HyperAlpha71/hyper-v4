const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {
  
  if(!['ROL ID'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new MessageEmbed().setColor('RED').setAuthor(`Başarısız Komut !`).setDescription(`Bu Komutu Kullanmak İçin Yetkiniz Bulunmamaktadır !`))
  
  const toplam = message.guild.memberCount
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b) 

  const embed = new MessageEmbed()
  .setTimestamp()
  .setColor("BLACK")
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
  message.channel.send(embed.setDescription(`\`Toplam Üye  ➡️ ${toplam}\`
  \`Sesteki Üye ➡️ ${ses}\``));
};

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kişiler"],
  permLvl: 0,
}

  exports.help = {
  name: 'kişiler'
}
