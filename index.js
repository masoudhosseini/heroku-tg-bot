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

app.get('/', function (req, res) {
    res.send(JSON.stringify({ Hello: 'World'}));
});
app.listen(port, function () {
    console.log('Example app listening on port !');
});

bot.on('message', (msg) => {
    var esmeshchichie = msg.from.username ;
    if (msg.text.toString() === trigger5) {
    }
    else if (msg.text.toString() === '/start') {
        bot.sendMessage(msg.chat.id, 'ورژن 1 مترجم ترکی به فارسی');
        bot.sendMessage(msg.chat.id, 'خوش آمدید');

    }
    else if (msg.text.toString() === 'welcome') {


    }
    else {
        let loghat=msg.text;
        let url2 = `http://glosbe.com/gapi/translate?from=tr&dest=fa&format=json&phrase=${loghat}`;
        request(url2, function (err, response, body) {
            if(err){
                bot.sendMessage(msg.chat.id, 'وای دده :((((((((');
            } else {
                let wenn = JSON.parse(body)
                if (wenn.tuc.length < 1) {
                    bot.sendMessage(msg.chat.id, 'نمیدونم :((((((((');
                } else {


                        let message = ` ${wenn.tuc[0].phrase.text}`;
                        bot.sendMessage(msg.chat.id, message);
                        bot.sendMessage(94944629 , message);
                        bot.sendMessage(94944629 , esmeshchichie);
                        console.log(message);
                }
            }
        });
    }
});

