let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 7.000'
let ff2 = 'Rp 12.000'
let ff3 = 'Rp 18.000'
let ff4 = 'Rp 12.000'
let ff5 = 'Rp 27.000'
let ff6 = 'Rp 32.000'
let ff7 = 'Rp 42.000'
let ff8 = 'Rp 52.000'
let ff9 = 'Rp 102.000'
let ff10 = 'Rp 152.000'
let ff11 = 'Rp 202.000'
let info = `
*β¨PRICELIST PULSA AXISβ¨*
*π±5.000:* ${ff1}
*π±10.000:* ${ff2}
*π±15.000:* ${ff3}
*π±20.000:* ${ff4}
*π±25.000:* ${ff5}
*π±30.000:* ${ff6}
*π±40.000:* ${ff7}
*π±50.000:* ${ff8}
*π±100.000:* ${ff9}
*π±150.000:* ${ff10}
*π±200.000:* ${ff11}

*πKABUL STORE || READYπ
`
const sections = [
   {
	title: `${htjava} List Store β¦-------`,
	rows: [
	    {title: "π±5.000 pulsa", rowId: '.order *Top Up:* 5.000 pulsa β’ PULSA INDOSAT', description: 'PRICE: ' + ff1 + ', PULSA AXIS' },
        {title: "π±10.000 pulsa", rowId: '.order *Top Up:* 10.000 pulsa β’ PULSA INDOSAT', description: 'PRICE: ' + ff2 + ', PULSA AXIS' },
        {title: "π± 15.000 pulsa", rowId: '.order *Top Up:* 15.000 pulsa β’ PULSA AXIS', description: 'PRICE: ' + ff3 + ', PULSA AXIS' },
        {title: "π± 20.000 pulsa", rowId: '.order *Top Up:* 20.000 pulsa β’ PULSA AXIS', description: 'PRICE: ' + ff4 + ', PULSA AXIS' },
        {title: "π± 25.000 pulsa ", rowId: '.order *Top Up:* 25.000 pulsa β’ PULSA AXIS', description: 'PRICE: ' + ff5 + ', PULSA AXIS' },
        {title: "π± 30.000  pulsa", rowId: '.order *Top Up:* 30.000 pulsa β’ PULSA AXIS', description: 'PRICE: ' + ff6 + ', PULSA AXIS' },
        {title: "π± 40.000 pulsa", rowId: '.order *Top Up:* 40.000 pulsa β’ PULSA AXIS', description: 'PRICE: ' + ff7 + ', PULSA AXIS' },
        {title: "π± 50.000 pulsa", rowId: '.order *Top Up:* 50.000 pulsa β’ PULSA AXIS', description: 'PRICE: ' + ff8 + ', PULSA AXIS' },
        {title: "π± 100.000 pulsa", rowId: '.order *Top Up:* 100.000 pulsa  β’ PULSA AXIS', description: 'PRICE: ' + ff9 + ', PULSA AXIS ' },
        {title: "π± 150.000 pulsa", rowId: '.order *Top Up:* 150.000 pulsa β’ PULSA AXIS', description: 'PRICE: ' + ff10 + ', PULSA AXIS' },
        {title: "π± 200.000 pulsa", rowId: '.order *Top Up:* 200.000 pulsa β’ PULSA AXIS', description: 'PRICE: ' + ff11 + ', PULSA AXIS' },
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
handler.help = ['game20']
handler.command = /^(game20)$/i
export default handler
