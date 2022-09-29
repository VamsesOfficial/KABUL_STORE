import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = fs.readFileSync('./mp3/blob/KABUL_STORE/mp3/Ara%20ara.mp3')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, { quoted: fkontak },{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://www.youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow",
    mediaType: 2,
    description: "https://www.youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow", 
    title: 'WH-BOT-V1-ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig  }}})
}
handler.customPrefix = /^(ara ara|araara|ara|ar|ra|rara|oh|oh ara)$/i
handler.command = new RegExp

export default handler
