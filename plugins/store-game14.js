let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 6.000'
let ff2 = 'Rp 11.000'
let ff3 = 'Rp 20.000'
let ff4 = 'Rp 50.000'
let ff5 = 'Rp 99.000'

let info = `
     ✨PAYMENT✨
*💦DANA : 085212649276*
*💦OVO  : 081386943282*
*💦QRIS : (TANYA ADMIN)*

     *(🎮KABUL STORE)*
   









`
const sections = [
   {
	
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
