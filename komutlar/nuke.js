const Discord = require('discord.js');

exports.run = (client, message, args) => {
message.channel.clone().then(knl => {
  let position = message.channel.position;
  knl.setPosition(position);
  message.channel.delete();
});
  
  
  const nuke = new Discord.MessageEmbed()
.setColor("BLACK")
.setImage("https://discord.com/channels/791322155773591573/807899652476633108/807900100919033877")
.setTitle("Nuked On This Channel")
  message.channel.send(nuke);
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nuke"],
  permLevel: 3
};

exports.help = {
    name: 'nuke',
  usage: 'nuke'
};
