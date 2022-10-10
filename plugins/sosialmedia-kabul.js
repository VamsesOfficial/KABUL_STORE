/*let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
|  *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler */

import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `
۪|ཻུꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 SOSIAL MEDIA KABUL 」*
│ *Nama   : KABUL*
│ *Gender  : PRIA*
│ *Umur    : 18*
│ *Hobby   : REBAHAN SAMBIL NGOPI UDUT*
│ *Kelas    : private*
│ *Asal     : Sukabumi Jawa Barat*
│ *Agama  : Islam*
|  *Instagram : https://Instagram.com/kabulsaputra21*
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`
let wibu = `https://telegra.ph/file/5e6deb57e7cc64904235d.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, krtu, wm,'🫂SELAMAT DATANG','.menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/kabulsaputra21",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CevoCg5hG-p/?utm_source=ig_web_copy_link", 
    title: 'SOSIAL MEDIA KABUL',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) // Tambah sendiri kalo mau
}
handler.command = /^(sosial media kabul|sosial|kabul|sosialmediakabul)$/i

export default handler