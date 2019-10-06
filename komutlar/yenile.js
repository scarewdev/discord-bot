exports.run = (client, message, argüman) => {
  if (!argüman[0]) return message.channel.send("Bir komut ismi girmelisiniz.");
  const komut = argüman[0];

  if (!client.komutlar.has(komut)) {
    return message.channel.send("Böyle bir komut bulunmuyor.");
  }

  delete require.cache[require.resolve(`./${komut}.js`)];

  client.komutlar.delete(komut);
  const veri = require(`./${komut}.js`);
  client.komutlar.set(komut, veri);
  message.channel.send(`Komut yeniden başlatıldı: ${komut}`);
};

exports.bilgi = {
  açık: true,
  kullanımlar: [],
  zaman: 2000
};

exports.yardım = {
  isim: "yenile",
  kategori: "Sistem",
  açıklama: "Botu veya botun komutlarını yenileyebilirsiniz.",
  kullanım: "yenile <komut ismi>"
};
