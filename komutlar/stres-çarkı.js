const Discord = require('discord.js');



exports.run = async (client, message) => {
    let dönme = await message.channel.send({
        embed: {
            color: ("BLACK"),
            description: `${message.author.tag} Bir Stres Çarkı Çevirdi`,
            image: {
                url: "https://i.imgur.com/KJJxVi4.gif"
            }
        }
    });

    let bitiş = (Math.random() * (60 - 5 +1)) + 5;
    setTimeout(() => {
        dönme.edit({
            embed: {
                color: ("BLUE"),
                description: `${message.author.tag} Stres Çarkın Toplam **${bitiş.toFixed(2)}** Saniye Döndü.`
            }
        });
    }, 5 * 1000);
};  

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["stres-çarkı"],
  permLevel: 0 
};

exports.help = {
  name: 'stres-çarkı', 
  description: 'Bot Sizin İçin Bir Stres Çarkı Çevirir.',
  usage: '!!stres-çarkı'
};
