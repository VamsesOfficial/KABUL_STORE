let handler = async (m, { conn }) => {
        //-----PRICE
let ff1 = 'Rp 14.000'
let ff2 = 'Rp 43.000'
let ff3 = 'Rp 70.000'
let ff4 = 'Rp 135.000'
let ff5 = 'Rp 270.000'
let ff6 = 'Rp 406.000

let info = `
✨PRICELIST CANDY SAUSAGE MAN ✨
	
┏━━❏PRICE LIST

┃CANDY SAUSAGE MAN

┗━━━━━━━━━━━━❏

60        Rp 14.000  🪙${ff1}  

180       Rp 43.000  🪙${ff1}

300+16    Rp 70.000  🪙${ff1}

680+38    Rp 135.000 🪙${ff1}

1280+88   Rp 270.000 🪙${ff1}

1980+138  Rp 406.000 🪙${ff1}
	

	

	

	

	

	

	

	
 
*>VIA ID*
*>PROSES 1 - 5 MENIT*
*>TANYAKAN STOCK SEBELUM ORDER*  ` <- itu kesalahan lu kurang `

const sections = [
   {
        title: `${htjava} List Store ✦-------`,
        rows: [
	{title: "1M Koin", rowId: '.order *Top Up:* 1M Koin • CANDY SAUSAGE MAN', description: 'PRICE: ' + ff1 + ', 1M Koin CANDY SAUSAGE MAN' },
	{title: "60M Koin", rowId: '.order *Top Up:* 60M Koin • CANDY SAUSAGE MAN', description: 'PRICE: ' + ff2 + ', 60M Koin CANDY SAUSAGE MAN' },
        {title: "200M Koin", rowId: '.order *Top Up:* 200M Koin • CANDY SAUSAGE MAN', description: 'PRICE: ' + ff3 + ', 200M Koin CANDY SAUSAGE MAN' },
        {title: "400M Koin", rowId: '.order *Top Up:* 400M Koin • CANDY SAUSAGE MAN', description: 'PRICE: ' + ff4 + ', 400M Koin CANDY SAUSAGE MAN' },
        {title: "1B Koin", rowId: '.order *Top Up:* 1B Koin • CANDY SAUSAGE MAN', description: 'PRICE: ' + ff5 + ', 1B Koin CANDY SAUSAGE MAN' },
	{title: "1B Koin", rowId: '.order *Top Up:* 1B Koin • CANDY SAUSAGE MAN', description: 'PRICE: ' + ff5 + ', 1B Koin CANDY SAUSAGE MAN' },
	
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

handler.help = ['game10']
handler.command = /^(game10)$/i
	
export default handler
