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
š *MP4 BOKEP*
Silahkan pilih list menu bokep dibawah ini
 Jangan comly ya:vā`
  /*    {title: "š HEMAT", rowId: '.order *Paket:* HEMAT ā¢ Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	{title: "š NORMAL", rowId: '.order *Paket:* NORMAL ā¢ Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "š STANDAR", rowId: '.order *Paket:* STANDAR ā¢ Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "š PRO", rowId: '.order *Paket:* PRO ā¢ Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "š VIP", rowId: '.order *Paket:* VIP ā¢ Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },*/
const sections = [{
title: `ā„āā¢āØš MENU BOKEP ā©ā£āā¤`,
rows: [
        {title: "š ā¢ BOKEP1", rowId: ".bokep1"},
      	{title: "š ā¢ BOKEP2", rowId: ".bokep2"},
        {title: "š ā¢ BOKEP3", rowId: ".bokep3"},
        {title: "š ā¢ BOKEP4", rowId: ".bokep4"},
        {title: "š ā¢ BOKEP5", rowId: ".bokep5"},
        {title: "š ā¢ BOKEP6", rowId: ".bokep6"},
        {title: "š ā¢ BOKEP7", rowId: ".bokep7"},
        {title: "š ā¢ BOKEP8", rowId: ".bokep8"},
        {title: "š ā¢ BOKEP9", rowId: ".bokep9"},
        {title: "š ā¢ BOKEP10", rowId: ".bokep10"},
        {title: "š ā¢ BOKEP11", rowId: ".bokep11"},
        {title: "š ā¢ BOKEP12", rowId: ".bokep12"},
        {title: "š ā¢ BOKEP13", rowId: ".bokep13"},
        {title: "š ā¢ BOKEP14", rowId: ".bokep14"},
        {title: "š ā¢ BOKEP15", rowId: ".bokep15"},       
        {title: "š ā¢ BOKEP16", rowId: ".bokep16"},
        {title: "š ā¢ BOKEP17", rowId: ".bokep17"},    
        {title: "š ā¢ BOKEP18", rowId: ".bokep18"},
      	{title: "š ā¢ BOKEP19", rowId: ".bokep19"},
        {title: "š ā¢ BOKEP20", rowId: ".bokep20"},
        {title: "š ā¢ BOKEP21", rowId: ".game21"},   
        {title: "š ā¢ BOKEP22", rowId: ".bokep22"},
        {title: "š ā¢ BOKEP23", rowId: ".bokep23"},
        {title: "š ā¢ BOKEP24", rowId: ".bokep24"},       
        {title: "š ā¢ BOKEP25", rowId: ".bokep25"},
        {title: "š ā¢ BOKEP26", rowId: ".bokep26"},    
        {title: "š ā¢ BOKEP27", rowId: ".bokep27"},
      	{title: "š ā¢ BOKEP28", rowId: ".bokep28"},
        {title: "š ā¢ BOKEP29", rowId: ".bokep29"},
        {title: "š ā¢ BOKEP30", rowId: ".bokep30"},       
]},
]

const listMessage = {
  text: info,
  footer:  `Hai kak ${name}\nā : ${wibb}\nš : ${week} ${date}`,
  title: 'ā¬ āāāā¢āØ *LISTBOKEP* ā©ā£āāā ā¬',
  buttonText: "Click Here!",
  sections
}

let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  
  case 'sewabottt': 
  let teks = `*${htki} ${command.toUpperCase()} ${htka}*\nš® : ${text}\n*- @${m.sender.split`@`[0]}*`
conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
   /* m.reply('āļø Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')*/
  break
  
  default:
  if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
  throw false
  }
   m.reply('āļø Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')
}

handler.help = ['bokepmenu',]
handler.tags = ['premium' ]
handler.command = /^(bokepmenu|menubokep)$/i
handler.register = true
handler.botAdmin = true
export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? š„±"
  if (time >= 4) {
    res = "Pagi Lord š"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak āļø"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak š"
  }
  if (time >= 18) {
    res = "Malam Kak š"
  }
  return res
}
