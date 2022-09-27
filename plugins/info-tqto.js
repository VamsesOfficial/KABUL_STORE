import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(cita)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `*▸ - - - —「 BIG THANKS TO 」— - - - ◂*
*❉ Adiwajshing:*
*❉ Nurutomo:*
*❉ Istikmal:* 
*❉ Ariffb:*
*❉ Ilman:*
*❉ Amirul:*
*❉ Rasel:*
*❉ Fatur:*
*❉ Rominaru:*
*❉ Kannachann:*
*❉ The.sad.boy01:*
*❉ Ameliascrf:*
*❉ Fokus ID:*
*❉ Johannes:*
*❉ BrunoSobrino:*
*❉ Krisna:*
*❉ LitRHap:*
*❉ Rlxfly:*
*❉ Aine:*
*❉ Papah-Chan:*


*⫹⫺ KABUL STORE || READY* `

`
conn.sendButtonDoc(m.chat, tqto, wm,'Thanks','MENU','Owner','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/kabull_store",
    mediaType: "VIDEO",
    description: "https://Instagram.com/kabull_store", 
    title: 'KABUL STORE || READY',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
}
} })
        }
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
export default handler

