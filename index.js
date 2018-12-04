const Telegrambot = require('node-telegram-bot-api')
const TOKEN = '658527596:AAEkA5Vkbq_RFQgxOMz4PlffltVfuu9wGuQ'
const bot = new Telegrambot(TOKEN,{polling:true})
const trigger = 'kobra';


bot.on('message', (msg) => {
    bot.sendMessage(msg.chat.id, 'Hi, do you want to travel?', {
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