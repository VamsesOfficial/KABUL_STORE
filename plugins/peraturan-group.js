let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.send3ButtonImg(m.chat, await (await fetch(fla+ 'Rules')).buffer(),`
*Rules Bot*:
1. NO PROMOSI❌
2. NO CULIK MEMBER❌
3. KIRIM BUKTI TF PALSU❌
4. SHERE LINK DALAM BENTUK APAPUN❌ 
5. KIRIM +18❌
6. CULIK MEMBER LAPOR ADMIN❌
7. DILARANG MAEN BOT❌
8. *SEKIAN TERIMAKASIH❌*
`.trim(), 'Kebijakan ©2022 By KABUL STORE', '⋮☰ LIST', '.list', 'STORE', '..store', 'Donasi', '.donasi', m, {
    quoted: m,
    contextInfo: {
        externalAdReply: {
            title: 'Harap patuhin peraturan tersebut yah kak >~<',
            body: `${pickRandom(['udah makan belum kak?', 'udh mandi belum kak?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'jangan spam ya kak!', 'Jangan lupa donasi yak kak! >.<', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< 💗✨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`,
            description: `${pickRandom(['udah makan belum kak?', 'udh mandi belum kak?', 'Semangat ya kak!', 'Jangan begadang mulu ya!', 'jangan spam ya kak!', 'Jangan lupa donasi yak kak! >.<', 'Jaga kesehatan yaw kak!', 'Jangan lupa makan!', 'Jangan lupa istirahat yak! >.<', 'I Love you kak >.< 💗✨', 'Pr nya udh belum kak?', 'Jangan kebanyakan main hp yk! nanti sakit :‹'])}`,
            mediaType: 2,
          thumbnail: await (await fetch('https://telegra.ph/file/b412e4dd6391692d975d3.jpg')).buffer(),
         mediaUrl: `https://www.facebook.com/Inunime-107082474576049/`
        }
     }
    })
handler.help = ['rules']
handler.tags = ['info']

handler.command = /^(snk|syarat|peraturan|rules)$/i

module.exports = handler

let wm = global.botwm
