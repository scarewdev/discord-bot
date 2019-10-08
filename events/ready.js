module.exports = client => {
  client.user.setActivity(`!!yardım`, {
    type: "PLAYING"
  });
  console.log(`${client.user.tag} adlı bota giriş yapıldı.`);
};
