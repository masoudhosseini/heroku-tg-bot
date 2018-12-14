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
const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['en'] });
var responsex = '';
var asliii ='';
app.get('/', function (req, res) {
    res.send(JSON.stringify({ Hello: 'World'}));
});
app.listen(port, function () {
    console.log('Example app listening on port !');
});
// Adds the utterances and intents for the NLP
manager.addDocument('en', 'goodbye for now', 'greetings.bye');
manager.addDocument('en', 'bye bye take care', 'greetings.bye');
manager.addDocument('en', 'okay see you later', 'greetings.bye');
manager.addDocument('en', 'bye for now', 'greetings.bye');
manager.addDocument('en', 'i must go', 'greetings.bye');
manager.addDocument('en', 'hello', 'greetings.hello');
manager.addDocument('en', 'hi', 'greetings.hello');
manager.addDocument('en', 'howdy', 'greetings.hello');

// Train also the NLG
manager.addAnswer('en', 'greetings.bye', 'Till next time');
manager.addAnswer('en', 'greetings.bye', 'see you soon!');
manager.addAnswer('en', 'greetings.hello', 'Hey there!');
manager.addAnswer('en', 'greetings.hello', 'Greetings!');

// Train and save the model.

bot.on('message', (msg) => {
    asliii=msg.text.toString();
    (async () => {
        await manager.train();
        manager.save();
        responsex = await manager.process('en', asliii);
        console.log(responsex.answer);
        console.log(asliii);
    })();
    bot.sendMessage(msg.chat.id, responsex.answer);
    var esmeshchichie = msg.from.username ;
    if (msg.text.toString() === trigger5) {
    }
    else if (msg.text.toString() === '/start') {
        bot.sendMessage(msg.chat.id, 'ورژن 1 مترجم ترک? به فارس?');
        bot.sendMessage(msg.chat.id, 'خوش آمد?د ');

    }
    else if (msg.text.toString() === 'welcome') {


    }
    else {
        let loghat=msg.text.toLowerCase();
        let url2 = `http://glosbe.com/gapi/translate?from=tr&dest=fa&format=json&phrase=${loghat}`;

    }
});

