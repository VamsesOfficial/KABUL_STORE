let handler = async (m, { conn }) => {

	//-----PRICElet ff1 = 'Rp 6.000'

let ff2 = 'paymet'

let ff3 = 'paymet'

let ff4 = 'paymet'



let info = `

      ✨PAYMENT✨
*💦DANA : 085212649276*
*💦OVO  : 081386943282*
*💦QRIS : (TANYA ADMIN)*
    *(🎮KABUL STORE)*



     












`

const sections = [

   {

	title: `${htjava} List Payment ✦-------`,

	rows: [

	    {title: "payment dana", rowId: '.order *Top Up:* payment dana • DANA', description: 'PRICE: ' + ff1 + ', payment DANA' },

        {title: "payment ovo", rowId: '.order *Top Up:* payment • OVO', description: 'PRICE: ' + ff2 + ', Payment OVO' },

        {title: "payment qris", rowId: '.order *Top Up:* payment • QRIS', description: 'PRICE: ' + ff3 + ', payment QRIS },
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


   











  


