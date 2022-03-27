const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setrole",
  aliases: ["sr"],
  category: ":frame_photo: WELCOME",
  run: (client, message, args) => {

     if (!message.member.hasPermission("ADMINISTRATION")) {
      return message.channel.send("คุณมีสิทธิ์ไม่เพียงพอที่จะใช้คำสั่งนี้");
    }
    let vrole = message.mentions.roles.first();
    if(!vrole) {
      return message.channel.send(`ให้บทบาทที่คุณต้องการให้ฉันเมื่อพวกเขา Verify`)
    }
    
    db.set(`verole_${message.guild.id}`, vrole.id)
    
    
    message.channel.send(`ตอนนี้ฉันจะให้\`${vrole}\` เป็นบทบาทการ Verify`)
  }
}

//โค้ดทำโดย JN03 - JNWORLD โปรดอย่าลบข้อความนี้
//โค้ดบอทเปิดเพลงในดิสคอสนี้หากจะนำไปแจกกรุณาให้ Credit ด้วยนะครับ
//โปรดอย่่านำชื่อออกจากโค้ดโดยไม่ได้ขอหรือได้รับการอนุณาตจาก JN03 - DEV
//กลุ่ม JN03 [https://discord.gg/zFau5wM8MW]
//หากมีปัญหาสามารถติดต่อในดิสคอสและ Dev [JN03]
//กรุณาให้ CREDIT [JN03] ด้วยนะครับ :D