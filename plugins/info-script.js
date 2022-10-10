import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*chat aja langsung ke owner nyah*

Pengen yang udah di recode oleh owner?
Script bot ini gratis bila kalian mau bisa chat owner
sebelum chat owner bantu subscribe dulu :v
link yt ⤵️
https://www.youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow
wa.me/6281386943282
*SEKIAN TERIMAKASIH*`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/kabulsaputra21",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'AL BOT Whatsapp ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
