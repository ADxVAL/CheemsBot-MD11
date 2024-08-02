//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='{"noiseKey":{"private":{"type":"Buffer","data":"qBhPBTybhPJFZ6t3RCln/liy5TQm1s10y+OZZ6oPcGQ="},"public":{"type":"Buffer","data":"YrLuUz7TmRrSrpiHgx2eluQQCMJg9Y39hu8aIZebYmI="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"mKtn0ZphQ6+ls6y8UqXRFP5Zzb0twjn41ZsitzXe2WQ="},"public":{"type":"Buffer","data":"EhJjSAcbpuAyIaUJpnv6r5avotP4m4yU2GH5Jk8rliQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"6MAzfbolheeINMVasgp6BdzIT0HR83caVZhD69GO5G0="},"public":{"type":"Buffer","data":"mHDQfKEo2x6+rTGZ15Ty94qpDNUAoLaUrPuyLwA5OzI="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"KBrfHy8FcsAUf+LLBrEU61Lm1PW2qcc+gjrzxaDwFEw="},"public":{"type":"Buffer","data":"y2L7mAFpL5fVuVL6VQLIWGM/0QReb1sz2o1mstz4Kjw="}},"signature":{"type":"Buffer","data":"Vc61kBcASwRHqfUZNi8w300UdcNvz7h16GZ0kkugBmxVGPKl4lejwANqEsdcXcO+iemuwRcX+gyuCwpIVg2QAw=="},"keyId":1},"registrationId":32,"advSecretKey":"6/UV5j2fnnM2IvqR24RMI6dp3NldlyE4jO/HBBdRFZc=","processedHistoryMessages":[{"key":{"remoteJid":"2347061141859@s.whatsapp.net","fromMe":true,"id":"3A1F880BC655059F5F4B"},"messageTimestamp":1722628496},{"key":{"remoteJid":"2347061141859@s.whatsapp.net","fromMe":true,"id":"3ACF8CE61BB2854AB9F1"},"messageTimestamp":1722628497},{"key":{"remoteJid":"2347061141859@s.whatsapp.net","fromMe":true,"id":"3A8FB64B84A4873A3AE8"},"messageTimestamp":1722628498}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"NRn8ajqHScyAIUKhlQ544A","phoneId":"6df4ebf4-cb55-4998-a064-0afafa04428c","identityId":{"type":"Buffer","data":"XI+CY5JcNCcyYw5m5QrX4KGcKOI="},"registered":true,"backupToken":{"type":"Buffer","data":"l8pSjbz0OHgYw5VQ/GSdqCI7sDE="},"registration":{},"pairingCode":"74PDEJH7","me":{"id":"2347061141859:2@s.whatsapp.net","name":"Eccentric therpist","lid":"93622200455328:2@lid"},"account":{"details":"COK1pbgKEIvztLUGGAIgACgA","accountSignatureKey":"iVzgwCImOlNs0KPQCl8ahFRdGcfSdLK0kqs6GIfPg0k=","accountSignature":"CLLOG3owvuydfp48jiRg3bFLrv8pbKUqBYkeHHhy1IIzUb/7jwWs0wGdJsb/i7N4Kc15p8aGWq1fTJPwu9iejA==","deviceSignature":"LHWZLPc7gRsp6ojll8TrGwU2XwaxkrIHiv0x82/ZP5f4JHC+5+fhFYyGHr3sh5/yT6qnBmjgPN9y/fTjSUi3AA=="},"signalIdentities":[{"identifier":{"name":"2347061141859:2@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BYlc4MAiJjpTbNCj0ApfGoRUXRnH0nSytJKrOhiHz4NJ"}}],"platform":"smbi","lastAccountSyncTimestamp":1722628494,"myAppStateKeyId":"AAAAAGWP"}'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'jnm' //ur bot name
global.ownernumber = '2347061141859' //ur owner number
global.ownername = '🦄드림 가이 Xeon' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "Sticker By"
global.author = "🦄드림 가이 Xeon\n\n+916909137213"
global.creator = "2347061141859@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2347061141859"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
