const Discord = require("discord.js");
const http = require("http");
const express = require("express");
const Enmap = require("enmap");
const fs = require("fs");
const SQLite = require("quick.db");
const app = express();
const client = new Discord.Client();
const special = process.env;

app.get("/site", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/site`);
}, 10000);

client.komutlar = new Enmap();
client.kullanımlar = new Enmap();
client.müzik = new Map();
client.zaman = new Enmap();
client.ayar = special;
client.veri = SQLite;

fs.readdir("./events/", (hata, dosyalar) => {
  if (hata) return console.error(hata.message);
  dosyalar.forEach(dosya => {
    const event = require(`./events/${dosya}`);
    let eventİsim = dosya.split(".")[0];
    client.on(eventİsim, event.bind(null, client));
  });
});

fs.readdir("./komutlar/", (hata, dosyalar) => {
  if (hata) return console.error(hata.message);
  dosyalar.forEach(dosya => {
    if (!dosya.endsWith(".js")) return;
    let içerik = require(`./komutlar/${dosya}`);
    let komutİsmi = dosya.split(".")[0];
    client.komutlar.set(komutİsmi, içerik);
    içerik.bilgi.kullanımlar.forEach(alias => {
      client.kullanımlar.set(alias, içerik.yardım.isim);
    });
  });
});

client
  .login(special.token)
  .catch(error => console.error("[Giriş] " + error.message));
