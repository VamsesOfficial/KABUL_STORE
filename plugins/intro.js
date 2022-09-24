/*let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
 *「SELMAT DATANG STORE KAMI」*
Welcome 👑KABUL STORE || READY👑
Jangan Lupa Baca Deskripsi Group
Sebelum Bertindak
 
Untuk Melihat Semua Pricelist/pembayaran
Ketik/.list Semoga Betah Di Store Kami🙏
═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙


 
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(welcome)$/i

export default handler */

import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
 *「SELMAT DATANG STORE KAMI」*
Welcome 👑KABUL STORE || READY👑
Jangan Lupa Baca Deskripsi Group
Sebelum Bertindak
 
Untuk Melihat Semua Pricelist/pembayaran
Ketik/.list Semoga Betah Di Store Kami🙏
═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙


`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, krtu, wm,'LIST','.list', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/kabull_store",
    mediaType: "VIDEO",
    description: "https://instagram.com/kabull_store?igshid=YmMyMTA2M2Y=", 
    title: 'WELCOME KABUL STORE',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) // Tambah sendiri kalo mau
}
handler.command = /^(welcome)$/i

export default handler

