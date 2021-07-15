import * as Discord from "discord.js"
const client = new Discord.Client();
import getdata from "./backend.js" 
import TOKEN from "./token.js"


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message',  async(msg) => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  } else if(msg.content.startsWith("과목")) {
      const msgArgs = msg.content.split(" ")
      if (msgArgs.length === 5) {
        const totalData = await (await getdata(msgArgs[1],msgArgs[2],msgArgs[3],msgArgs[4])).data.data.getPeriodSubject
        console.log(totalData)
        const days = ["월","화","수","목","금"]
        const today = days[msgArgs[3]-1]
        await msg.reply(`${totalData.grade}학년 ${totalData.class}반 ${today}요일 ${msgArgs[4]}교시의 과목은 ${totalData.teacher + "*"} 선생님의 **${totalData.subject}**입니다!`)
      }
  }
});

client.login(TOKEN);