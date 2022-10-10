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
     🔥BY ALBOTWhatsapp🔥
          
                  
–––––– *ᴋᴇʙɪᴊᴀᴋᴀɴ* ––––––
*📮Gunakan Dengan tujuan yang benar. Jangan untuk merugikan orang lain tanpa alasan!* `
  /*    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	{title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },*/
const sections = [{
title: `⟥⟝⟢⟨✃ VIRTEX ⟩⟣⟞⟤`,
rows: [
        {title: "😈 • Virtex1", rowId: ".virtex1"},
      	{title: "😈 • Virtex2", rowId: ".virtex2"},
        {title: "😈 • Virtex3", rowId: ".virtex3"},
        {title: "😈 • Virtex4", rowId: ".virtex4"},
        {title: "😈 • Virtex5", rowId: ".virtex5"},
        {title: "😈 • Virtex6", rowId: ".virtex6"},
        {title: "😈 • Virtex7", rowId: ".virtex7"},
        {title: "😈 • Virtex8 ", rowId: ".virtex8"},
        {title: "😈 • Virtex9", rowId: ".virtex9"},
        {title: "😈 • Virtex10", rowId: ".virtex10"},
        {title: "😈 • Virtex11", rowId: ".virtex11"},
        {title: "😈 • Virtex12", rowId: ".virtex12"},
        {title: "😈 • Virtex13", rowId: ".virtex13"},
        {title: "😈 • Virtex14", rowId: ".virtex14"},
        {title: "😈 • Virtex15", rowId: ".virtex15"},       
        {title: "😈 • Virtex16", rowId: ".virtex16"},
        {title: "😈 • Virtex17", rowId: ".virtex17"},    
        {title: "😈 • Virtex18", rowId: ".virtex18"},
      	{title: "😈 • Virtex19", rowId: ".virtex19"},
        {title: "😈 • Virtex20", rowId: ".virtex20"},    
]},
]

const listMessage = {
  text: info,
  footer:  `Hai kak ${name}\n⌚ : ${wibb}\n📆 : ${week} ${date}`,
  title: '⬒ ───⟢⟨ *L✃ VIRTEX* ⟩⟣─── ⬒',
  buttonText: "GAS👺",
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

handler.help = ['listvirtex',]
handler.tags = ['virus' ]
handler.command = /^(listvirtex|tex)$/i
handler.owner = true
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
