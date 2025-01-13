const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, args) => {
message.delete();

message.channel.send("Balık Tuttun Balığın Çekiliiyor...").then(message => {

    var balık = [
      "``Sazan Tuttun (150 Cm) 🐟`` ``Nadirlik: Nadir 🔵``",
      "``Kılıç Balığı Tuttun (300 Cm) 🐟`` ``Nadirlik: Nadir 🔵``",
      "``Ton Balığı Tuttun (4500 Cm) 🐟`` ``Nadirlik: Nadir 🔵``",
      "``Megalodon Tuttun (15000 Cm) 🐟`` ``Nadirlik: Efsanevi 🟡``",
      "``Mavi Balina Tuttun (24000 Cm) 🐟`` ``Nadirlik: Efsanevi 🟡``",
      "``Uskumru Tuttun (60 Cm) 🐟`` ``Nadirlik: Destansı 🟣``",
      "``Morina Tuttun (90 Cm) 🐟`` ``Nadirlik: Destansı 🟣``",
      "``Palamut Tuttun (100 Cm) 🐟`` ``Nadirlik: Destansı 🟣``",
      "``Japon Balığı Tuttun (9 Cm) 🐟`` ``Nadirlik: Sıradan ⚪️``",
      "``Hamsi Tuttun (12 Cm) 🐟`` ``Nadirlik: Sıradan ⚪️``",
      "``Levrek Tuttun (35 Cm) 🐟`` ``Nadirlik: Ender 🟠``",
      "``Alabalık Tuttun (30 Cm) 🐟`` ``Nadirlik: Ender 🟠``",
      "``Üzgünüm Balık Oltadan Kaçtı ❌``",
      "``Aslan Balığı Tuttun (20 Cm) 🐟`` ``Nadirlik: Ender 🟠``",
      "``İstavrit Tuttun (45 Cm) 🐟`` ``Nadirlik: Destansı 🟣``"
    ];
    var balık = balık[Math.floor(Math.random() * balık.length)];
    message.edit(`${balık}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["balık-tut"],
  permLevel: 0
};

exports.help = {
  name: "balık-tut",
  description: "Balık Tutarsın.",
  usage: "[Prefix]balık-tut"
};
