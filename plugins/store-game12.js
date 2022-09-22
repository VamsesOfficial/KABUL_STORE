let handler = async (m, { conn }) => {

        //-----PRICE

let ff1 = 'Rp 14.000'

let ff2 = 'Rp 43.000'

let ff3 = 'Rp 70.000'

let ff4 = 'Rp 135.000'

let ff5 = 'Rp 270.000'
let ff6 = `Rp 406.000

let info = `

✨PRICELIST CANDY SAUSAGE MAN ✨
*60🍬 Rp 14.000*
*180🍬 Rp 43.000*
*300+16🍬 Rp 70.000*
*680+38🍬 Rp 135.000*
*1280+88🍬 Rp 270.000*
*1980+138🍬 Rp 406.000*
 
*>VIA ID*
*>PROSES 1 - 5 MENIT* 
*>TANYAKAN STOCK SEBELUM ORDER*
 

 





 
`
const sections = [

   {

        title: `${htjava} List Store ✦-------`,

        rows: [

	{title: "60 Candy", rowId: '.order *Top Up:* 1M Koin • DOMINO QIU QIU', description: 'PRICE: ' + ff1 + ', 1M Koin DOMINO QIU QIU' },

	{title: "180 Candy", rowId: '.order *Top Up:* 60M Koin • DOMINO QIU QIU', description: 'PRICE: ' + ff2 + ', 60M Koin DOMINO QIU QIU' },

        {title: "300+16 Candy", rowId: '.order *Top Up:* 200M Koin • DOMINO QIU QIU', description: 'PRICE: ' + ff3 + ', 200M Koin DOMINO QIU QIU' },

        {title: "680+38 Candy", rowId: '.order *Top Up:* 400M Koin • DOMINO QIU QIU', description: 'PRICE: ' + ff4 + ', 400M Koin DOMINO QIU QIU' },

        {title: "1280+88 Koin", rowId: '.order *Top Up:* 1B Koin • DOMINO QIU QIU', description: 'PRICE: ' + ff5 + ', 1B Koin DOMINO QIU QIU' }, 

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
 
















	
		

	
  






  

  

  

  

  

  











	


