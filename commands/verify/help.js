const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js')
const { prefix } = require(`../../config.json`)

module.exports = {
  name: "help",
  aliases: ["info"],

  run: (client, message, args) => {


 let embed = new MessageEmbed()
.setTitle(`คู่มือการช่วยเหลือ`)
.setDescription(`**นี้คือคำสั่งทั่งหมดของบอทนะ :**
> \`${prefix}setverify\`: ตั่งห้องในการ verify (channels verify).
> \`${prefix}setrole\`: เวลา verify แล้วจะให้ยศอะไร ${prefix}verify คำสั่งในช่องแชท
> \`${prefix}setrrole\`: ลบยศอะไรเวลา verify เสร็จ ${prefix}verify คำสั่งในช่องเเชท
> \`${prefix}verify\`: ทำการ verify 
> \`${prefix}rvrole\`: Reset **การให้ยศ** 
> \`${prefix}rvchannel\`: Reset **ห้อง verify**
> \`${prefix}rrvrole\`: Reset **ยศ**
> \ บอททำโดย Jean_netis world(JNWORLD)`)
.setColor("#87CEEB")
.setTimestamp()
  message.channel.send(embed)

  }
}

//โค้ดทำโดย JN03 - JNWORLD โปรดอย่าลบข้อความนี้
//โค้ดบอทเปิดเพลงในดิสคอสนี้หากจะนำไปแจกกรุณาให้ Credit ด้วยนะครับ
//โปรดอย่่านำชื่อออกจากโค้ดโดยไม่ได้ขอหรือได้รับการอนุณาตจาก JN03 - DEV
//กลุ่ม JN03 [https://discord.gg/zFau5wM8MW]
//หากมีปัญหาสามารถติดต่อในดิสคอสและ Dev [JN03]
//กรุณาให้ CREDIT [JN03] ด้วยนะครับ :D