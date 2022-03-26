console.log('โปรดรอคำสั่งทำงานและบอททำงานภายใน 30 วินาที | JN03')

const { prefix, developerID } = require("./config.json")
const { config } = require("dotenv");
const db =require("quick.db");
const welc = require("image-cord")
const Discord = require('discord.js')
const express = require('express')
const { Client, MessageEmbed }  = require('discord.js');
const client = new Discord.Client({
  disableEveryone: false
});
let cooldown = new Set();
let cdseconds = 1; // cooldown time
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
process.on('UnhandledRejection', console.error);
client.on("message", async message => {
    
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  if(cooldown.has(message.author.id)){

    return message.channel.send(`**${message.author.username}** รอ \`10\` วินาทีเพื่อใช้คำสั่ง`)
  }
  cooldown.add(message.author.id);
  setTimeout(() => {
cooldown.delete(message.author.id)}, cdseconds * 1000)

  if (!message.member)
    message.member = message.guild.fetchMember(message);


  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);  

});
client.on("message", async message => {

const channel = db.get(`verify_${message.guild.id}`);

if (channel === null) {
    return;
  }

const chan = client.channels.cache.get(channel);
if (message.channel.name == chan.name) {
  message.delete();

}      
});
require('http').createServer((req, res) => res.end(`เว็บทำงานแล้ว :D - JN`)).listen(3000) 
client.on('ready', () => {
  console.log(`เข้าสู่ระบบด้วยชื่อ : ${client.user.tag}!`);
  client.user.setActivity('!help เพื่อความช่วยเหลือ', {
    type: 'WATCHING'
  }).catch;
  (console.error);
});

client.login(process.env.TOKEN);

//โค้ดทำโดย JN03 - JNWORLD โปรดอย่าลบข้อความนี้
//โค้ดบอทเปิดเพลงในดิสคอสนี้หากจะนำไปแจกกรุณาให้ Credit ด้วยนะครับ
//โปรดอย่่านำชื่อออกจากโค้ดโดยไม่ได้ขอหรือได้รับการอนุณาตจาก JN03 - DEV
//กลุ่ม JN03 [https://discord.gg/zFau5wM8MW]
//หากมีปัญหาสามารถติดต่อในดิสคอสและ Dev [JN03]
//กรุณาให้ CREDIT [JN03] ด้วยนะครับ :D