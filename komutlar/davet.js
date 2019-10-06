exports.run = (client, message, argüman) => {
  let Discord = require("discord.js");
  let embed = new Discord.RichEmbed()
    .setColor(client.ayar.renk)
    .setDescription(
      `\`[\` [Destek Sunucusu](https://discord.gg/A2TVMTK) \`]\` \`[\` [Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=-1&scope=bot) \`]\``
    );
  message.channel.send(embed).catch(error => console.error(error.message));
};

exports.bilgi = {
  açık: true,
  kullanımlar: [],
  zaman: 2000
};

exports.yardım = {
  isim: "davet",
  kategori: "Kullanıcı",
  açıklama: "Botun davet linkini gönderir.",
  kullanım: "davet"
};
