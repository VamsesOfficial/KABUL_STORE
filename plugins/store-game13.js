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
β¨PRICELIST KOUTA AXIS 3-5 HARIβ¨
*π±1GB 1 HARI:${ff1}*
*π±500MB 3 HARI:${ff2}*
*π±5GB (malam)5 HARI:${ff3}*
*π±1,5GB 3 HARI:${ff4}*
*π±1,5GB 5 HARI:${ff5}*
*π±1,5GB 5 HARI:${ff6}*
*π±1,5GB 5 HARI:${ff7}*
*π±2GB 5 HARI:${ff8}*
*π±5GB 3 HARI:${ff9}*
*π±4GB 5 HARI:${ff10}*
*π±7GB 5 HARI:${ff11}*

 *πKABUL STORE || READYπ*
`
const sections = [
   {
	title: `${htjava} List Store β¦-------`,
	rows: [
	      {title: "π± 1GB KOUTA", rowId: '.order *Top Up:* 1GB KOUTA β’ KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff1 + ', KOUTA AXIS 3-5 HARI' },
        {title: "π± 500MB KOUTA", rowId: '.order *Top Up:* 500MB KOUTA β’ KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff2 + ', KOUTA AXIS 3-5 HARI' },
        {title: "π± 5GB KOUTA", rowId: '.order *Top Up:* 5GB KOUTA β’ KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff3 + ', KOUTA AXIS 3-5 HARI' },
        {title: "π± 1,5GB KOUTA", rowId: '.order *Top Up:* 1,5GB KOUTA β’ KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff4 + ', KOUTA AXIS 3-5 HARI' },
        {title: "π± 1,5GB KOUTA", rowId: '.order *Top Up:* 1,5GB β’ KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff5 + ', KOUTA AXIS 3-5 HARI' },
        {title: "π± 1,5GB KOUTA ", rowId: '.order *Top Up:* 1,5GB KOUTA β’ KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff6 + ', KOUTA AXIS 3-5 HARI' },
        {title: "π± 1,5GB KOUTA", rowId: '.order *Top Up:* 1,5GB KOUTA β’ KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff7 + ', KOUTA AXIS 3-5 HARI' },
        {title: "π± 2GB KOUTA", rowId: '.order *Top Up:* 2GB KOUTA β’ KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff8 + ', KOUTA AXIS 3-5 HARI' },
        {title: "π± 5GB KOUTA", rowId: '.order *Top Up:* 5B KOUTA β’ KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff9 + ', KOUTA AXIS 3-5 HARI' },
        {title: "π± 4GB KOUTA", rowId: '.order *Top Up:* 4GB KOUTA β’ KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff10 + ', KOUTA AXIS 3-5 HARI' },
        {title: "π± 7GB KOUTA", rowId: '.order *Top Up:* 7GB KOUTA β’ KOUTA AXIS 3-5 HARI', description: 'PRICE: ' + ff11 + ', KOUTA AXIS 3-5 HARI' },
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
//conn.sendHydrated(m.chat, info, wm, null, sgc, "π Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['game13']
handler.command = /^(game13)$/i
export default handler
