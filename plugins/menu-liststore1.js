import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
//-----PRICE
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
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
let ff1 = 'Rp 999'
let ff2 = 'Rp 2.000'
let ff3 = 'Rp 5.000'
let ff4 = 'Rp 6.000'
let ff5 = 'Rp 8.000'
let ff6 = 'Rp 10.000'
let ff7 = 'Rp 11.000'
let ff8 = 'Rp 13.000'
let ff9 = 'Rp 14.679'
let ff10 = 'Rp 18.000'
let ff11 = 'Rp 28.000'
let ff12 = 'Rp 46.995'
let ff13 = 'Rp 65.652'
let ff14 = 'Rp 91.500'
let ff15 = 'Rp 128.968'
let ff16 = 'Rp 180.900'
let ff17 = 'Rp 139.950'
let ff18 = 'Rp 271.502'
let ff19 = 'Rp 562.977'
let ff20 = 'Rp 14.959'
let ff21 = 'Rp 28.000'
let ff22 = 'Rp 83.558'
let info =`
✨PRICELIST FREE FIRE✨
5     Diamond   💎${ff1}
12    Diamomd   💎${ff2}
30    Diamond   💎${ff3}
40    Diamond   💎${ff4}
50    Diamond   💎${ff5}
70    Diamond   💎${ff6}
80    Diamond   💎${ff7}
90    Diamond   💎${ff8}
100   Diamond   💎${ff9}
140   Diamond   💎${ff10}
210   Diamond   💎${ff11}
355   Diamond   💎${ff12}
500   Diamond   💎${ff13}
720   Diamond   💎${ff14}
1000  Diamond   💎${ff15}
1450  Diamond   💎${ff16}
1075  Diamond   💎${ff17}
2180  Diamond   💎${ff18}
3640  Diamond   💎${ff19}
M.Level Up Pass ${ff20}
M.Minguan 💎${ff21}
M.Bulanan  💎${ff22}+
let wibb =  ${wktuwib}`

let info = `

Belum Tau Mau Jual Apa:)
`
  /*  title: `${htjava} List Store ✦-------`,
	rows: [
	    {title: "💎 5 DM", rowId: '.order *Top Up:* 5 DM • Free Fire', description: 'PRICE: ' + ff1 + ', Diamond Free Fire' },
        {title: "💎 12 DM", rowId: '.order *Top Up:* 12 DM • Free Fire', description: 'PRICE: ' + ff2 + ', Diamond Free Fire' },
        {title: "💎 30 DM", rowId: '.order *Top Up:* 30 DM • Free Fire', description: 'PRICE: ' + ff3 + ', Diamond Free Fire' },
        {title: "💎 40 DM", rowId: '.order *Top Up:* 40 DM • Free Fire', description: 'PRICE: ' + ff4 + ', Diamond Free Fire' },
        {title: "💎 50 DM", rowId: '.order *Top Up:* 50 DM • Free Fire', description: 'PRICE: ' + ff5 + ', Diamond Free Fire' },
        {title: "💎 70 DM", rowId: '.order *Top Up:* 70 DM • Free Fire', description: 'PRICE: ' + ff6 + ', Diamond Free Fire' },
        {title: "💎 80 DM", rowId: '.order *Top Up:* 80 DM • Free Fire', description: 'PRICE: ' + ff7 + ', Diamond Free Fire' },
        {title: "💎 90 DM", rowId: '.order *Top Up:* 90 DM • Free Fire', description: 'PRICE: ' + ff8 + ', Diamond Free Fire' },
        {title: "💎 100 DM", rowId: '.order *Top Up:* 100 DM • Free Fire', description: 'PRICE: ' + ff9 + ', Diamond Free Fire' },
        {title: "💎 140 DM", rowId: '.order *Top Up:* 140 DM • Free Fire', description: 'PRICE: ' + ff10 + ', Diamond Free Fire' },
        {title: "💎 210 DM", rowId: '.order *Top Up:* 210 DM • Free Fire', description: 'PRICE: ' + ff11 + ', Diamond Free Fire' },
        {title: "💎 355 DM", rowId: '.order *Top Up:* 355 DM • Free Fire', description: 'PRICE: ' + ff12 + ', Diamond Free Fire' },
        {title: "💎 500 DM", rowId: '.order *Top Up:* 500 DM • Free Fire', description: 'PRICE: ' + ff13 + ', Diamond Free Fire' },
        {title: "💎 720 DM", rowId: '.order *Top Up:* 720 DM • Free Fire', description: 'PRICE: ' + ff14 + ', Diamond Free Fire' },
        {title: "💎 1000 DM", rowId: '.order *Top Up:* 1000 DM • Free Fire', description: 'PRICE: ' + ff15 + ', Diamond Free Fire' },
        {title: "💎 1450 DM", rowId: '.order *Top Up:* 1450 DM • Free Fire', description: 'PRICE: ' + ff16 + ', Diamond Free Fire' },
        {title: "💎 1075 DM", rowId: '.order *Top Up:* 1075 DM • Free Fire', description: 'PRICE: ' + ff17 + ', Diamond Free Fire' },
        {title: "💎 2180 DM", rowId: '.order *Top Up:* 2180 DM • Free Fire', description: 'PRICE: ' + ff18 + ', Diamond Free Fire' },
        {title: "💎 3640 DM", rowId: '.order *Top Up:* 3640 DM • Free Fire', description: 'PRICE: ' + ff19 + ', Diamond Free Fire' },
        {title: "💎 M.Level Up Pass", rowId: '.order *Top Up:* M.Level Up Pass • Free Fire', description: 'PRICE: ' + ff20 + ', M.Level Up Pass Free Fire' },
        {title: "💎 M.Minguan", rowId: '.order *Top Up:* M.Minguan • Free Fire', description: 'PRICE: ' + ff21 + ', M.Minguan Free Fire' },
        {title: "💎 M.Bulanan", rowId: '.order *Top Up:* M.Bulanan • Free Fire', description: 'PRICE: ' + ff22 + ', M.Bulanan Free Fire' }, */
