let handler = async (m, { conn, args, usedPrefix, command }) => {

    await conn.groupUpdateSubject(m.chat, `${args.join(" ")}`);
    m.reply('Sukses mengganti nama group oleh admin group')
  }
  
  handler.help = ['setnamegc <text>', 'gc <text>']
  handler.tags = ['group', 'kabul']
  handler.command = /^setnamegc|gc$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = true
  handler.private = false
  handler.register = false
  handler.admin = true
  handler.botAdmin = true
  
  export default handler
