let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 2.000'
let ff2 = 'Rp 4.000'
let ff3 = 'Rp 5.000'
let ff4 = 'Rp 6.000'
let ff5 = 'Rp 7.000'
let ff6 = 'Rp 12.000'
let ff7 = 'Rp 18.000'
let ff8 = 'Rp 22.000'
let ff9 = 'Rp 27.000'
let ff10 = 'Rp 32.000'
let ff11 = 'Rp 42.000'
let ff12 = 'Rp 52.000'
let ff13 = 'Rp 77.000'
let ff14 = 'Rp 102.000'
let ff15 = 'Rp 152.000'
let ff16 = 'Rp 202.000'
 let info = `
*β¨PRICELIST PULSA TRIβ¨*
*π±1.000:*  ${ff1}
*π±2.000:*  ${ff2}
*π±3.000:*  ${ff3}
*π±4.000:*  ${ff4}
*π±5.000:*  ${ff5}
*π±10.000:* ${ff6}
*π±15.000:* ${ff7}
*π±20.000:* ${ff8}
*π±25.000:* ${ff9}
*π±30.000:* ${ff10}
*π±40.000:* ${ff11}
*π±50.000:* ${ff12}
*π±75.000:* ${ff13}
*π±100.000:* ${ff14}
*π±150.000:* ${ff15}
*π±200.000:* ${ff16}

*πKABUL STORE || READYπ*
`
const sections = [
   {
	title: `${htjava} List Store β¦-------`,
	rows: [
	    {title: "π±1.000 pulsa", rowId: '.order *Top Up:* 1.000 pulsa β’ PULSA TRI', description: 'PRICE: ' + ff1 + ', PULSA TRI' },
        {title: "π±2.000 pulsa", rowId: '.order *Top Up:* 2.000 pulsa β’ PULSA TRI', description: 'PRICE: ' + ff2 + ', PULSA TRI' },
        {title: "π±3.000 pulsa", rowId: '.order *Top Up:* 3.000 pulsa β’ PULSA TRI', description: 'PRICE: ' + ff3 + ', PULSA TRI' },
        {title: "π± 4.000 pulsa", rowId: '.order *Top Up:* 4.000 pulsa β’ PULSA TRI', description: 'PRICE: ' + ff4 + ', PULSA TRI' },
        {title: "π± 5.000 pulsa", rowId: '.order *Top Up:* 5.000 pulsa β’ PULSA TRI', description: 'PRICE: ' + ff5 + ', PULSA TRI' },
        {title: "π± 10.000 pulsa ", rowId: '.order *Top Up:* 10.000 pulsa β’ PULSA TRI', description: 'PRICE: ' + ff6 + ', PULSA TRI' },
        {title: "π± 15.000  pulsa", rowId: '.order *Top Up:* 15.000 pulsa β’ PULSA TRI', description: 'PRICE: ' + ff7 + ', PULSA TRI' },
        {title: "π± 20.000 pulsa", rowId: '.order *Top Up:* 20.000 pulsa β’ PULSA TRI', description: 'PRICE: ' + ff8 + ', PULSA TRI' },
        {title: "π± 25.000 pulsa", rowId: '.order *Top Up:* 25.000 pulsa β’ PULSA TRI', description: 'PRICE: ' + ff9 + ', PULSA TRI' },
        {title: "π± 30.000 pulsa", rowId: '.order *Top Up:* 30.000 pulsa  β’ PULSA TRI', description: 'PRICE: ' + ff10 + ', PULSA TRI ' },
        {title: "π± 40.000 pulsa", rowId: '.order *Top Up:* 40.000 pulsa β’ PULSA TRI', description: 'PRICE: ' + ff11 + ', PULSA TRI' },
        {title: "π± 50.000 pulsa", rowId: '.order *Top Up:* 50.000 pulsa β’ PULSA TRI', description: 'PRICE: ' + ff12 + ', PULSA TRI' },
        {title: "π±75.00 pulsa", rowId: '.order *Top Up:* 75.000 pulsa β’ PULSA TRI', description: 'PRICE: ' + ff13 + ', PULSA TRI' },
        {title: "π±100.000 pulsa", rowId: '.order *Top Up:* 100.000 pulsa β’ PULSA TRI', description: 'PRICE: ' + ff14 + ', PULSA TRI' },
        {title: "π±150.000 pulsa", rowId: '.order *Top Up:* 150.000 pulsa β’ PULSA TRI', description: 'PRICE: ' + ff15 + ', PULSA TRI' },
        {title: "π± 200.000 pulsa", rowId: '.order *Top Up:* 200.000 pulsa β’ PULSA TRI', description: 'PRICE: ' + ff16 + ', PULSA TRI' },
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
handler.help = ['game21']
handler.command = /^(game21)$/i
export default handler
