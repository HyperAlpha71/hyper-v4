const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.sendEmbed(

     new Discord.RichEmbed()

     .addField(`Yazı Yazman Gerek`)).then(m => m.delete(5000));

     message.channel.send(

       new Discord.MessageEmbed()

       .setColor("BLUE")
       .setTimestamp()

       .addField(`**Oylama**`, `\`${question}\``)).then(function(message) {

         message.react('🟢');

         message.react('🔴');
       
       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['oylama'],

  permLevel: 2
};

exports.help = {
  name: 'oylama-oluştur',
  description: 'Oylama Yapmanızı Sağlar.',
  usage: '!!oylama-oluştur <soru>'
};
