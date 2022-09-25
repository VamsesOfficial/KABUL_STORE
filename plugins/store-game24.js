let handler = async (m, { conn }) => {
        //-----PRICE
let ff1 = 
let ff2 = 
let ff3 = 
	let info = `
*┏━━❏FORMAT PEMBELIAN TOP UP GAME*
*┃FORMAT SEMUA TOP UP GAME*
*┗━━━━━━━━━━━━❏*
*GAME:*
*ID GAME:*
*ID SERVER:* 
*JUMLAH:*
*PAYMENT:*

*>jika salah id bukan tanggung jawab admin dan tidak ada pengembalian saldo*

*>ISI FORMAT* 
*>SELESAIKAN PEMBAYARAN* & *KIRIM BUKTI TRANSFER*
*>PESANAN DI PROSES*

*👑KABUL STORE || READY👑* `
const sections = [
   {
       {title: "payment dana", rowId: '.order *Top Up:* payment dana • DANA', description: 'PRICE: ' + ff1 + ', payment dana' },

       {title: "payment ovo", rowId: '.order *Top Up:* payment ovo •  OVO', description: 'PRICE: ' + ff2 + ', payment ovo' },

       {title: "payment qris", rowId: '.order *Top Up:* payment qris • QRIS', description: 'PRICE: ' + ff3 + ', paymet qris' },

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
handler.help = ['game24']
handler.command = /^(game24)$/i
	export default handler
