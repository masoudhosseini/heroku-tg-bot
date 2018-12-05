const Telegrambot = require('node-telegram-bot-api')
const TOKEN = '658527596:AAEkA5Vkbq_RFQgxOMz4PlffltVfuu9wGuQ'
const bot = new Telegrambot(TOKEN,{polling:true})
const trigger = 'kobra'
const trigger2 = 'masoud'
const trigger3 = 'location'
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
let request = require('request');
let apiKey = '6ee20a29bb9dd0705999f0d8529b3224';
let url = 'http://api.openweathermap.org/data/2.5/weather?q=Orumiyeh,ir&APPID=6ee20a29bb9dd0705999f0d8529b3224'
app.get('/', function (req, res) {
res.send(JSON.stringify({ Hello: 'World'}));
});
app.listen(port, function () {
    console.log('Example app listening on port !');
});
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
        request(url, function (err, response, body) {
            if(err){
                console.log('error:', error);
            } else {
                let weather = JSON.parse(body)
                let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;

                bot.sendMessage(msg.chat.id, $(message));
            }
        });
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