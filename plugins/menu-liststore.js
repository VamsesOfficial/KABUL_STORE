let handler = async (m, { conn }) => {
	//-----PRICE
let info = `
Yuk Cek List Store Kami 🌟`
const sections = [
   {
    title: `${htjava} 👑KABUL STORE/READY STOCK👑 –––––––––·•`,
    rows: [
	{title: "💲 •  PAYMENT", rowId: ".game1"},
        {title: "💎 • Top Up FREE FIRE", rowId: ".game2"},
        {title: "💎 • Top Up DOMINO QIU QIU", rowId: ".game3"},
        {title: "💎 • Top Up ARENA OF VALOR(AOV)", rowId: ".game4"},
        {title: "💎 • Top Up POKER TEXAS", rowId: ".game5"},
        {title: "💎 • Top Up POINT BLANK ZEPETTO", rowId: ".game6"},
        {title: "💎 • Top Up BIG ZENY RAGNAROK", rowId: ".game7"},
        {title: "💎 • Top Up MOBILE LEGEND", rowId: ".game8"},
        {title: "💎 • Top Up CALL OF DUTY", rowId: ".game9"},
        {title: "💎 • Top Up MOBILE PUBG", rowId: ".game10"},
        {title: "💎 • Top Up CHIP DOMINO", rowId: ".game11"},
        {title: "💎 • Top Up BIG CAT COIN RAGNAROK", rowId: ".game12"},
        {title: "💎 • Top Up CANDY SAUSAGE MAN", rowId: ".game13"},
        {title: "📱 • KOUTA AXIS 3-5 HARI", rowId: ".game14"},
        {title: "📱 • KOUTA AXIS 15 HARI", rowId: ".game15"},       
        {title: "📱 • KOUTA AXIS 7 HARI", rowId: ".game16"},
        {title: "📱 • KOUTA AXIS BRONET 30 HARI", rowId: ".game17"},    
        {title: "📱 • KOUTA AXIS WEST CANNEL", rowId: ".game18"},
	{title: "📱 • KOUTA AXIS BRONET 60 HARI", rowId: ".game19"},
        {title: "📱 • KOUTA AXIS OWSEM 30 HARI", rowId: ".game20"},
        {title: "📱 • KOUTA AXIS X-TRA SOSIAL MEDIA", rowId: ".game21"},       
        {title: "📱 • KOUTA AXIS PAKET KZL", rowId: ".game22"},
        {title: "📱 • KOUTA INDOSAT PURE MINI", rowId: ".game23"},
        {title: "📱 • KOUTA INDOSAT YELLOW NASIONAL", rowId: ".game24"},
        {title: "📱 • KOUTA INDOSAT YELLOW GIFT", rowId: ".game25"},    
        {title: "📱 • KOUTA INDOSAT UNLIMITED HARIAN", rowId: ".game26"},
        {title: "📱 • KOUTA INDOSAT FREEDOM U UNLIMITED", rowId: ".game27"},
	{title: "📱 • KOUTA INDOSAT FREEDOM INTERNET", rowId: ".game28"},
        {title: "📱 • PULSA INDOSAT ", rowId: ".game29"},
        {title: "📱 • PULSA AXIS", rowId: ".game30"},
	{title: "📱 • PULSA TRI", rowId: ".game31"},
        {title: "📱 • PULSA TELKOMSEL  ", rowId: ".game32"},
	    
      ]
    },
]

const listMessage = {
    text: info,
    footer: botdate,
    mentions: await conn.parseMention(info),
    title: "👑KABUL STORE/READY STOCK👑",
    buttonText: "Click Here!",
    sections
  }
  await conn.sendMessage(m.chat, listMessage)
  //conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
  }
  
  handler.help = ['liststore']
  handler.tags = ['nocategoty']
  handler.command = /^(list|store|liststore|storelist)$/i
  
  export default handler
