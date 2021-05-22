const { Telegraf } = require('telegraf')
let wordlist = ["ДОБР", "ПРЕТЕНД", "УБИВ", "ДЕЦ", "АНОНИМИН", "КРИНДЖ", "БАЗ", "ШИ","АСПИР","МЕНТАЛ","ДИРИЖИРА"];
let schizolist = ["ИРАМ", "ЕМЕЧЕ", "ЕНЦЕ", "ИРА", "ЕН ","СКИ","ИРАШ ОТНОВО?"];
let prefixes=["УЛТРА","ШИЗО","БАВНО","ПЕДО","НАЙКИ","ЬЛ","ЛОРЕМЧ","СВАПЧО"]
let prefixChance=function(seed){
if(seed>0.7){
return prefixes[currentrandomthree] 
}else{
return ""
}
}


const bot = new Telegraf("token")	//add token here
bot.hears('/tedospeak', (ctx) => {
    empty=""
    for (i = 0; i < Math.random()*24; i++) {
        seed=Math.random()
          schizolist[schizolist.length-1] = " ЕН" + wordlist[Math.ceil(Math.random() * wordlist.length-1)] + "ИРАШ ОТНОВО?"
          currentrandomone = Math.ceil(Math.random() * wordlist.length-1)
          currentrandomtwo = Math.ceil(Math.random() * schizolist.length-1)
          currentrandomthree = Math.ceil(Math.random() * prefixes.length-1)
          empty += " " +prefixChance(seed)+ wordlist[currentrandomone] + schizolist[currentrandomtwo]
        }
        
    ctx.reply(empty)})
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))