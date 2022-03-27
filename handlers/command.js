const { readdirSync } = require("fs");
const ascii = require("ascii-table");


let table = new ascii("สถานะของบอท");
table.setHeading("ชื่อคำสั่งของบอท", "สถานะคำสั่ง");

module.exports = (client) => {
    
    readdirSync("./commands/").forEach(dir => {
        
        const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
    
       
        for (let file of commands) {
            let pull = require(`../commands/${dir}/${file}`);
    
            if (pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, '✅');
            } else {
                table.addRow(file, `❌ มีไฟล์บางอย่างหายไปนะลองโหลดใหม่อีกครั่งนะ!!!`);
                continue;
            }
    
       
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
        }
    });
    

    console.log(table.toString());
}

//โค้ดทำโดย JN03 - JNWORLD โปรดอย่าลบข้อความนี้
//โค้ดบอทเปิดเพลงในดิสคอสนี้หากจะนำไปแจกกรุณาให้ Credit ด้วยนะครับ
//โปรดอย่่านำชื่อออกจากโค้ดโดยไม่ได้ขอหรือได้รับการอนุณาตจาก JN03 - DEV
//กลุ่ม JN03 [https://discord.gg/zFau5wM8MW]
//หากมีปัญหาสามารถติดต่อในดิสคอสและ Dev [JN03]
//กรุณาให้ CREDIT [JN03] ด้วยนะครับ :D