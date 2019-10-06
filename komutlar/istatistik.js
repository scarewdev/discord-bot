exports.run = (client, message, argüman) => {
  const moment = require("moment");
  require("moment-duration-format");
  let Discord = require("discord.js");
  const duration = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  let embed = new Discord.RichEmbed()
    .setAuthor(client.user.username, client.user.displayAvatarURL)
    .setColor(client.ayar.renk).setDescription(`
Alan Kullanım  : ${Math.round(
    (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
  )} MB
Müzik çalınan sunucular : ${client.voiceConnections.size ? client.voiceConnections.size : '0'}
Açılış         : ${duration}
Kullanıcılar   : ${client.users.size.toLocaleString()}
Sunucular      : ${client.guilds.size.toLocaleString()}
Kanallar       : ${client.channels.size.toLocaleString()}
Discord.js     : v${Discord.version}
Node           : ${process.version}
`);
  message.channel.send(embed).catch(error => console.error(error.message));
};

exports.bilgi = {
  açık: true,
  kullanımlar: ["i", "istatistik"],
  zaman: 2000
};

exports.yardım = {
  isim: "istatistik",
  kategori: "Kullanıcı",
  açıklama: "Botun istatistik bilgilerini gösterir.",
  kullanım: "istatistik"
};
