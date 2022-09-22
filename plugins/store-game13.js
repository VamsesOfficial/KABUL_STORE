let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 4.000'
let ff2 = 'Rp 7.000'
let ff3 = 'Rp 7.000'
let ff4 = 'Rp 9.000'
let ff5 = 'Rp 10.000'
let ff6 = 'Rp 11.000'
let ff7 = 'Rp 13.000'
let ff8 = 'Rp 15.00'
let ff9 = 'Rp 19.000'
let ff10 = 'Rp 20.000'
let ff11 = 'Rp 24.000'
 


let info = `
✨PRICELIST KOUTA AXIS 3-5 HARI✨
*📱1GB 1 HARI Rp :  4.000*
*📱500MB 3 HARI Rp : 7.000*
*📱5GB (malam)5 HARI Rp : 7.000*
*📱1,5GB 3 HARI Rp : 9.000*
*📱1,5GB 5 HARI  Rp : 10.000*
*📱1,5GB 5 HARI  Rp : 11.000*
*📱1,5GB 5 HARI  Rp : 13.000*
*📱2GB 5 HARI  Rp : 15.000*
*📱5GB 3 HARI  Rp : 19.000*
*📱4GB 5 HARI  Rp : 20.000*
*📱7GB 5 HARI  Rp : 24.000*

      🎮KABUL STORE


`
const sections = [
   {
	title: `${htjava} List Store ✦-------`,
	rows: [
	    {title: "💎 1GB KOUTA", rowId: '.order *Top Up:* 1GB KOUTA • KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff1 + ', KOUTA AXIS 3-5 HARI' },
        {title: "💎 500MB KOUTA", rowId: '.order *Top Up:* 500MB KOUTA • KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff2 + ', KOUTA AXIS 3-5 HARI' },
        {title: "💎 5GB KOUTA", rowId: '.order *Top Up:* 5GB KOUTA • KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff3 + ', KOUTA AXIS 3-5 HARI' },
        {title: "💎 1,5GB KOUTA", rowId: '.order *Top Up:* 1,5GB KOUTA • KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff4 + ', KOUTA AXIS 3-5 HARI' },
        {title: "💎 1,5GB KOUTA", rowId: '.order *Top Up:* 1,5GB • KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff5 + ', KOUTA AXIS 3-5 HARI' },
        {title: "💎 1,5GB KOUTA ", rowId: '.order *Top Up:* 1,5GB KOUTA • KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff6 + ', KOUTA AXIS 3-5 HARI' },
        {title: "💎 1,5GB KOUTA", rowId: '.order *Top Up:* 1,5GB KOUTA • KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff7 + ', KOUTA AXIS 3-5 HARI' },
        {title: "💎 2GB KOUTA", rowId: '.order *Top Up:* 2GB KOUTA • KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff8 + ', KOUTA AXIS 3-5 HARI' },
        {title: "💎 5GB KOUTA", rowId: '.order *Top Up:* 5B KOUTA • KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff9 + ', KOUTA AXIS 3-5 HARI' },
        {title: "💎 4GB KOUTA", rowId: '.order *Top Up:* 4GB KOUTA • KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff10 + ', KOUTA AXIS 3-5 HARI' },
        {title: "💎 7GB KOUTA", rowId: '.order *Top Up:* 7GB KOUTA • KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff11 + ', KOUTA AXIS 3-5 HARI' },
              ]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  mentions: await conn.parseMention(info),
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(info), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['game13']
handler.command = /^(game13)$/i

export default handler
