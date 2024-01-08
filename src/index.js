const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const { sendJurnal } = require("./sendJurnal");

const { API_KEY } = require("dotenv").config().parsed;

const bot = new Telegraf(API_KEY);
bot.start((ctx) => ctx.reply("bacott"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on(message("sticker"), (ctx) => ctx.reply("🖕"));

bot.command("absen", async (ctx) => {
  let jurnal = ctx.message.text.split("/absen ")[1];

  if (!jurnal) jurnal = "scrapping dan crawling";
  await sendJurnal(jurnal);
  ctx.reply(jurnal);
});

bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
