module.exports = async (client, message) => {
  const ms = require("parse-ms");
  if (message.author.bot) return;
  if (message.author.id == client.user.id) return;
  if (!message.guild) return;

  const prefixEtiket = new RegExp(`^<@!?${client.user.id}>`);

  let i =
    (await client.veri.fetch(`${message.guild.id}.prefix`)) ||
    client.ayar.prefix;
  let prefix;
  if (i) {
    prefix = message.content.match(prefixEtiket)
      ? message.content.match(prefixEtiket)[0] + " "
      : i;
  } else {
    prefix = message.content.match(prefixEtiket)
      ? message.content.match(prefixEtiket)[0] + " "
      : client.ayar.prefix;
  }

  if (message.content.indexOf(prefix) !== 0) return;

  if (message.content.indexOf(prefix) !== 0) return;

  const argüman = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const komut = argüman.shift().toLowerCase();

  const cmd =
    client.komutlar.get(komut) ||
    client.komutlar.get(client.kullanımlar.get(komut));

  if (!cmd) return;

  if (cmd && !cmd.bilgi.açık)
    return message.channel.send(
      "Bu komut şu an kullanım dışıdır. Lütfen daha sonra tekrar deneyiniz."
    );
  if (cmd && cmd.yardım.kategori == "Sistem") {
    if (
      !client.guilds
        .get("sunucu id")
        .roles.get("rol id")
        .members.map(uye => uye.id)
        .includes(message.author.id)
    )
      return message.channel.send(
        "Bu komut yetkililerimize özel komutlardır. *erişiminiz bulunmuyor*"
      );
  }

  if (client.veri.fetch(`${message.author.id}.karaliste`) == "Evet")
    return message.channel
      .send(
        `Üzgünüm, bu botun kara listesinde bulunuyorsunuz. İtiraz etmek için ${client.ayar.prefix}davet yazıp destek sunucumuzdaki yetkililer ile görüşebilirsiniz.`
      )
      .catch(error => console.log(error.message));

  let komutZaman = cmd.bilgi.zaman || 0;
  let kişiZaman = client.zaman.get(message.author.id) || 0;
  if (komutZaman - (Date.now() - kişiZaman) > 0) {
    let zaman = ms(komutZaman - (Date.now() - kişiZaman));
    return message.channel.send(
      `Bu komudu kullanmak için ${zaman.seconds + 1} saniye beklemelisin.`
    );
  }
  client.zaman.set(message.author.id, Date.now());

  cmd.run(client, message, argüman);
};
