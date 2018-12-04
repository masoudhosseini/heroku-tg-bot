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
bot.on('message', (msg) => {
    if (msg.text.toString() === trigger) {
        bot.sendPhoto(msg.chat.id,photo="http://pilatesandyogafitness.com/wp-content/uploads/2018/01/Heart-clip-art-clipartandscrap.png")
    }
});