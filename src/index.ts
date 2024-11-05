import { Client, GatewayIntentBits, Events } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once(Events.ClientReady, () => {
  console.log(`${client.user?.tag}起動`);
});

client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) return;

  if (message.content === 'ping') {
    message.reply('pong！');
  }
});

client.login(process.env.DISCORD_TOKEN).catch((error) => {
  console.error('ログイン失敗:', error);
});
