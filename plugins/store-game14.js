let handler = async (m, { conn }) => {

	//-----PRICElet ff1 = 'Rp 6.000'

let ff2 = 'Rp payment'

let ff3 = 'Rp payment'

let ff4 = 'Rp payment'

let ff5 = 'Rp payment'

let info = `

✨PRICELIST DOMINO QIU QIU✨

*💦DANA : 085212649276*  ${ff1}
*💦OVO  : 081386943282*  ${ff2}
*💦QRIS : (TANYA ADMIN)* ${ff3}
*💦08xx : xx*   ${ff4}
*💦08xx : xx*   ${ff5}
    *🎮KABUL STORE*









 





`

const sections = [

   {

	title: `${htjava} List Store ✦-------`,

	rows: [

	    {title: "payment dana", rowId: '.order *Top Up:* payment dana • DANA', description: 'PRICE: ' + ff1 + ', payment dana' },

        {title: "payment ovo", rowId: '.order *Top Up:* payment ovo •  OVO', description: 'PRICE: ' + ff2 + ', payment ovo' },

        {title: "payment qris", rowId: '.order *Top Up:* payment qris • QRIS', description: 'PRICE: ' + ff3 + ', paymet ovo' },

        {title: "08xx", rowId: '.order *Top Up:* 08xx• 08xx', description: 'PRICE: ' + ff4 + ', 08xx'},
	' },

        {title: "08xx", rowId: '.order *Top Up:* 08xx• 08xx', description: 'PRICE: ' + ff5 + ', 08xx' },

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

handler.help = ['game2']

handler.command = /^(game2)$/i

export default handler





      



     















   
  



   











  


