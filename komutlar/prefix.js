exports.run = async (client, message, argüman) => {
if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(
        "Bu komudu kullanmak için yetkin bulunmuyor."
      );
    if (!argüman[0]) {
      client.veri.delete(`${message.guild.id}.prefix`);
      message.channel.send(`Prefix başarıyla \`${client.ayar.prefix}\` olarak değiştirildi.`);
      return;
    }
    if (argüman[0].length > 3)
      return message.channel.send("Prefix 3 karakterden fazla olamaz.");
    client.veri.set(`${message.guild.id}.prefix`, argüman[0]);
    message.channel
      .send(`Prefix başarıyla \`${argüman[0]}\` olarak değiştirildi.`)
      .catch(error => console.log(error.message));
};

exports.bilgi = {
  açık: true,
  kullanımlar: ["prefix-ayarla", "prefix"],
  zaman: 2000
};

exports.yardım = {
  isim: "prefix",
  kategori: "Moderasyon",
  açıklama: "Sunucunun prefixini değiştirirsiniz.",
  kullanım: "prefix <prefix>"
};