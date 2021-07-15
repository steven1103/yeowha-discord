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
  } else if(msg.content === "lol") {
      getdata()
  }
});

client.login(TOKEN);