const sections = [{
title: `${htjava} List Store ✦-------`,
	rows: [
	    {title: "💎 5 DM", rowId: '.order *Top Up:* 5 DM • Free Fire', description: 'PRICE: ' + ff1 + ', Diamond Free Fire' },
        {title: "💎 12 DM", rowId: '.order *Top Up:* 12 DM • Free Fire', description: 'PRICE: ' + ff2 + ', Diamond Free Fire' },
        {title: "💎 30 DM", rowId: '.order *Top Up:* 30 DM • Free Fire', description: 'PRICE: ' + ff3 + ', Diamond Free Fire' },
        {title: "💎 40 DM", rowId: '.order *Top Up:* 40 DM • Free Fire', description: 'PRICE: ' + ff4 + ', Diamond Free Fire' },
        {title: "💎 50 DM", rowId: '.order *Top Up:* 50 DM • Free Fire', description: 'PRICE: ' + ff5 + ', Diamond Free Fire' },
        {title: "💎 70 DM", rowId: '.order *Top Up:* 70 DM • Free Fire', description: 'PRICE: ' + ff6 + ', Diamond Free Fire' },
        {title: "💎 80 DM", rowId: '.order *Top Up:* 80 DM • Free Fire', description: 'PRICE: ' + ff7 + ', Diamond Free Fire' },
        {title: "💎 90 DM", rowId: '.order *Top Up:* 90 DM • Free Fire', description: 'PRICE: ' + ff8 + ', Diamond Free Fire' },
        {title: "💎 100 DM", rowId: '.order *Top Up:* 100 DM • Free Fire', description: 'PRICE: ' + ff9 + ', Diamond Free Fire' },
        {title: "💎 140 DM", rowId: '.order *Top Up:* 140 DM • Free Fire', description: 'PRICE: ' + ff10 + ', Diamond Free Fire' },
        {title: "💎 210 DM", rowId: '.order *Top Up:* 210 DM • Free Fire', description: 'PRICE: ' + ff11 + ', Diamond Free Fire' },
        {title: "💎 355 DM", rowId: '.order *Top Up:* 355 DM • Free Fire', description: 'PRICE: ' + ff12 + ', Diamond Free Fire' },
        {title: "💎 500 DM", rowId: '.order *Top Up:* 500 DM • Free Fire', description: 'PRICE: ' + ff13 + ', Diamond Free Fire' },
        {title: "💎 720 DM", rowId: '.order *Top Up:* 720 DM • Free Fire', description: 'PRICE: ' + ff14 + ', Diamond Free Fire' },
        {title: "💎 1000 DM", rowId: '.order *Top Up:* 1000 DM • Free Fire', description: 'PRICE: ' + ff15 + ', Diamond Free Fire' },
        {title: "💎 1450 DM", rowId: '.order *Top Up:* 1450 DM • Free Fire', description: 'PRICE: ' + ff16 + ', Diamond Free Fire' },
        {title: "💎 1075 DM", rowId: '.order *Top Up:* 1075 DM • Free Fire', description: 'PRICE: ' + ff17 + ', Diamond Free Fire' },
        {title: "💎 2180 DM", rowId: '.order *Top Up:* 2180 DM • Free Fire', description: 'PRICE: ' + ff18 + ', Diamond Free Fire' },
        {title: "💎 3640 DM", rowId: '.order *Top Up:* 3640 DM • Free Fire', description: 'PRICE: ' + ff19 + ', Diamond Free Fire' },
        {title: "💎 M.Level Up Pass", rowId: '.order *Top Up:* M.Level Up Pass • Free Fire', description: 'PRICE: ' + ff20 + ', M.Level Up Pass Free Fire' },
        {title: "💎 M.Minguan", rowId: '.order *Top Up:* M.Minguan • Free Fire', description: 'PRICE: ' + ff21 + ', M.Minguan Free Fire' },
        {title: "💎 M.Bulanan", rowId: '.order *Top Up:* M.Bulanan • Free Fire', description: 'PRICE: ' + ff22 + ', M.Bulanan Free Fire' },
]

const listMessage = {
  text: info,
  footer:  `Hᴀʟʟᴏ Wᴇʟᴄᴏᴍᴇ Tᴏ Mʏ Bᴏᴛ Sᴛᴏʀᴇ ${name}\n📆 : ${week}${date}\n⌚: ${wibb}`,
  title: '⬒ ───⟢⟨ *Mʏ Lɪsᴛ Sᴛᴏʀᴇ* ⟩⟣─── ⬒',
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
handler.command = /^(store)$/i

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

  
