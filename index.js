const Telegrambot = require('node-telegram-bot-api')
const TOKEN = '658527596:AAEkA5Vkbq_RFQgxOMz4PlffltVfuu9wGuQ'
const bot = new Telegrambot(TOKEN,{polling:true})
bot.on('message' , msg =>{
    bot.sendMessage(msg.chat.id, 'Hello from heroku, bot says: "Hi, ${msg.form.first_name}"')
})