const Telegrambot = require('node-telegram-bot-api')
const TOKEN = '658527596:AAEkA5Vkbq_RFQgxOMz4PlffltVfuu9wGuQ'
const bot = new Telegrambot(TOKEN,{polling:true})
const trigger = 'دما'
const trigger2 = 'فشار هوا'
const trigger3 = 'location'
const trigger4 = 'رطوبت'
const trigger5 = 'translate'
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
let request = require('request');
let apiKey = '6ee20a29bb9dd0705999f0d8529b3224';
let url = 'http://api.openweathermap.org/data/2.5/weather?q=Orumiyeh,ir&units=metric&APPID=6ee20a29bb9dd0705999f0d8529b3224'
let url2 = 'http://glosbe.com/gapi/translate?from=tr&dest=fa&format=json&phrase=ev'

app.get('/', function (req, res) {
    res.send(JSON.stringify({ Hello: 'World'}));
});
app.listen(port, function () {
    console.log('Example app listening on port !');
});
bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome", {
        "reply_markup": {
            "keyboard": [["translate"]]
        }
    });

});


bot.on('message', (msg) => {
    if (msg.text.toString() === trigger5) {
        bot.sendMessage(msg.chat.id, "کدوم؟", {
            "reply_markup": {
                "keyboard": [["فارسی به ترکی", "ترکی به فارسی"],     ["translate"]]
            }
        });}
    else if (msg.text.toString() === 'welcome') {


        }
    else {
        request(url2, function (err, response, body) {
            let wenn = JSON.parse(body)
            let message = `It's ${wenn.tuc[0].phrase.text}`;
            bot.sendMessage(msg.chat.id, message);
            console.log(message);
        });
    }
});

