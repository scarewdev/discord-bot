exports.run = async (client, message, argüman) => {
  message.channel
    .send(`Pong! ${Math.round(client.ping)}ms`)
    .catch(error => console.error(error.message));
};

exports.bilgi = {
  açık: true,
  kullanımlar: [],
  zaman: 2000
};

exports.yardım = {
  isim: "ping",
  kategori: "Kullanıcı",
  açıklama: "Botun gecikmesini gösterir.",
  kullanım: "ping"
};
