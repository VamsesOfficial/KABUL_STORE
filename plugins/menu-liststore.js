let handler = async (m, { conn }) => {
	//-----PRICE
let info = `
Yuk Cek List Store Kami 🌟`
const sections = [
   {
    title: `${htjava} 👑KABUL STORE/READY STOCK👑 –––––––––·•`,
    rows: [
	{title: "💲 •  PAYMENT", rowId: ".game23"},
        {title: "💎 • Top Up FREE FIRE", rowId: ".game1"},
        {title: "💎 • Top Up DOMINO QIU QIU", rowId: ".game2"},
        {title: "💎 • Top Up ARENA OF VALOR(AOV)", rowId: ".game3"},
        {title: "💎 • Top Up POKER TEXAS", rowId: ".game4"},
        {title: "💎 • Top Up POINT BLANK ZEPETTO", rowId: ".game5"},
        {title: "💎 • Top Up BIG ZENY RAGNAROK", rowId: ".game6"},
        {title: "💎 • Top Up MOBILE LEGEND", rowId: ".game7"},
        {title: "💎 • Top Up CALL OF DUTY", rowId: ".game8"},
        {title: "💎 • Top Up MOBILE PUBG", rowId: ".game9"},
        {title: "💎 • Top Up CHIP DOMINO", rowId: ".game10"},
        {title: "💎 • Top Up BIG CAT COIN RAGNAROK", rowId: ".game11"},
        {title: "💎 • Top Up CANDY SAUSAGE MAN", rowId: ".game12"},
        {title: "📱 • KOUTA AXIS 3-5 HARI", rowId: ".game13"},
        {title: "📱 • KOUTA AXIS 15 HARI", rowId: ".game14"},       
        {title: "📱 • KOUTA AXIS 7 HARI", rowId: ".game15"},
        {title: "📱 • KOUTA AXIS BRONET 30 HARI", rowId: ".game16"},    
        {title: "📱 • KOUTA AXIS WEST CANNEL", rowId: ".game17"},
	{title: "📱 • KOUTA INDOSAT PURE MINI", rowId: ".game18"},
        {title: "📱 • PULSA INDOSAT ", rowId: ".game19"},
        {title: "📱 • PULSA AXIS", rowId: ".game20"},    
        {title: "📱 • PULSA TRI", rowId: ".game21"},
        {title: "📱 • PULSA TELKOMSEL  ", rowId: ".game22"},
        {title: "🎮 • FORMAT SEMUA TOP UP GAME  ", rowId: ".game24"},
            
        
        
	
        
        
	
        
	    
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
