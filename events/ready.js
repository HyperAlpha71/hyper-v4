module.exports = client => {
  console.log(`${client.user.username} İsmi İle Giriş Yapıldı!`);
  client.user.setStatus("online");
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
  console.log(`${client.user.id}                                                                                                                                                                     `)
client.user.setActivity('🌠!!yardım🌠|🔥v1.0🔥', { type: "LISTENING"});  
//LISTENING = DİNLİYOR
  //WATCHING = İZLİYOR
  //PLAYING = OYNUYOR 
};
