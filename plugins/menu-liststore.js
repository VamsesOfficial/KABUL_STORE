let handler = async (m, { conn }) => {
	//-----PRICE
let info = `
Yuk Cek List Store Kami 🌟`
const sections = [
   {
    title: `${htjava} 👑KABUL STORE/READY STOK👑–––––––––·•`,
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
        {title: "💎 • Top Up CHIP DOMINO", rowId: ".game10"},
        {title: "💎 • Top Up BIG CAT COIN RAGNAROK", rowId: ".game11"},
        {title: "💎 • Top Up CANDY SAUSAGE MAN", rowId: ".game12"},
        {title: "📱 • KOUTA AXIS 3-5 HARI", rowId: ".game13"},
        {title: "📱 • KOUTA AXIS 15 HARI", rowId: ".game14"},       
        {title: "📱 • KOUTA AXIS 7 HARI", rowId: ".game15"},
        {title: "📱 • KOUTA AXIS BRONET 30 HARI", rowId: ".game16"},    
        {title: "📱 • KOUTA AXIS WEST CANNEL", rowId: ".game17"},
	{title: "📱 • KOUTA AXIS BRONET 60 HARI", rowId: ".game18"},
        {title: "📱 • KOUTA AXIS OWSEM 30 HARI", rowId: ".game19"},
        {title: "📱 • KOUTA AXIS X-TRA SOSIAL MEDIA", rowId: ".game20"},       
        {title: "📱 • KOUTA AXIS PAKET KZL", rowId: ".game21"},
        {title: "📱 • KOUTA INDOSAT PURE MINI", rowId: ".game22"},
        {title: "📱 • KOUTA INDOSAT YELLOW NASIONAL", rowId: ".game23"},
        {title: "📱 • KOUTA INDOSAT YELLOW GIFT", rowId: ".game24"},    
        {title: "📱 • KOUTA INDOSAT UNLIMITED HARIAN", rowId: ".game25"},
        {title: "📱 • KOUTA INDOSAT FREEDOM U UNLIMITED", rowId: ".game26"},
	{title: "📱 • KOUTA INDOSAT FREEDOM INTERNET", rowId: ".game27"},
        {title: "📱 • PULSA PULSA INDOSAT ", rowId: ".game28"},
        {title: "📱 • PULSA INDOSA", rowId: ".game29"},
	{title: "📱 • PULSA  TRI", rowId: ".game30"},
        {title: "📱 • KOUTA SMARTFREN DATA UNLIMITED ", rowId: ".game31"},            
	
	
	    
  const listMessage = {
    text: info,
    footer: botdate,
    mentions: await conn.parseMention(info),
    title: "👑KABUL STORE/READY STOK👑",
buttonText: "Click Here!",
  sections
  }
	
await conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(info), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}


handler.help = ['liststore']
handler.tags = ['nocategoty']
handler.command = /^(list|store|liststore|storelist)$/i
export default handler




  









      
 

  
	

	

	

	
        
        

  

  
















	

		

        ,       

       

