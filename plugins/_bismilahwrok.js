import moment from 'moment-timezone'
let handler = m => m

handler.before = async function (m) {

    if (m.chat.endsWith('broadcast') || m.key.remoteJid.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
   // if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let { banned } = db.data.users[m.chat]
    let username = conn.getName(m.sender) 
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
 //   await conn.modifyChat(m.chat, 'mute', -Math.floor(new Date / 1e3) * 1e3 - 1e3).catch(console.log)
    await this.sendButton(m.chat, `
Hai ${ucapan()} *${username.replace(/@.+/, '')}* 👋
*Ig Owner:${sig}

${banned ? `kamu *terbanned* kak 😕\nSilahkan Hubungi: wa.me/${owner[0]}` : 'hallo kak saya *ALBOTWhatsapp* tolong jangan spam bot ya di chat bot kalau butuh apa² ketik aja .owner. /Ada yang bisa saya bantu?
 
 *By ALBOTWhatsapp*'}
`.trim(), wm, null, [['ᴍ ᴇ ɴ ᴜ', '.menu']], m)
    user.pc = new Date * 1
}
let krn = /(bang|p|bantu|bangbisabantugak|bang tolong bantuin|tolongbanh|nc)/i
    let iskren = krn.exec(m.text)
    if (iskren && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: em.getRandom(),
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, krenz, '', '', m, true)
    }, 1000)
    }
}
handler.limit = false
export default handler
 function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Pagi kak'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Pagi kak'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Siang kak'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'Sore kak'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Petang kak'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Malam kak'
        } else {
          ucapanWaktu = 'Selamat Malam!'
        }	
        return ucapanWaktu
}
