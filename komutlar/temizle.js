const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu Komutu Kullanabilmek İçin **Mesajları Yönet** İznine Sahip Olmalısın!`);
  
if(isNaN(args[0])) {
  var errembed = new Discord.MessageEmbed()
    .setColor("RED")
    .addField(`Hata:`, `Bir Rakam Yazmalısın!`)
    .addField(`Doğru Kullanım:`, `${ayarlar.prefix}temizle <Silinecek Mesaj Sayısı>`)
return message.channel.send(errembed);
}
  
if (args[0] < 1) return message.reply("**1** Adetten Az Mesajı Silemem!")
if (args[0] > 100) return message.reply("**100** Adetten Fazla Mesajı Silemem!")
  
message.channel.bulkDelete(args[0]).then(deletedMessages => {
if (deletedMessages.size < 1) return message.reply("Hata: **14 Gün** Önceki Mesajları Silemem.");
})
message.channel.send(`**${args[0]}** Adet Mesaj Başarıyla Silindi!`)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["temizle"]
};

exports.help = {
  name: 'temizle',
  description: 'Belirtilen miktarda mesaj siler.',
  usage: '!!temizle <miktar>'
};
