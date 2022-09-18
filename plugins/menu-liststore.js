let handler = async (m, { conn }) => {
	//-----PRICE
let info = `
Yuk Cek List Store Kami 🌟`
const sections = [
   {
    title: `${htjava} KABUL STORE M.M💎28K✅ –––––––––·•`,
    rows: [
        {title: "💎 • Top Up FREE FIRE", rowId: ".game1"},
        {title: "💎 • Top Up DOMINO QIU QIU", rowId: ".game2"},
        {title: "💎 • Top Up ARENA OF VALOR(AOV)", rowId: ".game3"},
        {title: "💎 • Top Up POKER TEXAS", rowId: ".game4"},
        {title: "💎 • Top Up POINT BLANK ZEPETTO", rowId: ".game5"},
        {title: "💎 • Top Up BIG ZENY RAGNAROK", rowId: ".game6"},
        {title: "💎 • Top Up MOBILE LEGEND", rowId: ".game7"},
        {title: "💎 • Top Up CALL OF DUTY", rowId: ".game8"},
        {title: "💎 • Top Up MOBILE PUBG", rowId: ".game9"},
    ]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  mentions: await conn.parseMention(info),
  title: "KABUL STORE M.M💎28K✅",
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['liststore']
handler.tags = ['nocategoty']
handler.command = /^(list|store|liststore|storelist)$/i

export default handler
