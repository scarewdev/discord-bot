exports.run = async (client, message, argüman) => {
 function clean (text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
  }

  try {
    const kod = argüman.join(" ");
    let evaled = eval(kod);

    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

    message.channel.send(clean(evaled), { code: "xl" });
  } catch (err) {
    message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
};

exports.bilgi = {
  açık: true,
  kullanımlar: ["console", "eval"],
  zaman: 2000
};

exports.yardım = {
  isim: "eval",
  kategori: "Sistem",
  açıklama: "Yazdığınız komudu çalıştırır.",
  kullanım: "eval <kod>"
};
