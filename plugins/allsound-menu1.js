 import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
//-----PRICE
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}:${wibm}:${wibs} WIB`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)
//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let wibb = `${wktuwib}`
let info = `
🎧 *AL-BOT WHATSAPP*
*Silahkan pilih list Sound dibawah ini* `
  /*    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	{title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },*/
const sections = [{
  {title: `${htjava} SOUND MENU –––––––––·•`,
	rows: [
    {title: "Sound Ultah", rowId: ".soundultah"},
	{title: "Sound 1", rowId: ".sound1"},
    {title: "Sound 2", rowId: ".sound2"},
	{title: "Sound 3", rowId: ".sound3"},
	{title: "Sound 4", rowId: ".sound4"},
	{title: "Sound 5", rowId: ".sound5"},
	{title: "Sound 6", rowId: ".sound6"},
	{title: "Sound 7", rowId: ".sound7"},
	{title: "Sound 8", rowId: ".sound8"},
	{title: "Sound 9", rowId: ".sound9"},
	{title: "Sound 10", rowId: ".sound10"},
	{title: "Sound 11", rowId: ".sound11"},
	{title: "Sound 12", rowId: ".sound12"},
	{title: "Sound 13", rowId: ".sound13"},
	{title: "Sound 14", rowId: ".sound14"},
	{title: "Sound 15", rowId: ".sound15"},
	{title: "Sound 16", rowId: ".sound16"},
	{title: "Sound 17", rowId: ".sound17"},
	{title: "Sound 18", rowId: ".sound18"},
	{title: "Sound 19", rowId: ".sound19"},
    {title: "Sound 20", rowId: ".sound20"},
	{title: "Sound 21", rowId: ".sound21"},
    {title: "Sound 22", rowId: ".sound22"},
	{title: "Sound 23", rowId: ".sound23"},
	{title: "Sound 24", rowId: ".sound24"},
	{title: "Sound 25", rowId: ".sound25"},
	{title: "Sound 26", rowId: ".sound26"},
	{title: "Sound 27", rowId: ".sound27"},
	{title: "Sound 28", rowId: ".sound28"},
	{title: "Sound 29", rowId: ".sound29"},
	{title: "Sound 30", rowId: ".sound30"},
	{title: "Sound 31", rowId: ".sound31"},
	{title: "Sound 32", rowId: ".sound32"},
	{title: "Sound 33", rowId: ".sound33"},
	{title: "Sound 34", rowId: ".sound34"},
	{title: "Sound 35", rowId: ".sound35"},
	{title: "Sound 36", rowId: ".sound36"},
	{title: "Sound 37", rowId: ".sound37"},
	{title: "Sound 38", rowId: ".sound38"},
	{title: "Sound 39", rowId: ".sound39"},
    {title: "Sound 40", rowId: ".sound40"},
	{title: "Sound 41", rowId: ".sound41"},
    {title: "Sound 42", rowId: ".sound42"},
	{title: "Sound 43", rowId: ".sound43"},
	{title: "Sound 44", rowId: ".sound44"},
	{title: "Sound 45", rowId: ".sound45"},
	{title: "Sound 46", rowId: ".sound46"},
	{title: "Sound 47", rowId: ".sound47"},
	{title: "Sound 48", rowId: ".sound48"},
	{title: "Sound 49", rowId: ".sound49"},
	{title: "Sound 50", rowId: ".sound50"},
	{title: "Sound 51", rowId: ".sound51"},
	{title: "Sound 52", rowId: ".sound52"},
	{title: "Sound 53", rowId: ".sound53"},
	{title: "Sound 54", rowId: ".sound54"},
	{title: "Sound 55", rowId: ".sound55"},
	{title: "Sound 56", rowId: ".sound56"},
	{title: "Sound 57", rowId: ".sound57"},
	{title: "Sound 58", rowId: ".sound58"},
	{title: "Sound 59", rowId: ".sound59"},
    {title: "Sound 60", rowId: ".sound60"},
	{title: "Sound 61", rowId: ".sound61"},
    {title: "Sound 62", rowId: ".sound62"},
	{title: "Sound 63", rowId: ".sound63"},
	{title: "Sound 64", rowId: ".sound64"},
	{title: "Sound 65", rowId: ".sound65"},
	{title: "Sound 66", rowId: ".sound66"},
	{title: "Sound 67", rowId: ".sound67"},
	{title: "Sound 68", rowId: ".sound68"},
	{title: "Sound 69", rowId: ".sound69"},
	{title: "Sound 70", rowId: ".sound70"},
	{title: "Sound 71", rowId: ".sound71"},
	{title: "Sound 72", rowId: ".sound72"},
	{title: "Sound 73", rowId: ".sound73"},
	{title: "Sound 74", rowId: ".sound74"},
	{title: "Sound 75", rowId: ".sound75"},
	{title: "Sound 76", rowId: ".sound76"},
	{title: "Sound 77", rowId: ".sound77"},
	{title: "Sound 78", rowId: ".sound78"},
	{title: "Sound 79", rowId: ".sound79"},
    {title: "Sound 80", rowId: ".sound80"},
	{title: "Sound 81", rowId: ".sound81"},
    {title: "Sound 82", rowId: ".sound82"},
	{title: "Sound 83", rowId: ".sound83"},
	{title: "Sound 84", rowId: ".sound84"},
	{title: "Sound 85", rowId: ".sound85"},
	{title: "Sound 86", rowId: ".sound86"},
	{title: "Sound 87", rowId: ".sound87"},
	{title: "Sound 88", rowId: ".sound88"},
	{title: "Sound 89", rowId: ".sound89"},
	{title: "Sound 90", rowId: ".sound90"},
	{title: "Sound 91", rowId: ".sound91"},
	{title: "Sound 92", rowId: ".sound92"},
	{title: "Sound 93", rowId: ".sound93"},
	{title: "Sound 94", rowId: ".sound94"},
	{title: "Sound 95", rowId: ".sound95"},
	{title: "Sound 96", rowId: ".sound96"},
	{title: "Sound 97", rowId: ".sound97"},
	{title: "Sound 98", rowId: ".sound98"},
	{title: "Sound 99", rowId: ".sound99"},
    {title: "Sound 100", rowId: ".sound100"},
	{title: "Sound 101", rowId: ".sound101"},
    {title: "Sound 102", rowId: ".sound102"},
	{title: "Sound 103", rowId: ".sound103"},
	{title: "Sound 104", rowId: ".sound104"},
	{title: "Sound 105", rowId: ".sound105"},
	{title: "Sound 106", rowId: ".sound106"},
	{title: "Sound 107", rowId: ".sound107"},
	{title: "Sound 108", rowId: ".sound108"},
	{title: "Sound 109", rowId: ".sound109"},
	{title: "Sound 110", rowId: ".sound110"},
	{title: "Sound 111", rowId: ".sound111"},
	{title: "Sound 112", rowId: ".sound112"},
	{title: "Sound 113", rowId: ".sound113"},
	{title: "Sound 114", rowId: ".sound114"},
	{title: "Sound 115", rowId: ".sound115"},
	{title: "Sound 116", rowId: ".sound116"},
	{title: "Sound 117", rowId: ".sound117"},
	{title: "Sound 118", rowId: ".sound118"},
	{title: "Sound 119", rowId: ".sound119"},
]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".owner nomor"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]
const listMessage = {
  text: info,
  footer:  `Hai kak ${name}\n⌚ : ${wibb}\n📆 : ${week} ${date}`,
  title: '⬒ ───⟢⟨ *🎧 Kumpulan 119 Sound* ⟩⟣─── ⬒',
  〠By AL BOT Whatsapp
  buttonText: "Click Here!",
  sections
}

let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  
  case 'sewabottt': 
  let teks = `*${htki} ${command.toUpperCase()} ${htka}*\n📮 : ${text}\n*- @${m.sender.split`@`[0]}*`
conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
   /* m.reply('☑️ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')*/
  break
  
  default:
  if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
  throw false
  }
   m.reply('☑️ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(coba sound|so)$/i

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}
