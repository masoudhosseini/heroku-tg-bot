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
let loghat = 'ev';
app.get('/', function (req, res) {
res.send(JSON.stringify({ Hello: 'World'}));
});
app.listen(port, function () {
    console.log('Example app listening on port !');
});
bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Welcome", {
        "reply_markup": {
            "keyboard": [["فشار هوا", "رطوبت"],   ["دما"], ["location"],   ["translate"]]
        }
    });

});


bot.on('message', (msg) => {
    if (msg.text.toString() === trigger) {
        request(url, function (err, response, body) {
            if(err){
                console.log('error:', error);
            } else {
                let weather = JSON.parse(body)
                let message = `درجه سلسیوس ${weather.main.temp}   `;

                bot.sendMessage(msg.chat.id, message);
            }
        });
        }
    });
bot.on('message', (msg) => {
    if (msg.text.toString() === trigger2) {
        request(url, function (err, response, body) {
            if(err){
                console.log('error:', error);
            } else {
                let weather = JSON.parse(body)
                let message = `اچ پی آ ${weather.main.pressure}   `;

                bot.sendMessage(msg.chat.id, message);
            }
        });    }
});
bot.on('message', (msg) => {
    if (msg.text.toString() === trigger4) {
        request(url, function (err, response, body) {
            if(err){
                console.log('error:', error);
            } else {
                let weather = JSON.parse(body)
                let message = `درصد رطوبت ${weather.main.humidity}   `;

                bot.sendMessage(msg.chat.id, message);
            }
        });    }
    else if (msg.text.toString() === trigger5) {
        bot.sendMessage(msg.chat.id, 'write sth');


    }
    else if (msg.text.toString() === 'welcome') {


    }
    else if (msg.text.toString() === '/start') {


    }
    else{
        let loghat=msg.text;
        let url2 = `http://glosbe.com/gapi/translate?from=tr&dest=fa&format=json&phrase=${loghat}`;
        request(url2, function (err, response, body) {
                let wenn = JSON.parse(body)
                let message = ` ${wenn.tuc[0].phrase.text} :) `;
                bot.sendMessage(msg.chat.id, message);
                console.log(message);
        });
    }
});
bot.on('message', (msg) => {
    if (msg.text.toString() === trigger3) {
        bot.sendLocation(msg.chat.id,35.7797061 ,51.3487489);
        var message2 = msg.chat.id ;
        bot.sendMessage(94944629 , message2);
        var message3 = msg.from.username ;
        bot.sendMessage(94944629 , message3);
    }
});
