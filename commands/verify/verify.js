const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "accept",
  aliases: ["verify"],
  category: ":frame_photo: WELCOME",
  usage: "st <link>",
  description: "Set the img for welcome channel",
  run: (client, message, args) => {

    let rRole = db.get(`verole_${message.guild.id}`)
    let rerole = db.get(`srrole_${message.guild.id}`)

    const chx = db.get(`verify_${message.guild.id}`);
const chan = client.channels.cache.get(chx);
if (message.channel.name == chan.name) {
        

    let myRole = message.guild.roles.cache.get(rRole);
    let reerole = message.guild.roles.cache.get(rerole);

let user = message.member;


user.roles.add(myRole);
user.roles.remove(reerole);


    message.author.send(`คุณได้ Verify ตัวคุณแล้วในเชิฟ: ${message.guild.name}`)
     }
    
  }
  }

//โค้ดทำโดย JN03 - JNWORLD โปรดอย่าลบข้อความนี้
//โค้ดบอทเปิดเพลงในดิสคอสนี้หากจะนำไปแจกกรุณาให้ Credit ด้วยนะครับ
//โปรดอย่่านำชื่อออกจากโค้ดโดยไม่ได้ขอหรือได้รับการอนุณาตจาก JN03 - DEV
//กลุ่ม JN03 [https://discord.gg/zFau5wM8MW]
//หากมีปัญหาสามารถติดต่อในดิสคอสและ Dev [JN03]
//กรุณาให้ CREDIT [JN03] ด้วยนะครับ :D