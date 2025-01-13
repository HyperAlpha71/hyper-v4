const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

console.log("Yardım Komutu Şu Anda " + '#' + message.author.username + '#' + message.author.discriminator + " Tarafından Kullanıldı" + " (Bu Veri Kullanıma Bakmak Amaçlıdır.)")
const yardım = new Discord.MessageEmbed()
.setColor('BLACK')
.setTimestamp()
.setAuthor(`Hyper V4 Yardım Menüsü`)
.setDescription(`


\`⬇️Hyper V4 Komutları⬇️\`

\`➡️🟢 !!profil\`:  **Bot Profilinizi Atar**
\`➡️🟢 !!kişiler\`:  **Sunucunuzdaki Toplam Ve Sesteki Kişilerin Sayısını Atar**
\`➡️🟢 !!davet-bilgi\`:  **Sunucunuzda Kaç Adet Davet Linki Olduğunu Size Atar**
\`➡️🟢 !!avatar\`:  **Avatarınızı Atar**
\`➡️🟢 !!aduket-çek\`:  **Etiketlediğiniz Kişiye Aduket Çeker**
\`➡️🟢 !!espri-yap\`:  **Espri Yapar**
\`➡️🟢 !!metin-aç\` :  **Metin Kanalına Yazmayı Açarsınız**
\`➡️🟢 !!metin-kapat\` :  **Metin Kanalına Yazmayı Kapatırsınız**
\`➡️🟢 !!temizle\`:  **Belirttiğiniz Sayıda Bot Mesaj Siler**
\`➡️🟢 !!nuke\`:  **Belirttiğiniz Kanalı Siler Ve Tekrar Oluşturur**
\`➡️🟢 !!yavaş-mod\`:  **Metin Kanalının Yazma Süresini Ayarlar**
\`➡️🟢 !!fbi\`:  **Bot FBI Gifi Atar**
\`➡️🟢 !!balık-tut\`:  **Balık Tutarsınız**
\`➡️🟢 !!banner-oluştur\`:  **Bot Yazdığınız Yazıyı Banner Yapar**
\`➡️🟢 !!bot-bilgi\`:  **Botun Bilgilerini Gösterir**
\`➡️🟢 !!oylama-oluştur\`:  **Bot Yazdığınız Yazıyla İlgili Bir Oylama Oluşturur**
\`➡️🟢 !!emoji-bilgi\`:  **Emojinin Bilgilerini Alırsınız**
\`➡️🟢 !!yılbaşı\`:  **Yılbaşının Kutlanmasına Ne Kadar Olduğunu Gösterir**
\`➡️🟢 !!stres-çarkı\`:  **Bot Sizin İçin Bir Stres Çarkı Döndürür**

\`🟢 = Kullanılabilir\`
\`🔴 = Şimdilik Aktif Değil\`
\`⚫️ = Aktif Değil\`

\`Hyper V4 | ➡️Yardım Menüsüne Hoşgeldiniz⬅️\`

\`Hyper V4 | ➡️Destek Sunucusu Linki:⬅️\` **https://discord.gg/PmG778kTPS**

`)
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['yardım'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};
