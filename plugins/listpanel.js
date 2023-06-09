let handler = async (m, { conn, text, usedPrefix, command }) => {

var dann = `Berikut ini adalah list panel dari *Lins-MD* ⤵️\n

Admin Menyediakan:
- Panel
- Sc Botz
- Sewa Botz
- Jadi Botz
- Update Premium

• List *Panel* + *Vps* + *Rdp* ⤵️
📮 1GB | 30% Cpu
➡️ *5.000* / Bulan
📮 2GB | 50% Cpu
➡️ *10.000* / Bulan
📮 3GB | 75% Cpu
➡️ *15.000* / Bulan
📮 4GB | 100% Cpu
➡️ *20.000* / Bulan
📮 5GB | 125% Cpu
➡️ *25.000* / Bulan
📮 6GB | 150% Cpu
➡️ *30.000* / Bulan
📮 7GB | 175% Cpu
➡️ *35.000* / Bulan
📮 UNLIMITED
➡️ *40.000* / Bulan

• Kecepatan: 800 - 2.000 *Speed*
• Guarante: Tergantung Pemakaian
• Expired: 1 *Month*

Ingin membeli? Chat ⤵️
https://wa.me/+6281911317205
Selain itu *Clone* !!

• Payment:
➡️ Dana, Gopay, Ovo, Qris

• Login *Panel* ⤵️
https://panel.kangyud.tech
• Group ⤵️
https://chat.whatsapp.com/IjIuk3Mwxuu2TQsAxrWhTJ

• *Peraturan*:
- Don't Share Link
- Don't Spam
- Don't 18+
- Don't Send Virus
- Don't Eljibiti`
conn.relayMessage(m.chat, 
{ liveLocationMessage: {
  degreesLatitude: 35.685506276233525,
  degreesLongitude: 139.75270667105852,
  accuracyInMeters: 0,
degreesClockwiseFromMagneticNorth: 2,
caption: dann,
sequenceNumber: 2,
timeOffset: 3,
contextInfo: m,
}}, {})
}

handler.help = ['listpanel']
handler.tags = ['main']
handler.command = /^(listpanel)$/i

module.exports = handler