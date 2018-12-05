const Telegrambot = require('node-telegram-bot-api')
const TOKEN = '658527596:AAEkA5Vkbq_RFQgxOMz4PlffltVfuu9wGuQ'
const bot = new Telegrambot(TOKEN,{polling:true})
const trigger = 'kobra'
const trigger2 = 'masoud'
const trigger3 = 'location'
const express = require('express'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Express server is running on port " + port)
})

bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome", {
        "reply_markup": {
            "keyboard": [["masoud", "Second sample"],   ["kobra"], ["location"]]
        }
    });

});


bot.on('message', (msg) => {
    if (msg.text.toString() === trigger) {
         bot.sendMessage(msg.chat.id, 'Hello from masoud');

        }
    });
bot.on('message', (msg) => {
    if (msg.text.toString() === trigger2) {
        bot.sendPhoto(msg.chat.id,photo="http://pilatesandyogafitness.com/wp-content/uploads/2018/01/Heart-clip-art-clipartandscrap.png");
    }
});
bot.on('message', (msg) => {
    if (msg.text.toString() === trigger3) {
        bot.sendLocation(msg.chat.id,35.7797061 ,51.3487489)
    }
});