import fetch from 'node-fetch'
import axios from 'axios'
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    //try {
    if (m.chat in conn.hartatahta) throw 'Masih ada yang sedang membuat\nTeks Harta Tahta\ndi chat ini... tunggu sampai selesai'

    else conn.hartatahta[m.chat] = true

    m.reply('_Sedang membuat..._\n*Mohon tunggu sekitar 1 menit*')
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdlv3(args[0])
    .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdl(args[0]))
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', 
`              *γ πΉ α΄ Ιͺ α΄ α΄ α΄ α΄ γ*
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
                 βββββββββββββββ
ββββββββββ βγ€βγ€ ββγ€ β·γ€β» ββββββββββ
*Nickname:* ${nickname}
*Description:* ${description}
_Β©ALBOTWhatsappπ­_
`.trim(), m)
//}
/* catch {
    if (!args[0]) throw 'Uhm...url nya mana?'
  let txt = `π *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
  conn.send2ButtonVid(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=${lolkey}&url=${args[0]}`, txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tta ${args[0]}`, m)
    } */
}
handler.help = ['tiktok2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok2|t|k)?)$/i

export default handler
