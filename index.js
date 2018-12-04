const Telegrambot = require('node-telegram-bot-api')
const TOKEN = '658527596:AAEkA5Vkbq_RFQgxOMz4PlffltVfuu9wGuQ'
const bot = new Telegrambot(TOKEN,{polling:true})
const trigger = 'kobra';
const trigger2 = 'masoud';


bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id,  {
        reply_markup: {
            keyboard: [['kobra'], ['masoud']]
        }
    });
});

bot.on('message', (msg) => {
    if (msg.text.toString() === trigger) {
         bot.sendMessage(msg.chat.id, 'Hello from masoud');

        }
    });
msg.payload = {chatId : masoudhosseini68, type : 'message', content : 'ping'}
return msg;