import fs from 'fs'

import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix: _p }) => {

    let info = fs.readFileSync('./mp3/bodo%20Amat%20gw%20ngambek.mp3')

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

handler.customPrefix = /^(bodo amat|bodo|ngambek|bod|ngam|bek|soiyeh|ngambek gw|bang|bang bales)$/i

handler.command = new RegExp

export default handler
