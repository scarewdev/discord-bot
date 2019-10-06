module.exports = client => {
  client.user.setActivity(`${client.ayar.prefix}yardım`, {
    type: "PLAYING"
  });
  console.log(`${client.user.tag} adlı bota giriş yapıldı.`);
};
