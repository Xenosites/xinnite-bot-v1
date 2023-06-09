let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/86e94a0551aed5315cc42.png'
let dann =
`
┏━━━ꕥ〔 *${global.wm2}* 〕ꕥ━⬣ 
┃Dana: 081911317205
┃Ovo: 081911317205 
┃Pulsa: 081252352238
┃Gopay: 081911317205
┗━━━ꕥ
┏━━━ꕥ〔 *Website* 〕ꕥ━⬣ 
┃Ig: instagram.com/rijalsavior
┃Wa: wa.me/6281911317205
┃Socialbuzz: sociabuzz.com/bot_wa
┃Thanks for Donationing!
┗━━━ꕥ
`
 await conn.sendFile(m.chat, qris, 'qris.jpg', `${dann}`, m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler