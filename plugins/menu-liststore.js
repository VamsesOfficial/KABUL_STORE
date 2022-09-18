let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ @${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp`

  let teks = `*${ucapan()} ${conn.getName(m.sender)}*
  
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
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
    {title: "📱 • Nomor", rowId: ".owner nomor"},
	    {title: "💹 • Donasi", rowId: ".donasi"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *LIST STORE TOP UP ALL GAME* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['liststore']
handler.tags = ['nocategoty']
handler.command = /^(list|store|liststore|storelist)/i

export default handler
