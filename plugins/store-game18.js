let handler = async (m, { conn }) => {
       //-----PRICE
let ff1 = 'Rp 1.000'
let ff2 = 'Rp 2.000'
let ff3 = 'Rp 3.000'
let ff4 = 'Rp 3.300'
let ff5 = 'Rp 4.000'
let ff6 = 'Rp 5.000'
let ff7 = 'Rp 6.000'
let ff8 = 'Rp 6.200'
let ff9 = 'Rp 7.000'
let ff10 = 'Rp 7.500'
let ff11 = 'Rp 9.000'
let ff12 = 'Rp 13.000'
let ff13 = 'Rp 17.000'
let ff14 = 'Rp 21.000'
let ff15 = 'Rp 25.000'
let ff16 = 'Rp 33.000'
let ff17 = 'Rp 41.000'
let ff18 = 'Rp 49.000'
let ff19 = 'Rp 57.000'
let ff20 = 'Rp 65.000'
let ff21 = 'Rp 72.000'
let ff22 = 'Rp 80.000'
let info = `
β¨PRICELIST KOUTA INDOSAT PURE MINIβ¨
*π±100MB 30 Hari :* ${ff1}
*π±200MB 30 Hari :* ${ff2}
*π±250MB 30 Hari :* ${ff3}
*π±300MB 30 Hari :* ${ff4}
*π±400MB 30 Hari :* ${ff5}
*π±500MB 30 Hari :* ${ff6}
*π±600MB 30 Hari :* ${ff7}
*π±700MB 30 Hari :* ${ff8}
*π±750MB 30 Hari :* ${ff9}
*π±800MB 30 Hari :* ${ff10}
*π±1GB 30  Hari  :* ${ff11}
*π±1,5GB 30 Hari :* ${ff12}
*π±2GB 30 Hari   :* ${ff13}
*π±2,5GB 30 Hari :* ${ff14}
*π±3GB 30 Hari   :* ${ff15}
*π±4GB 30 Hari   :* ${ff16}
*π±5GB 30 Hari   :* ${ff17}
*π±6GB 30 Hari   :* ${ff18}
*π±7GB 30 Hari   :* ${ff19}
*π±8GB 30 Hari   :* ${ff20}
*π±9GB 30 Hari   :* ${ff21}
*π±10GB 30 Hari  :* ${ff22}

*πKABUL STORE || READYπ* `
const sections = [
   {
          title: `${htjava} List Store β¦-------`,
         rows: [
        {title: "100MB KOUTA", rowId: '.order *Top Up:* 100MB KOUTA β’  KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff1 + ', 100MB KOUTA KOUTA INDOSAT PURE MINI' },
	{title: "200MB KOUTA", rowId: '.order *Top Up:* 200MB KOUTA β’  KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff2 + ', 200MB KOUTA KOUTA INDOSAT PURE MINI' },
        {title: "250MB KOUTA", rowId: '.order *Top Up:* 250MB KOUTA β’ KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff3 + ', 250MB KOUTA INDOSAT PURE MINI' },
        {title: "300MB KOUTA", rowId: '.order *Top Up:* 300MB KOUTA β’  KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff4 + ', 300MB KOUTA KOUTA INDOSAT PURE MINI' },
	{title: "400MB KOUTA", rowId: '.order *Top Up:* 400MB KOUTA β’ KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff5 + ', 400MB KOUTA KOUTA INDOSAT PURE MINI' },
        {title: "500MB KOUTA", rowId: '.order *Top Up:* 500MB KOUTA β’  KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff6 + ', 500MB KOUTA KOUTA INDOSAT PURE MINI' },
        {title: "600MB KOUTA", rowId: '.order *Top Up:* 600MB KOUTA β’ KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff7 + ', 600MB KOUTA KOUTA INDOSAT PURE MINI' },
	{title: "700MB KOUTA", rowId: '.order *Top Up:* 700MB KOUTA β’  KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff8 + ', 700MB KOUTA KOUTA INDOSAT PURE MINI' },
        {title: "750MB KOUTA", rowId: '.order *Top Up:* 750MB KOUTA β’ KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff9 + ', 750MB KOUTA KOUTA INDOSAT PURE MINI' },
        {title: "800MB KOUTA", rowId: '.order *Top Up:* 800MB KOUTA β’ KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff10 + ', 800MB KOUTA KOUTA INDOSAT PURE MINI' },
	{title: "1GB KOUTA", rowId: '.order *Top Up:* 1GB KOUTA β’ KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff11 + ', 1GB KOUTA KOUTA INDOSAT PURE MINI' },
        {title: "1,5GB KOUTA", rowId: '.order *Top Up:* 1,5GB KOUTA β’ KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff12 + ', 1,5GB KOUTA KOUTA INDOSAT PURE MINI' },
	{title: "2GB KOUTA", rowId: '.order *Top Up:* 2GB KOUTA β’  KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff13 + ', 2GB KOUTA KOUTA INDOSAT PURE MINI' },
        {title: "2,5GB KOUTA", rowId: '.order *Top Up:* 2,5GB KOUTA β’ KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff14 + ', 2,5GB KOUTA KOUTA INDOSAT PURE MINI' },
        {title: "3GB KOUTA", rowId: '.order *Top Up:* 3GB KOUTA β’ KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff15 + ', 3GB KOUTA KOUTA INDOSAT PURE MINI' },
	{title: "4GB KOUTA", rowId: '.order *Top Up:* 4GB KOUTA β’ KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff16 + ', 4GB KOUTA KOUTA INDOSAT PURE MINI' },
        {title: "5GB KOUTA", rowId: '.order *Top Up:* 5GB KOUTA β’  KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff17 + ', 5GB KOUTA KOUTA INDOSAT PURE MINI' },
        {title: "6GB KOUTA", rowId: '.order *Top Up:* 6GB KOUTA β’ KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff18 + ', 6GB KOUTA KOUTA INDOSAT PURE MINI' },
        {title: "7GB KOUTA", rowId: '.order *Top Up:* 7GB KOUTA β’ KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff19 + ', 7GB KOUTA KOUTA INDOSAT PURE MINI' },
	{title: "8GB KOUTA", rowId: '.order *Top Up:* 8GB KOUTA β’ KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff20 + ', 8GB KOUTA KOUTA INDOSAT PURE MINI' },
        {title: "9GB KOUTA", rowId: '.order *Top Up:* 9GB KOUTA β’ KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff21 + ', 9GB KOUTA KOUTA INDOSAT PURE MINI' },
	{title: "10GB KOUTA", rowId: '.order *Top Up:* 10GB KOUTA β’ KOUTA INDOSAT PURE MINI', description: 'PRICE: ' + ff22 + ', 10GB KOUTA KOUTA INDOSAT PURE MINI' },
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
handler.help = ['game18']
handler.command = /^(game18)$/i
export default handler
