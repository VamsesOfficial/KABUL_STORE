let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 3.000'
let ff2 = 'Rp 4.000'
let ff3 = 'Rp 5.000'
let ff4 = 'Rp 6.000'
let ff5 = 'Rp 7.000'
let ff6 = 'Rp 8.000'
let ff7 = 'Rp 12.000'
let ff8 = 'Rp 18.000'
let ff9 = 'Rp 22.000'
let ff10 ='Rp 27.000'
let ff11 ='Rp 32.000'
let ff12 ='Rp 37.000'
let ff13 ='Rp 42.000'
let ff14 ='Rp 47.000'
let ff15 ='Rp 52.000'
let ff16 ='Rp 57.000'
let ff17 ='Rp 62.000'
let ff18 ='Rp 67.000'
let ff19 ='Rp 72.000'
let ff20 ='Rp 77.000'
let ff21= 'Rp 82.000'
let ff22 ='Rp 87.000'
let ff23 ='Rp 92.000'
let ff24 ='Rp 97.000'
let ff25 ='Rp 102.000'
let ff26 ='Rp 152.000'
let ff27 ='Rp 202.000'
let ff28 ='Rp 502.000'
let info = `
*β¨PRICELIST PULSA TELKOMSELβ¨*
*π±1.000:* ${ff1}
*π±2.000:* ${ff2}
*π±3.000:* ${ff3}
*π±4.000:* ${ff4}
*π±5.000:* ${ff5}
*π±6.000:* ${ff6}
*π±10.000:* ${ff7}
*π±15.000:* ${ff8}
*π±20.000:* ${ff9}
*π±25.000:* ${ff10}
*π±30.000:* ${ff11}
*π±35.000:* ${ff12}
*π±40.000:* ${ff13}
*π±45.000:* ${ff14}
*π±50.000:* ${ff15}
*π±55.000:* ${ff16}
*π±60.000:* ${ff17}
*π±65.000:* ${ff18}
*π±70.000:* ${ff19}
*π±75.000:* ${ff20}
*π±80.000:* ${ff21}
*π±85.000:* ${ff22}
*π±90.000:* ${ff23}
*π±95.000:* ${ff24}
*π±100.000:* ${ff25}
*π±150.000:* ${ff26}
*π±200.000:* ${ff27}
*π±500.000:* ${ff28}

*πKABUL STORE || READYπ*
`
const sections = [
   {
	title: `${htjava} List Store β¦-------`,
	rows: [
	      {title: "π±1.000 pulsa", rowId: '.order *Top Up:* 1.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff1 + ', PULSA TELKOMSEL' },
              {title: "π±2.000 pulsa", rowId: '.order *Top Up:* 2.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff2 + ', PULSA TELKOMSEL' },
              {title: "π±3.000 pulsa", rowId: '.order *Top Up:* 3.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff3 + ', PULSA TELKOMSEL' },
              {title: "π± 4.000 pulsa", rowId: '.order *Top Up:* 4.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff4 + ', PULSA TELKOMSEL' },
              {title: "π± 5.000 pulsa", rowId: '.order *Top Up:* 5.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff5 + ', PULSA TELKOMSEL' },
              {title: "π± 6.000 pulsa ", rowId: '.order *Top Up:* 6.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff6 + ', PULSA TELKOMSEL' },
              {title: "π± 10.000 pulsa ", rowId: '.order *Top Up:* 10.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff7 + ', PULSA TELKOMSEL' },
              {title: "π± 15.000  pulsa", rowId: '.order *Top Up:* 15.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff8 + ', PULSA TELKOMSEL' },
              {title: "π± 20.000 pulsa", rowId: '.order *Top Up:* 20.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff9 + ', PULSA TELKOMSEL' },
              {title: "π± 25.000 pulsa", rowId: '.order *Top Up:* 25.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff10 + ', TELKOMSEL' },
              {title: "π± 30.000 pulsa", rowId: '.order *Top Up:* 30.000 pulsa  β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff11 + ', PULSA TELKOMSEL ' },
              {title: "π± 35.000 pulsa", rowId: '.order *Top Up:* 35.000 pulsa  β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff12 + ', PULSA TELKOMSEL ' },
              {title: "π± 40.000 pulsa", rowId: '.order *Top Up:* 40.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff13 + ', PULSA TELKOMSEL' },
              {title: "π± 45.000 pulsa", rowId: '.order *Top Up:* 45.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff14 + ', PULSA TELKOMSEL' },
              {title: "π± 50.000 pulsa", rowId: '.order *Top Up:* 50.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff15 + ', PULSA TELKOMSEL' },
              {title: "π± 55.000 pulsa", rowId: '.order *Top Up:* 55.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff16 + ', PULSA TELKOMSEL' },
              {title: "π±60.00 pulsa", rowId: '.order *Top Up:* 60.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff17 + ', PULSA TELKOMSEL' },
              {title: "π±65.00 pulsa", rowId: '.order *Top Up:* 65.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff18 + ', PULSA TELKOMSEL' },
              {title: "π±70.00 pulsa", rowId: '.order *Top Up:* 70.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff19 + ', PULSA TELKOMSEL' },
              {title: "π±75.000 pulsa", rowId: '.order *Top Up:* 75.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff20 + ', PULSA TELKOMSEL' },
              {title: "π±80.000 pulsa", rowId: '.order *Top Up:* 80.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff21 + ', PULSA TELKOMSEL' },
              {title: "π±85.000 pulsa", rowId: '.order *Top Up:* 85.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff22 + ', PULSA TELKOMSEL' },
              {title: "π±90.000 pulsa", rowId: '.order *Top Up:* 90.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff23 + ', PULSA TELKOMSEL' },
              {title: "π±95.00 pulsa", rowId: '.order *Top Up:* 95.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff24 + ', PULSA TELKOMSEL' },
              {title: "π±100.000 pulsa", rowId: '.order *Top Up:* 100.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff25 + ', PULSA TELKOMSEL' },
              {title: "π±150.000 pulsa", rowId: '.order *Top Up:* 150.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff26 + ', PULSA TELKOMSEL' },
              {title: "π± 200.000 pulsa", rowId: '.order *Top Up:* 200.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff27 + ', PULSA TELKOMSEL' },
              {title: "π±500.00 pulsa", rowId: '.order *Top Up:* 500.000 pulsa β’ PULSA TELKOMSEL', description: 'PRICE: ' + ff28 + ', PULSA TELKOMSEL' },
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
handler.help = ['game22']
handler.command = /^(game22)$/i
export default handler
