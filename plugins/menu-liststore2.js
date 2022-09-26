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
let name = conn.getName(m.sender
let handler = async (m, { conn }) => {
	//-----PRICE
let info = `
Yuk Cek List Store Kami👑`
const sections = [
   {
    title: `${htjava} ----👑KABUL STORE || READY👑-––––·•`,
    rows: [	
        {title: "💎 • Top Up FREE FIRE", rowId: ".game1"},
        {title: "💎 • Top Up DOMINO QIU QIU", rowId: ".game2"},
        {title: "💎 • Top Up ARENA OF VALOR(AOV)", rowId: ".game3"},
        {title: "💎 • Top Up POKER TEXAS", rowId: ".game4"},
        {title: "💎 • Top Up POINT BLANK ZEPETTO", rowId: ".game5"},
        {title: "💎 • Top Up BIG ZENY RAGNAROK", rowId: ".game6"},
        {title: "💎 • Top Up MOBILE LEGEND", rowId: ".game7"},
        {title: "💎 • Top Up CALL OF DUTY", rowId: ".game8"},
        {title: "💎 • Top Up MOBILE PUBG", rowId: ".game9"},
        {title: "💎 • Top Up CHIP DOMINO", rowId: ".game10"},
        {title: "💎 • Top Up BIG CAT COIN RAGNAROK", rowId: ".game11"},
        {title: "💎 • Top Up CANDY SAUSAGE MAN", rowId: ".game12"},
        {title: "📱 • KOUTA AXIS 3-5 HARI", rowId: ".game13"},
        {title: "📱 • KOUTA AXIS 15 HARI", rowId: ".game14"},       
        {title: "📱 • KOUTA AXIS 7 HARI", rowId: ".game15"},
        {title: "📱 • KOUTA AXIS BRONET 30 HARI", rowId: ".game16"},    
        {title: "📱 • KOUTA AXIS WEST CANNEL", rowId: ".game17"},
	{title: "📱 • KOUTA INDOSAT PURE MINI", rowId: ".game18"},
        {title: "📱 • PULSA INDOSAT ", rowId: ".game19"},
        {title: "📱 • PULSA AXIS", rowId: ".game20"},    
        {title: "📱 • PULSA TRI", rowId: ".game21"},
        {title: "📱 • PULSA TELKOMSEL  ", rowId: ".game22"},
        {title: "💲 •  PAYMENT", rowId: ".game23"},
        {title: "🎮 • FORMAT SEMUA TOP UP GAME  ", rowId: ".game24"},
       ]
    },
]
const listMessage = {
    text: info,
    footer:  `Hᴀʟʟᴏ ${name}\n📆 : ${week} ${weton} ${date}\n⌚: ${wibb},
    title: '⬒ ───⟢⟨ *Mʏ Lɪsᴛ Sᴛᴏʀᴇ* ⟩⟣─── ⬒',
    mentions: await conn.parseMention(info),
    
    
  }
  await conn.sendMessage(m.chat, listMessage)
  //conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
  }
   handler.help = ['liststore'] 
  handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(kabul)$/i

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
   
