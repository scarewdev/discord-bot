exports.run = async (client, message, argüman) => {
  const Discord = require("discord.js");
message.channel.startTyping()
  let idArama = client.users.get(argüman[0]);
  let etiket = message.mentions.users.first();
  let kendi = message.author;
  let avatar = etiket || idArama || kendi;
  if(!argüman[0]) avatar = kendi;
let embed = new Discord.RichEmbed()
.setColor(client.ayar.renk)
.setImage(avatar.displayAvatarURL)
message.channel.send(embed)
.catch(error => {
    console.log(`${error.message}`)
  });
message.channel.stopTyping()
};

exports.bilgi = {
  açık: true,
  kullanımlar: ["pp", "avatar"],
  zaman: 2000
};

exports.yardım = {
  isim: "avatar",
  kategori: "Kullanıcı",
  açıklama: "Belirttiğiniz kişinin profil fotoğrafını gösterir.",
  kullanım: "avatar <kullanıcı>"
};
