let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 999'
let ff2 = 'Rp 2.000'
let ff3 = 'Rp 5.000'
let ff4 = 'Rp 6.000'
let ff5 = 'Rp 8.000'
let ff6 = 'Rp 10.000'
let ff7 = 'Rp 11.000'
let ff8 = 'Rp 13.000'
let ff9 = 'Rp 14.679'
let ff10 = 'Rp 18.000'
let ff11 = 'Rp 28.000'
let ff12 = 'Rp 46.995'
let ff13 = 'Rp 65.652'
let ff14 = 'Rp 91.500'
let ff15 = 'Rp 128.968'
let ff16 = 'Rp 180.900'
let ff17 = 'Rp 139.950'
let ff18 = 'Rp 271.502'
let ff19 = 'Rp 562.977'
let ff20 = 'Rp 14.959'
let ff21 = 'Rp 28.000'
let ff22 = 'Rp 83.558'
let info = `
β¨PRICELIST FREE FIREβ¨
5     Diamond   π${ff1}
12    Diamomd   π${ff2}
30    Diamond   π${ff3}
40    Diamond   π${ff4}
50    Diamond   π${ff5}
70    Diamond   π${ff6}
80    Diamond   π${ff7}
90    Diamond   π${ff8}
100   Diamond   π${ff9}
140   Diamond   π${ff10}
210   Diamond   π${ff11}
355   Diamond   π${ff12}
500   Diamond   π${ff13}
720   Diamond   π${ff14}
1000  Diamond   π${ff15}
1450  Diamond   π${ff16}
1075  Diamond   π${ff17}
2180  Diamond   π${ff18}
3640  Diamond   π${ff19}
M.Level Up Pass ${ff20}
M.Minguan π${ff21}
M.Bulanan  π${ff22}

*>VIA ID*
*>PROSES 1 - 5 MENIT*
*>Note : Tanyakan stok sebelum order*

  *πKABUL STORE || READYπ*
`
const sections = [
   {
	title: `${htjava} List Store β¦-------`,
	rows: [
	      {title: "π 5 DM", rowId: '.order *Top Up:* 5 DM β’ Free Fire', description: 'PRICE: ' + ff1 + ', Diamond Free Fire' },
        {title: "π 12 DM", rowId: '.order *Top Up:* 12 DM β’ Free Fire', description: 'PRICE: ' + ff2 + ', Diamond Free Fire' },
        {title: "π 30 DM", rowId: '.order *Top Up:* 30 DM β’ Free Fire', description: 'PRICE: ' + ff3 + ', Diamond Free Fire' },
        {title: "π 40 DM", rowId: '.order *Top Up:* 40 DM β’ Free Fire', description: 'PRICE: ' + ff4 + ', Diamond Free Fire' },
        {title: "π 50 DM", rowId: '.order *Top Up:* 50 DM β’ Free Fire', description: 'PRICE: ' + ff5 + ', Diamond Free Fire' },
        {title: "π 70 DM", rowId: '.order *Top Up:* 70 DM β’ Free Fire', description: 'PRICE: ' + ff6 + ', Diamond Free Fire' },
        {title: "π 80 DM", rowId: '.order *Top Up:* 80 DM β’ Free Fire', description: 'PRICE: ' + ff7 + ', Diamond Free Fire' },
        {title: "π 90 DM", rowId: '.order *Top Up:* 90 DM β’ Free Fire', description: 'PRICE: ' + ff8 + ', Diamond Free Fire' },
        {title: "π 100 DM", rowId: '.order *Top Up:* 100 DM β’ Free Fire', description: 'PRICE: ' + ff9 + ', Diamond Free Fire' },
        {title: "π 140 DM", rowId: '.order *Top Up:* 140 DM β’ Free Fire', description: 'PRICE: ' + ff10 + ', Diamond Free Fire' },
        {title: "π 210 DM", rowId: '.order *Top Up:* 210 DM β’ Free Fire', description: 'PRICE: ' + ff11 + ', Diamond Free Fire' },
        {title: "π 355 DM", rowId: '.order *Top Up:* 355 DM β’ Free Fire', description: 'PRICE: ' + ff12 + ', Diamond Free Fire' },
        {title: "π 500 DM", rowId: '.order *Top Up:* 500 DM β’ Free Fire', description: 'PRICE: ' + ff13 + ', Diamond Free Fire' },
        {title: "π 720 DM", rowId: '.order *Top Up:* 720 DM β’ Free Fire', description: 'PRICE: ' + ff14 + ', Diamond Free Fire' },
        {title: "π 1000 DM", rowId: '.order *Top Up:* 1000 DM β’ Free Fire', description: 'PRICE: ' + ff15 + ', Diamond Free Fire' },
        {title: "π 1450 DM", rowId: '.order *Top Up:* 1450 DM β’ Free Fire', description: 'PRICE: ' + ff16 + ', Diamond Free Fire' },
        {title: "π 1075 DM", rowId: '.order *Top Up:* 1075 DM β’ Free Fire', description: 'PRICE: ' + ff17 + ', Diamond Free Fire' },
        {title: "π 2180 DM", rowId: '.order *Top Up:* 2180 DM β’ Free Fire', description: 'PRICE: ' + ff18 + ', Diamond Free Fire' },
        {title: "π 3640 DM", rowId: '.order *Top Up:* 3640 DM β’ Free Fire', description: 'PRICE: ' + ff19 + ', Diamond Free Fire' },
        {title: "π M.Level Up Pass", rowId: '.order *Top Up:* M.Level Up Pass β’ Free Fire', description: 'PRICE: ' + ff20 + ', M.Level Up Pass Free Fire' },
        {title: "π M.Minguan", rowId: '.order *Top Up:* M.Minguan β’ Free Fire', description: 'PRICE: ' + ff21 + ', M.Minguan Free Fire' },
        {title: "π M.Bulanan", rowId: '.order *Top Up:* M.Bulanan β’ Free Fire', description: 'PRICE: ' + ff22 + ', M.Bulanan Free Fire' },
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
//conn.sendHydrated(m.chat, info, wm, null, sgc, "π Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['game1']
handler.command = /^(game1)$/i
export default handler
