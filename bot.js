const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log("Ping received!");
  response.sendStatus(200);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Dead", {type: "Playing"});
});

client.on('message', msg => {
  if (msg.content === '-ping') {
    msg.reply("I AM ALIVE! <:IAMALIVE:603643531315249155>");}
  else if (msg.content === '-bad juju') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F1.png"]} );}
  else if (msg.content === '-crimson') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F2.png"]} );}
  else if (msg.content === '-the huckleberry') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F3.png"]} );}
  else if (msg.content === '-izanagi') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F4.png"]} );}
  else if (msg.content === '-jade rabbit') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F5.png"]} );}
  else if (msg.content === '-mida multi tool') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F6.png"]} );}
  else if (msg.content === '-outbreak perfected') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F7.png"]} );}
  else if (msg.content === '-rat king') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F8.png"]} );}
  else if (msg.content === '-sturm') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F9.png"]} );}
  else if (msg.content === '-suros regime') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F10.png"]} );}
  else if (msg.content === '-sweet business') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F11.png"]} );}
  else if (msg.content === '-vigilance wing') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F12.png"]} );}
  else if (msg.content === '-borealis') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F13.png?"]} );}
  else if (msg.content === '-coldheart') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F14.png"]} );}
  else if (msg.content === '-fighting lion') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F15.png"]} );}
  else if (msg.content === '-graviton lance') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F16.png"]} );}
  else if (msg.content === '-hard light') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F17.png"]} );}
  else if (msg.content === '-merciless') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F18.png"]} );}
  else if (msg.content === '-polaris lance') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F19.png"]} );}
  else if (msg.content === '-prometheus lens') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F20.png"]} );}
  else if (msg.content === '-riskrunner') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F21.png"]} );}
  else if (msg.content === '-skyburner oath') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F22.png"]} );}
  else if (msg.content === '-sunshot') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F23.png"]} );}
  else if (msg.content === '-telesto') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F24.png"]} );}
  else if (msg.content === '-the colony') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F25.png"]} );}
  else if (msg.content === '-darci') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F26.png"]} );}
  else if (msg.content === '-legend of acrius') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F27.png"]} );}
  else if (msg.content === '-the prospector') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F28.png"]} );}
  else if (msg.content === '-sleeper simulant') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F29.png"]} );}
  else if (msg.content === '-tractor cannon') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F30.png"]} );}
  else if (msg.content === '-wardcliff coil') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F31.png"]} );}
  else if (msg.content === '-whisper of the worm') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F32.png"]} );}
  else if (msg.content === '-worldline zero') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F33.png"]} );}
  else if (msg.content === '-huckleberry') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F3.png"]} );}
  else if (msg.content === '-izanagis burden') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F4.png"]} );}
  else if (msg.content === '-izanagi burden') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F4.png"]} );}
  else if (msg.content === '-mida multi-tool') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F6.png"]} );}
  else if (msg.content === '-skyburners oath') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F22.png"]} );}
  else if (msg.content === '-d.a.r.c.i.') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F26.png"]} );}
  else if (msg.content === '-d.a.r.c.i') {
    msg.reply({files: ["https://cdn.glitch.com/5e9a4bc1-022f-4af3-bf09-3cba6a681709%2F26.png"]} );}
  else if (msg.content === '-help') {
    msg.reply(' \n [ -weapons ] [ -ping ] ' );}
  else if (msg.content === '-weapons') {
    msg.reply(' \n [ -bad juju ] [ -crimson ] [ -the huckleberry ] [ -izanagi ] \n [ -jade rabbit ]  [ -mida multi tool ] [ -outbreak perfected ] [ -rat king ] \n [ -sturm ]  [ -suros regime ]  [ -sweet business ]  [ -vigilance wing ] \n [ -borealis ]  [ -coldheart ]  [ -fighting lion ]  [ -graviton lance ] \n [ -hard light ]  [ -merciless ]  [ -polaris lance ]  [ -prometheus lens ] \n [ -riskrunner ]  [ -skyburner oath ]  [ -sunshot ]  [ -telesto ] \n [ -the colony ]  [ -darci ]  [ -legend of acrius ]  [ -the prospector ] \n [ -sleeper simulant ]  [ -tractor cannon ]  [ -wardcliff coil ]  [ -whisper of the worm ] \n [ -worldline zero ] ' );}
});


client.login(process.env.BOT_TOKEN);

const Eris = require("eris");
var bot = new Eris(process.env.BOT_TOKEN);
