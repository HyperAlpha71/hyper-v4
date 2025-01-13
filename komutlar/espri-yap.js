const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {

message.channel.send("Espri Yükleniyor Lütfen Bekleyin.").then(message => {

    var Espri = [
 
      "\n\n\`İşte Bir Espri:\` **Seni Görünce;** \n\n**Gözlerim Dolar** \n\n**Kulaklarım Euro**",
      "\n\n\`İşte Bir Espri:\` **Kar Üzerinde Yürüyen Adama Ne Denir?** \n\n**Karabasan**",
      "\n\n\`İşte Bir Espri:\` **Yıkanan Ton’a Ne Denir?** \n\n**Washington!**",
      "\n\n\`İşte Bir Espri:\` **Gidenin Arkasına Bakmayın Yoksa Geleni Göremezsiniz.**",
      "\n\n\`İşte Bir Espri:\` **Oğlum Canlılara Örnek Ver:** \n\n**Kedi,Köpek.** \n\n**Cansızlara örnek ver:** \n\n**Ölü Kedi,Ölü Köpek.**",
      "\n\n\`İşte Bir Espri:\` **Kanka Ben Banyoya 3 Kişi Giriyom.** \n\n**Oha Nasıl!** \n\n**Hacı,Şakir Ve Ben.** \n\n**Defol Lan!**",
      "\n\n\`İşte Bir Espri:\` **Kocanızla Ortak Özelliğiniz Nedir?** \n\n**Aynı Gün Evlendik.**",
      "\n\n\`İşte Bir Espri:\` **Evladım Ödevini Neden Yapmadın?** \n\n**Bilgisayarım Uyku Modundaydı, Uyandırmaya Kıyamadım.**",
      "\n\n\`İşte Bir Espri:\` **Bizim Arkadaş Ortamında Paranın Lafı Bile Olmaz.** \n\n**Niye Ki?** \n\n**Çünkü Hiç Birimizin Parası Yok.**",
      "\n\n\`İşte Bir Espri:\` **Annemin Bahsettiği Elalem Diye Bir Örgüt Var İlluminatiden Daha Tehlikeli Yemin Ederim.**",
      "\n\n\`İşte Bir Espri:\` **Acıkan Var Mı Ya?** \n\n**Yok Bizde Tatlı Kan Var.**",
      "\n\n\`İşte Bir Espri:\` **Yılanlardan Korkma,Yılmayanlardan Kork.**",
      "\n\n\`İşte Bir Espri:\` **Baykuşlar Vedalaşırken Ne Der?** \n\n**Bay Bay Baykuş.**",
      "\n\n\`İşte Bir Espri:\` **Beni Ayda Bir Sinemaya Götürme, Marsta Bir Sinemaya Götür.**",
      "\n\n\`İşte Bir Espri:\` **Aaa! Siz Çok Terlemişsiniz Durun Size Terlik Getireyim.**",
      "\n\n\`İşte Bir Espri:\` **Aklımı Kaçırdım, 100.000 TL Fidye İstiyorum.**",
      "\n\n\`İşte Bir Espri:\` **Tuvaletteki 10’a Ne Denir?** \n\n**Sifon**",
      "\n\n\`İşte Bir Espri:\` **Türkiye’nin En Yeni Şehri Hangisidir?** \n\n**Nevşehir**",
      "\n\n\`İşte Bir Espri:\` **Pişmemiş Burgere Ne Denir?** \n\n**Hamburger**"

    ];

    var Espri = Espri[Math.floor(Math.random() * Espri.length)];

    message.edit(`${Espri}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["espri-yap"],
  permLevel: 0
};

exports.help = {
  name: "espri-yap",
  description: "Espri Yapar.",
  usage: "!!espri-yap"
};
