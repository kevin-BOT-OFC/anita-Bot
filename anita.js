// BASE PARA CREADORES DE BOTS 

// CREDITOS : CLOVERS MODS
// CREDITOS : JULS MODDERS

// CONSTANTES DE NODULES 

const { 
default: WAConnection,
downloadContentFromMessage, 
emitGroupParticipantsUpdate, 
emitGroupUpdate,
generateWAMessageContent, 
generateWAMessage, 
makeInMemoryStore, 
prepareWAMessageMedia, 
MediaType, 
areJidsSameUser, 
WAMessageStatus, 
AuthenticationState, 
GroupMetadata, 
initInMemoryKeyStore,
getContentType, 
MiscMessageGenerationOptions, 
useSingleFileAuthState, 
BufferJSON, 
WAMessageProto, 
MessageOptions, 
WAFlag, WANode,	
WAMetric,	
ChatModification, 
MessageTypeProto, 
WALocationMessage, 
ReconnectMode, 
WAContextInfo, 
proto,	
WAGroupMetadata, 
ProxyAgent,	
waChatKey, 
MimetypeMap, 
MediaPathMap, 
WAContactMessage, 
WAContactsArrayMessage, 
WAGroupInviteMessage, 
WATextMessage, 
WAMessageContent, 
WAMessage, 
BaileysError, 
WA_MESSAGE_STATUS_TYPE, 
MediaConnInfo, 
URL_REGEX, 
WAUrlInfo, 
WA_DEFAULT_EPHEMERAL, 
WAMediaUpload, 
mentionedJid, 
processTime, 
Browser, 
MessageType, 
Presence, 
WA_MESSAGE_STUB_TYPES, 
Mimetype, 
relayWAMessage,	
Browsers, 
GroupSettingChange, 
delay, 
DisconnectReason, 
WASocket, 
getStream, 
WAProto, 
isBaileys, 
AnyMessageContent, 
fetchLatestBaileysVersion 
} = require('@adiwajshing/baileys');

const fs = require('fs');
const P = require('pino');
const yts = require("yt-search");
const cfonts = require("cfonts");
const chalk = require('chalk')
const axios = require('axios');
const speed = require("performance-now");
const { getBuffer, getRandom, getExtension } = require('./archivos/lib/functions.js');
const { fetchJson } = require("./archivos/lib/fetcher")
const mimetype = require("mime-types")
const BodyForm = require("form-data")
const util = require("util")
const path = require("path")
const Crypto = require("crypto")
const ff = require('fluent-ffmpeg')
const gis = require('g-i-s');
const imageToBase64 = require('image-to-base64');



// DATA E HORA //
const moment = require("moment-timezone")
const hora = moment.tz("America/Lima").format("HH:mm:ss")
const datai = moment.tz("America/Lima").format("DD/MM/YY")
const colom = moment().tz('America/Bogota').format('DD/MM HH:mm')




// CONSTANTES SETTING //

var prefix = '.' //prefijo
var NombreBot = 'anita Bot' // nombre del bot 
var Creador = "Juls Modders & clovers Mods" // No cambiar
owner = '573001382233'
blocked = []
// BANNER //
const {videoToWebp,imageToWebp,writeExifImg,writeExifVid} = require('./archivos/stickersss.js');
const { error } = require('console');
const welkom = JSON.parse(fs.readFileSync('./archivos/welkom.json'))

const color = (text, color) => {
return !color ? chalk.white(text) : chalk.keyword(color)(text)
}
const banner = cfonts.render(('anita|Bot'), {
font : "block",
align: "center",
colors: ["red","white"]
})

// CONEXION DEL BOT

const store = makeInMemoryStore({ logger: P().child({ level: 'debug', stream: 'linhaDoTempo'}) })
const { state, saveState } = useSingleFileAuthState('./cache/anita.json')
async function startJuls() {
const { version, isLatest } = await fetchLatestBaileysVersion()
console.log(`💤..Espera esta Conectando..!!`)
console.log(banner.string)
console.log(`\nListo Capo Conectado Exitosamente\n---------\n\nDia: ${datai}\n\nHora: ${hora}\n---------\nCreado Por Kevin\n\n`)
const anita = WAConnection({
logger: P({ level: "silent" }),
printQRInTerminal: true,
browser: ['anitaBot', 'JulsM', '1.0.0'],
auth: state
})
anita.ev.on ("creds.update", saveState)
store.bind(anita.ev)
anita.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})
anita.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})
anita.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("😪..Conección inestable..", lastDisconnect.error, "Intentando conectar...", shouldReconnect);
if(shouldReconnect) {
startJuls()
}
} else if(connection === "open") {
console.log("anita Bot funciona correctamente!!!")
} 
})
//*******************************************//

anita.ev.on('group-participants.update', async (anu) => {
  if(!welkom.includes(anu.id)) return 
  try{
    const datosgp = await anita.groupMetadata(anu.id)

    if(anu.action == 'add') {

      const numerodep = anu.participants[0]

      const fotito = fs.readFileSync('./archivos/Bienvenida.jpg')

      const Bienvenida = `
      ╭━〘𝓐𝓝𝓘𝓣𝓐-𝓑𝓞𝓣𝐎𝐓〙\n┃  ⛥╭──────────────\n๖ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ ${numerodep}\n💖 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳@\n┃ ⛥│🤴ᩭ✎𝙽Ú𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁\n┃ ⛥│📔ᩭ✎http://wa.me/573001382233\n┃ ⛥│📚ᩭ✎𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁\n┃ ⛥│🍀ᩭ✎𝙰𝙼𝙸𝚂𝚃𝙰𝙳𝙴𝚂\n┃ ⛥│🤝ᩭ✎𝙰𝙼𝙸𝙶𝙾𝚂\n┃ ⛥│❤️📚ᩭ✎𝙳𝙴𝚂𝙼𝙰𝙳𝚁𝙴┃ ⛥│◦➛😇ᩭ✎𝙲𝙾𝚃𝙾𝚁𝚁𝙴𝙾 𝚈 𝙼Á𝚂\n┃ ⛥│⁉️ᩭ✎𝙰𝚅𝙸𝚂𝙾 𝙸𝙼𝙿𝙾𝚁𝚃𝙰𝙽𝚃𝙴:\n𝙿𝚘𝚛 𝚏𝚊𝚟𝚘𝚛 𝙻𝚎𝚎 𝚕𝚊𝚜 𝚛𝚎𝚐𝚕𝚊𝚜 𝚍𝚎𝚕 𝚐𝚛𝚞𝚙𝚘 𝚙𝚊𝚛𝚊 𝚚𝚞𝚎 𝚎𝚟𝚒𝚝𝚎𝚜 𝚜𝚎𝚛 𝚎𝚕𝚒𝚖𝚒𝚗𝚊𝚍𝚘 𝚢 𝚎𝚟𝚒𝚝𝚎𝚜 𝚝𝚎𝚗𝚎𝚛 𝚙𝚛𝚘𝚋𝚕𝚎𝚖𝚊𝚜 𝚌𝚘𝚗 𝚌𝚛𝚎𝚊𝚍𝚘𝚛 𝚍𝚎𝚕 𝚐𝚛𝚞o\n┃ ⛥│\n┃ ⛥│◦➛🌱OF-KEV𝐈\n┃ ⛥╰───────────\n╰━━━━━━━━━━━──⊷'

      ${numerodep}

      `
      anita.sendMessage(anu.id,{image : fotito, caption : Bienvenida})
     }

     if(anu.action == 'remove') {

      const numerodep = anu.participants[0]

      const fotito2 = fs.readFileSync('./archivos/Despedida.jpg')

      const Despedida = `
     
       ╭━〘𝓐𝓝𝓘𝓣𝓐-𝓑𝓞𝓣𝐎𝐓〙\n┃ ⛥╭──────────────\n${numerodep}\n𝐒𝐚𝐥𝐢ó 𝐝𝐞𝐥 𝐠𝐫𝐮𝐩𝐨 𝐧𝐢 𝐦𝐨𝐝𝐨 𝐪𝐮𝐞 𝐭𝐞 𝐯𝐚𝐲𝐚 𝐛𝐢𝐞𝐧 𝐇𝐚𝐬𝐭𝐚 𝐥𝐚 𝐩𝐫ó𝐱𝐢𝐦𝐚 𝐪𝐮𝐞 𝐃𝐢𝐨𝐬 𝐭𝐞 𝐛𝐞𝐧𝐝𝐢𝐠𝐚\n┃ ⛥│🌱OF-KEV𝐈☘\n┃ ⛥╰───────────\n╰━━━━━━━━━━━──⊷'
      `
      anita.sendMessage(anu.id,{image : fotito2, caption : Despedida})
    }

 } catch(e) {
  console.log('Error: % s', color("red"))
 }
})

anita.ev.on('messages.upsert', async (m) => {
function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}
  try {
const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
const getExtension = async (type) => {
return await mimetype.extension(type)
 }
const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})

const isUrl = (url) => {
  return url.match(
    new RegExp(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
      "gi"
    )
  );
};
//***************[ FUNCIONES ]***************//
const info = m.messages[0]
  if (!info.message) return 
  if (info.key && info.key.remoteJid == 'status@broadcast') return
const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
const content = JSON.stringify(info.message);
const altpdf = Object.keys(info.message)
global.prefix
const from = info.key.remoteJid
var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''
const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await anita.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const pushname = info.pushName ? info.pushName : ''
const groupId = isGroup ? groupMetadata.id : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const botNumber = anita.user.id.split(':')[0]+'@s.whatsapp.net'
const ownerNumber = ['573001382233@s.whatsapp.net']
const args = body.trim().split(/ +/).slice(1);
const text = args.join(" ")
const antilink = JSON.parse(fs.readFileSync('./archivos/antilink.json'))
const {
  tmpdir
 } = require("os")

//OJO SI NO DA BORRALA//
let girastamp = speed()
let latensi = speed() - girastamp




const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const enviar = (text) => {
  anita.sendMessage(from, {text: text}, {quoted: info})
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? anita.sendMessage(from, {text: teks.trim(), mentions: memberr}) : anita.sendMessage(from, {text: teks.trim(), mentions: memberr})}

  //isQuoted 
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const iswelkom = isGroup ? welkom.includes(from) : false 
const isAntiLink = isGroup ? antilink.includes(from) : false
const isOwner = ownerNumber.includes(sender)
//*******************************************//
q = args.join(" ")
const sendBtext = async (id, text1, desc1, but = [], vr) => {
buttonMessage = { text: text1, footer: desc1, buttons: but, headerType: 1 }
anita.sendMessage(id, buttonMessage, {quoted: vr}) }
const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = { image: {url: img1}, caption: text1, footerText: desc1, buttons: but, headerType: 4 }
anita.sendMessage(id, buttonMessage, {quoted: vr}) }
const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => { templateMessage = { image: {url: img1}, caption: text1, footer: desc1, templateButtons: but, }
anita.sendMessage(id, templateMessage, {quoted: vr}) }
const sendGifButao = async (id, gif1, text1, desc1, but = [], vr) => { buttonMessage = { video: {url: gif1}, caption: text1, gifPlayback: true, footerText: desc1, buttons: but, headerType: 4 }
anita.sendMessage(id, buttonMessage, {quoted: vr}) } 
global.openai_key = 'sk-...4mT1'
global.openai_org_id = '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'
const sleep = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = {
sleep,

}

//*******************************************//



const enviartexto = (texto) => {
  anita.sendMessage(from,{ text : texto }, {quoted :  live})
}

const enviarimagen = (imagen) => {
  anita.sendMessage(from,{ image : imagen }, {quoted :  live})
}

const enviarimagencap = (imagen,caption) => {
  anita.sendMessage(from,{ image : imagen,caption : caption }, {quoted :  live})
}

const enviarvideos = (videos) => {
  anita.sendMessage(from,{ video : videos }, {quoted :  live})
}

const enviarvideoscap = (videos,caption) => {
  anita.sendMessage(from,{ video : videos, caption : caption }, {quoted :  live})
}

const enviaraudios = (audios) => {
  anita.sendMessage(from,{ audio : audios }, {quoted :  live})
}

const enviarsticker = (Sticker) => {
  anita.sendMessage(from,{ Sticker : Sticker }, {quoted :  live})
}

const enviardocumentos = (documentos) => {
  anita.sendMessage(from,{ document : documentos}, {quoted : live})
}

if (budy.includes("https://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(`*${pushname}* eres administrador, así que no te voy a prohibir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	enviar(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	enviar(`*_「 link  detectado 」_*\n*${pushname}* Vc será banido do grupo *${groupMetadata.subject}*`)
setTimeout( () => {
anita.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviar(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("wa.me")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(`*${pushname}* eres administradora, así que no te voy a prohibir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	enviar(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	enviar(`*_「 link  detectado 」_*\n*${pushname}* voz seras baneado *${groupMetadata.subject}*`)
setTimeout( () => {  
anita.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviar(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }
if (budy.includes("http://")){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return enviar(`*${pushname}* eres administrador, así que no te voy a prohibir`)
		   var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
	    	enviar(`*𝑒𝑙𝑖𝑚𝑖𝑛𝑎𝑑𝑜 𝑑𝑜 𝑔𝑟𝑢𝑝𝑜*`)
	     	}, 100)
	     	enviar(`*_「 link  detectado 」_*\n*${pushname}* vas hacer baneado del grupo *${groupMetadata.subject}*`)
setTimeout( () => {  
anita.groupParticipantsUpdate(from, [Kick], "remove").catch((e) => {enviar(`*ERROR:* ${e}`)}) 
					}, 10)
 setTimeout( () => {
	          
	          }, 0)
 }


// VERIFICACIONES 

const live = {key : {participant : '0@s.whatsapp.net'},message: {liveLocationMessage: {}}} 
const imgm = {key : {participant : '0@s.whatsapp.net'},message: {imageMessage: {}}}
const vid = {key : {participant : '0@s.whatsapp.net'},message: {videoMessage: {}}}
const contato = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const doc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage:{}}}

if(budy == `${prefix}`) {
enviar('🤔👍')}

//=====\\


// RESPUESTAS POR COMANDOS \\
respuesta = {
espere: " ..enviando.. ",
aguarde: "..Espere Porfavor.. ",
dono: ".. Este comando es Privado..Solo lo puede usar mi creador  ",
grupos: ".. Este comando es para grupos.. ",
privado: ".. Este comando es para chats.. ",
admin: " ... Este comando es solo para admins..",
botadmin: " .. Este comando funciona si y solo si, el bot es admin ",
error: ".. Error, intente nuevamente..",
Iv: "Link inválido :v"
}


// MENSAJES EN TERMUX 

 if (!isGroup && isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'blue')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'blue')} ${color('Nombre:', 'blue')} ${color(pushname, 'white')}\n${color('┃', 'blue')} ${color('command:', 'blue')} ${color(command)}\n${color('┃', 'blue')} ${color('Palabras:', 'blue')} ${color(budy.length, 'white')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
 if (!isGroup && !isCmd) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'blue')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'blue')} ${color('Nombre:', 'blue')} ${color(pushname, 'white')}\n${color('┃', 'blue')} ${color('command:', 'blue')} ${color('No', 'blue')}\n${color('┃', 'blue')} ${color('Palabras:', 'blue')} ${color(budy.length, 'white')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
 if (isGroup && isGroup) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'blue')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'blue')} ${color('Nombre:', 'blue')} ${color(pushname, 'white')}\n${color('┃', 'blue')} ${color('command:', 'blue')} ${color(command)}\n${color('┃', 'blue')} ${color('Palabras:', 'blue')} ${color(budy.length, 'white')}\n${color('┃', 'blue')} ${color('Grupo:', 'blue')} ${color(groupName, 'white')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)
 if (!isGroup && isGroup) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'blue')}\n${color('┃', 'blue')} ${color('Número:', 'blue')} ${color(sender.split('@')[0], 'white')}\n${color('┃', 'blue')} ${color('Nombre:', 'blue')} ${color(pushname, 'white')}\n${color('┃', 'blue')} ${color('Horário:', 'blue')} ${color(time, 'white')}\n${color('┃', 'blue')} ${color('command:', 'blue')} ${color('Não', 'blue')}\n${color('┃', 'blue')} ${color('Palabras:', 'blue')} ${color(budy.length, 'white')}\n${color('┃', 'blue')} ${color('Grupo:', 'blue')} ${color(groupName, 'white')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'blue')}`)


// CASES creadas por juls y kevin

switch(command){


  case 'creador' :
          const creador = ('ۣۜۜ͜͡𝐇𝐨𝐥𝐚ঔৣֳ᷌᷈͜͡ \n┃ ⛥│🤴ℕ𝕆𝕄𝔹ℝ𝔼 \n┃ ⛥│📔KEVIN OF\n┃ ⛥🤴ᩭ✎𝙽Ú𝙼𝙴𝚁𝙾 𝙳𝙴 𝙼𝙸 𝙲𝚁𝙴𝙰𝙳𝙾𝚁\n│ ⛥│📔ᩭ✎http://wa.me/573001382233\n ┃ ⛥ 𝔸𝕃𝔾𝕌ℕ 𝔼ℝℝ𝕆ℝ ℝ𝔼ℙ𝕆ℝ𝕋𝔸𝕃𝕆 ℂ𝕆ℕ 𝕄𝕀 ℂℝ𝔼𝔸𝔻𝕆ℝ \n│ ⛥│𝕋𝔼ℕ 𝔹𝕆ℕ𝕀𝕋𝕆 𝔻𝕀𝔸 ')
  const creador1=
  enviartexto(creador)
          break
          




case 'agregar' :
  case 'add' : 
  case 'añadir' :
    case 'unir' :
      if(args.length<0 ) return 
      enviar('👀✍𝔼𝕤𝕔𝕣𝕚𝕓𝕖 𝕖𝕝 𝕟𝕦𝕞𝕖𝕣𝕠 𝕕𝕖 𝕝𝕒 𝕡𝕖𝕣𝕤𝕠𝕟𝕒 𝕢𝕦𝕖 𝕕𝕖𝕤𝕖𝕒𝕤 𝕒𝕘𝕣𝕖𝕘𝕒𝕣 𝕤𝕠𝕪 𝕦𝕟 𝔹𝕆𝕋 𝕟𝕠 𝕒𝕕𝕚𝕧𝕚𝕟𝕠🔮')
      if(!isOwner) return enviar(respuesta.dono)
      let pepe = info.quoted ? info.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
      await anita.groupParticipantsUpdate(from, [pepe] , 'add')
      break
 
      case "ban":
        if (!isGroup) return enviar(respuesta.grupos)
        if (!isGroupAdmins) return enviar(respuesta.admin)
        if (q < 1) return enviar("🎭 👀✍𝔼𝕤𝕔𝕣𝕚𝕓𝕖 𝕖𝕝 𝕟𝕦𝕞𝕖𝕣𝕠 𝕕𝕖 𝕝𝕒 𝕡𝕖𝕣𝕤𝕠𝕟𝕒 𝕢𝕦𝕖 𝕕𝕖𝕤𝕖𝕒𝕤 𝕖𝕝𝕚𝕞𝕚𝕟𝕒𝕣 𝕤𝕠𝕪 𝕦𝕟a 𝔹𝕆𝕋 𝕟𝕠 𝕒𝕕𝕚𝕧𝕚𝕟a🤔🔮 ")
        if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
        if (info.message.extendedTextMessage != undefined || info.message.extendedTextMessage != null) {
        kicka = info.message.extendedTextMessage.contextInfo.participant
        anita.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], "remove")
        } else { 
        enviar("࿐ Marcar el mensaje de la persona")
        }
        break

      case 'welcome' : 
      case 'bienvenida': 
      if(!isGroup) return enviar(respuesta.grupos)
      if(args.length<1 ) return 
      enviar('👀✍ESCRIBA 1 PARA ACTIVAR Y 0 PARA DESACTIVAR')
      if(!isGroupAdmins) return enviar ('✨😎𝕝𝕠 𝕤𝕚𝕖𝕟𝕥𝕠 𝕞𝕚 𝕜𝕚𝕟𝕘 , 𝕟𝕠 𝕖𝕣𝕖𝕤 𝕦𝕟 𝕒𝕕𝕞𝕚𝕟𝕚𝕤𝕥𝕣𝕒𝕕𝕠𝕣 𝕕𝕖 𝕝𝕠𝕤 𝔾𝕆𝔻𝕊😎✨')
      if(!isBotGroupAdmins) return enviar(respuesta.botadmin)
      if(Number(args[0])==1) {
        if(iswelkom) return enviar('𝕄𝕀 𝕂𝕀ℕ𝔾 , 𝕐𝔸 𝔼𝕊𝕋𝔸 𝔸ℂ𝕋𝕀𝕍𝕆')
        welkom.push(from)
        fs.writeFileSync('./archivos/welkom.json',JSON.stringify(welkom)) ; return enviar('𝔸ℂ𝕋𝕀𝕍𝔸𝔻𝕆 ℂ𝕆ℝℝ𝔼ℂ𝕋𝔸𝕄𝔼ℕ𝕋𝔼')
      } else if (Number(args[0]==0)) {
        if(!iswelkom) return enviar('ℕ𝕆 𝔼𝕊𝕋𝔸 𝔸ℂ𝕋𝕀𝕍𝔸𝔻𝕆')
        const elsy = from 
        const processo = welkom.indexOF(elsy)
        while(processo>=0) {
          welkom.splice(processo, 1)
          processo = welkom.indexOF(elsy)
        }
        fs.writeFileSync('./archivos/welkom.json',Json.stringify(welkom))
        enviar('𝔻𝔼𝕊𝔸ℂ𝕋𝕀𝕍𝔸𝔻𝕆 ℂ𝕆ℝℝ𝔼ℂ𝕋𝔸𝕄𝔼ℕ𝕋𝔼')
      } else {
        enviar('1 para activar y 0 para desactivar')
      }
      break






// ESCRIBIR AQUI COMANDOS CON PREFIJO

case 'hola':
  enviartexto('Que tal en que andas✌😃')
  break

  case 'Comoestas':
    case 'comoestas':
      case 'botestasbien?':
        case '¿botestasbien?':
          const animo = ('si muy bien y tu?','obvio mi king estoy muy bien','la verdad no se','estoy nice y tu?','no se')
          const estasbien1 = Math.floor(Math.random()*animo.length)
  const estasbien= animo[estasbien1]
  enviartexto(estasbien)
          break

          case "playmp4":
enviar("aguarde um minuto")
bla = await fetchJson(`https://trevorestapi.onrender.com/api/yt/playmp4?query=vmz%20baka&apikey=clover`) 
audbla = await getBuffer(bla.url)
anita.sendMessage(from, {video: audbla, mimetype: "video/mp4"},
 {quoted: live}).catch(e => {
enviar("error")
})
break   

case "playmp3":
  enviar("aguarde um minuto")
  bla = await fetchJson(`hhttps://trevorestapi.onrender.com/api/yt/playmp3?query=vmz%20baka&apikey=clover`) 
  audbla = await getBuffer(bla.url)
  anita.sendMessage(from, {video: audbla, mimetype: "audio/mp4"},
   {quoted: live}).catch(e => {
  enviar("error")
  })
  
  break   

  case "audio":		  
  if (args.length < 1) return enviar('Escribe el nombre')
  enviar(respuesta.espere)
  playi = body.slice(7)
  anu = await fetchJson(`https://trevorestapi.onrender.com/api/download/ytmp3?url=https://www.youtube.com/watch?v=7AlAYttGnAg&apikey=clover`)  
   if (anu.error) return enviar(anu.error)
   break

            case "ping":
enviar(`🎭 velocidad de respuesta ${latensi.toFixed(4)} segundos `)
break

            case 'ytmp3': case 'ytaudio': //credit: Ray Senpai ❤️ https://github.com/EternityBots/Nezuko
if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) throw `Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`
const audio=await xeonaudp3.mp3(text)
await anita.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break




            //PERFIL//

case "perfil":
try {
ppimg = await anita.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
} catch(e) {
ppimg = logo
}
perfil = await getBuffer(ppimg)
enviar(respuesta.espere)
try {
anita.sendMessage(from, {
image: perfil,
caption: `
🎭 Aqui está su informacion

☆ Name: ${pushname}
☆ Número: ${sender.split("@")[0]}
☆ Wa.me: https://wa.me/${sender.split("@")[0]}
☆ Grupo: ${groupName}
`
}, {quoted: info})
} catch(e) {
console.log(e)
enviar(respuesta.error)
}
break

//GRUPOS//
            case "infogp":
              if (!isGroup) return enviar(respuesta.grupos)
              if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
              enviar(`
              ╭─────────────◆ 
              ┃✯----�𝑰𝑵𝑭𝑶 𝑮𝑹𝑼𝑷𝑶�----⦿
              ┃ ✯╭──────────◆
              ┃ ✯│▢𝑁𝑂𝑀𝐵𝑅𝐸: ${groupName}
              ┃ ✯│▢𝐷𝐸𝑆𝐶𝑅𝐼𝑃𝐶𝐼𝑂𝑁: ${groupDesc}
              ┃ ✯│▢𝐼𝐷: ${from}
              ┃ ✯│▢𝐹𝐸𝐶𝐻𝐴: ${colom}
              ┃ ✯│▢𝐻𝑂𝑅𝐴: ${hora}
              ┃ ✯╰───────────◆
              ╰━━━━━━━━━━━──⊷
              `)
              break

              case "inspect":
                try {
                  if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
                    return enviar(respuesta.Iv);
                  if (!q) return enviar("Falta el link de un grupo");
                  cos = args[0];
                  var net = cos.split("https://chat.whatsapp.com/")[1];
                  if (!net) return enviar("asegúrese de que sea un enlace https://whatsapp.com/");
                  jids = [];
                  let {
                    id,
                    owner,
                    subject,
                    subjectOwner,
                    desc,
                    descId,
                    participants,
                    size,
                    descOwner,
                    descTime,
                    creation,
                  } = await cnf.query({
                    json: ["query", "invite", net],
                    expect200: true,
                  });
                  let par = `*Id* : ${id}
        ${owner ? `*Creador* : @${owner.split("@")[0]}` : "*Creador* : -"}
        *Nombre de el grupo* : ${subject}
        *Fecha de creación de el grupo : ${formatDate(creation * 1000)}
        *Número de miembros* : ${size}
        ${desc ? `*Desc* : ${desc}` : "*Desc *: no hay"}
        *Id desc* : ${descId}
        ${
          descOwner
            ? `*Desc modificado por* : @${descOwner.split("@")[0]}`
            : "*Descripción modificada by* : -"
        }\n*Datos* : ${
                    descTime ? `${formatDate(descTime * 1000)}` : "-"
                  }\n\n*Saved contacts*\n`;
                  for (let y of participants) {
                    par += `> @${y.id.split("@")[0]}\n*Admin* : ${
                      y.isAdmin ? "Yes" : "No"
                    }\n`;
                    jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
                  }
                  jids.push(
                    `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
                  );
                  jids.push(
                    `${
                      descOwner
                        ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                        : "-"
                    }`
                  );
                  cnf.sendMessage(from, par, text, {
                    quoted: mek,
                    contextInfo: { mentionedJid: jids },
                  });
                } catch {
                  enviar("Link inválido");
                }
                break





              case "gplink":
if (!isGroup) return enviar(respuesta.grupos)
if (!isGroupAdmins) return enviar(respuesta.admin)
if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
const link = await anita.groupInviteCode(from)
enviar(`🎭 Link de grupo : https://chat.whatsapp.com/${link} `)
break

case "resetlink":
if (!isGroup) return enviar(respuesta.grupos)
if (!isGroupAdmins) return enviar(respuesta.admin)
if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
try {
await anita.groupRevokeInvite(from)
enviar("🎭 El link de invitación se restableció correctamente ✓ ")
} catch(e) {
console.log(e)
enviar(respuesta.erro)
}
break

case "salir":
if(!isOwner) return enviar(respuesta.dono)
if (!isGroup) return enviar(respuesta.grupos)
enviar("Está bien ... Lo siento si no pude ayudarte con lo que necesitabas.... Adiós😔")
await delay(1000)
try {
await anita.groupLeave(from)
} catch(e) {
console.log(e)
enviar(respuesta.erro)
}
break


case "promover":
if (!isGroup) return enviar(respuesta.grupos)
if (!isGroupAdmins) return enviar(respuesta.admin)
if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
if (q < 1) return enviar("🎭 ¿Dónde está el número? ")
if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
try {
anita.groupParticipantsUpdate(from, [`${q}@s.whatsapp.net`], "promote")
enviar(`🎭 ${q} Promovido con éxito a admin `)
} catch(e) {
console.log(e)
enviar(respuesta.error)
}
break

case 'tagall':
case 'invocar':
case 'hidetag':
if (!isGroup) return enviar(respuesta.grupos)
if (!isGroupAdmins) return enviar(respuesta.admin)
if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
members_id = []
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? anita.sendMessage(from, {
text: '@12345678901', contextInfo: {
"mentionedJid": memberr
}}): anita.sendMessage(from, {
text: teks.trim(), contextInfo: {
"mentionedJid": memberr
}}, {
quoted: info
})
}
teks = `\n\n${args.length > 0 ? `\n ➣ [${q}]\n\n`: ''}$\n`
for (let mem of groupMembers) {
teks += `♧ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
mentions(teks, members_id, true)
break


case 'antilink':
  if (!isGroupAdmins) return enviar(respuesta.admin)
  if (!isBotGroupAdmins) return enviar(respuesta.botadmin)
            if (args.length < 1) return enviar('digite 1 para ativar o 0 para desativar ')
            if (Number(args[0]) === 1) {
              if (isAntiLink) return enviar('Anti-Link está activo')
              antilink.push(from)
              fs.writeFileSync('./archivos/antilink.json', JSON.stringify(antilink))
              enviar('Anti-link estaba activo en el grupo ✔️')
            } else if (Number(args[0]) === 0) {			
              antilink.splice(from, 1)
              fs.writeFileSync('./archivos/antilink.json', JSON.stringify(antilink))
              enviar('El antilink se ha deshabilitado correctamente en este grupo✔️')
            } else {
              enviar('1 para activar, 0 para desactivar ')
            }
            break
              

              //IMAGENES//
            
            case 'loli' :{
            waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/loli?apikey=clover')
            templateMassage = {
            image: {url:waifuddd.data.url,
            quoted: info},
            caption: 'eres un(a) lolicon?🤔!',
            footer: "ꪶ͓Ckev",
            //templateButtons: templateButtons
            }
            anita.sendMessage(from, templateMassage)
            }
            break
            
            case 'neko':{
            waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
            templateMassage = {
            image: {url:waifuddd.data.url,
            quoted: info},
            caption: 'Neko!',
            footer: "ꪶ͓Ckev",
            }
            anita.sendMessage(from, templateMassage)
            }
            break
            
            case 'waifu':{
              waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/waifu?apikey=clover')
              templateMassage = {
              image: {url:waifuddd.data.url,
              quoted: info},
              caption: 'waifu!',
              footer: "ꪶ͓Ckev",
              }
              anita.sendMessage(from, templateMassage)
              }
              break

            case 'waifu2':{
            waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
            templateMassage = {
            image: {url:waifuddd.data.url,
            quoted: info},
            caption: 'waifu!',
            footer: "ꪶ͓Ckev",
            }
            anita.sendMessage(from, templateMassage)
            }
            break

            case 'wallpaperaesthetic':{
              waifuddd = await axios.get('https://trevorestapi.onrender.com/api/wallpaper/aesthetic?apikey=clover')
              templateMassage = {
              image: {url:waifuddd.data.url,
              quoted: info},
              caption: 'wallpaper!',
              footer: "ꪶ͓Ckev",
              }
              anita.sendMessage(from, templateMassage)
              }
              break

              case 'wallpaperanime':{
                waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/anime?apikey=clover')
                templateMassage = {
                image: {url:waifuddd.data.url,
                quoted: info},
                caption: 'wallpaper!',
                footer: "ꪶ͓Ckev",
                }
                anita.sendMessage(from, templateMassage)
                }
                break

                case 'wallpapersatanic':{
                  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/wallpaper/satanic?apikey=clover')
                  templateMassage = {
                  image: {url:waifuddd.data.url,
                  quoted: info},
                  caption: 'wallpaper!',
                  footer: "ꪶ͓Ckev",
                  }
                  anita.sendMessage(from, templateMassage)
                  }
                  break

                  case 'wallpaperciberspace':{
                    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/wallpaper/cyberspace?apikey=clover')
                    templateMassage = {
                    image: {url:waifuddd.data.url,
                    quoted: info},
                    caption: 'wallpaper!',
                    footer: "ꪶ͓Ckev",
                    }
                    anita.sendMessage(from, templateMassage)
                    }
                    break

                case 'wallpapergamer':{
                  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/wallpaper/gaming?apikey=clover')
                  templateMassage = {
                  image: {url:waifuddd.data.url,
                  quoted: info},
                  caption: 'wallpaper!',
                  footer: "ꪶ͓Ckev",
                  }
                  anita.sendMessage(from, templateMassage)
                  }
                  break


//ＷＡＩＦＵＳ

case 'yotsuba':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/yotsuba?apikey=clover')
  templateMassage = {
  image: {url:waifuddd.data.url,
  quoted: info},
  caption: 'yotsuba!',
  footer: "ꪶ͓Ckev",
  }
  anita.sendMessage(from, templateMassage)
  }
  break

  case 'shinomiya':{
    enviar('Un momento porfavor')
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/shinomiya?apikey=clover')
    templateMassage = {
    image: {url:waifuddd.data.url,
    quoted: info},
    caption: 'shinomiya !',
    footer: "ꪶ͓Ckev",
    }
    anita.sendMessage(from, templateMassage)
    }
    break

    case 'yumeko':{
      enviar('Un momento porfavor')
      waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/yumeko?apikey=clover')
      templateMassage = {
      image: {url:waifuddd.data.url,
      quoted: info},
      caption: 'yumeko !',
      footer: "ꪶ͓Ckev",
      }
      anita.sendMessage(from, templateMassage)
      }
      break

      case 'tejina':{
        enviar('Un momento porfavor')
        waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/tejina?apikey=clover')
        templateMassage = {
        image: {url:waifuddd.data.url,
        quoted: info},
        caption: 'tejina !',
        footer: "ꪶ͓Ckev",
        }
        anita.sendMessage(from, templateMassage)
        }
        break

        case 'chiho':{
          enviar('Un momento porfavor')
          waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/chiho?apikey=clover')
          templateMassage = {
          image: {url:waifuddd.data.url,
          quoted: info},
          caption: 'chiho !',
          footer: "ꪶ͓Ckev",
          }
          anita.sendMessage(from, templateMassage)
          }
          break


          case 'boruto':{
            enviar('Un momento porfavor')
            waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/boruto?apikey=clover')
            templateMassage = {
            image: {url:waifuddd.data.url,
            quoted: info},
            caption: 'Por bruto digo Boruto !',
            footer: "ꪶ͓Ckev",
            }
            anita.sendMessage(from, templateMassage)
            }
            break


            case 'kaori':{
              enviar('Un momento porfavor')
              waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/kaori?apikey=clover')
              templateMassage = {
              image: {url:waifuddd.data.url,
              quoted: info},
              caption: 'kaori !',
              footer: "ꪶ͓Ckev",
              }
              anita.sendMessage(from, templateMassage)
              }
              break

              case 'shizuka':{
                enviar('Un momento porfavor')
                waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/shizuka?apikey=clover')
                templateMassage = {
                image: {url:waifuddd.data.url,
                quoted: info},
                caption: 'shizuk !',
                footer: "ꪶ͓Ckev",
                }
                anita.sendMessage(from, templateMassage)
                }
                break


                case 'kaga':{
                  enviar('Un momento porfavor')
                  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/kaga?apikey=clover')
                  templateMassage = {
                  image: {url:waifuddd.data.url,
                  quoted: info},
                  caption: ' kaga !',
                  footer: "ꪶ͓Ckev",
                  }
                  anita.sendMessage(from, templateMassage)
                  }
                  break


                  case 'kotori':{
                    enviar('Un momento porfavor')
                    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/kotori?apikey=clover')
                    templateMassage = {
                    image: {url:waifuddd.data.url,
                    quoted: info},
                    caption: 'Kotori !',
                    footer: "ꪶ͓Ckev",
                    }
                    anita.sendMessage(from, templateMassage)
                    }
                    break


                    case 'mikasa':{
                      enviar('Un momento porfavor')
                      waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/mikasa?apikey=clover')
                      templateMassage = {
                      image: {url:waifuddd.data.url,
                      quoted: info},
                      caption: 'mikasita !',
                      footer: "ꪶ͓Ckev",
                      }
                      anita.sendMessage(from, templateMassage)
                      }
                      break


                      case 'akiyama':{
                        enviar('Un momento porfavor')
                        waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/akiyama?apikey=clover')
                        templateMassage = {
                        image: {url:waifuddd.data.url,
                        quoted: info},
                        caption: 'akiyama !',
                        footer: "ꪶ͓Ckev",
                        }
                        anita.sendMessage(from, templateMassage)
                        }
                        break

                        case 'gremory':{
                          enviar('Un momento porfavor')
                          waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/gremory?apikey=clover')
                          templateMassage = {
                          image: {url:waifuddd.data.url,
                          quoted: info},
                          caption: 'Gremory !',
                          footer: "ꪶ͓Ckev",
                          }
                          anita.sendMessage(from, templateMassage)
                          }
                          break

                          case 'isuzu':{
                            enviar('Un momento porfavor')
                            waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/isuzu?apikey=clover')
                            templateMassage = {
                            image: {url:waifuddd.data.url,
                            quoted: info},
                            caption: 'isu !',
                            footer: "ꪶ͓Ckev",
                            }
                            anita.sendMessage(from, templateMassage)
                            }
                            break

                            case 'shina':{
                              enviar('Un momento porfavor')
                              waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/shina?apikey=clover')
                              templateMassage = {
                              image: {url:waifuddd.data.url,
                              quoted: info},
                              caption: 'shina !',
                              footer: "ꪶ͓Ckev",
                              }
                              anita.sendMessage(from, templateMassage)
                              }
                              break

                              case 'kagura':{
                                enviar('Un momento porfavor')
                                waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/kagura?apikey=clover')
                                templateMassage = {
                                image: {url:waifuddd.data.url,
                                quoted: info},
                                caption: ' kagura!',
                                footer: "ꪶ͓Ckev",
                                }
                                anita.sendMessage(from, templateMassage)
                                }
                                break

                                case 'shinka':{
                                  enviar('Un momento porfavor')
                                  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/shinka?apikey=clover')
                                  templateMassage = {
                                  image: {url:waifuddd.data.url,
                                  quoted: info},
                                  caption: 'shinka!',
                                  footer: "ꪶ͓Ckev",
                                  }
                                  anita.sendMessage(from, templateMassage)
                                  }
                                  break

                                  case 'eba':{
                                    enviar('Un momento porfavor')
                                    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/eba?apikey=clover ')
                                    templateMassage = {
                                    image: {url:waifuddd.data.url,
                                    quoted: info},
                                    caption: 'Eba !',
                                    footer: "ꪶ͓Ckev",
                                    }
                                    anita.sendMessage(from, templateMassage)
                                    }
                                    break

                                    case 'elaina':{
                                      enviar('Un momento porfavor')
                                      waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/elaina?apikey=clover ')
                                      templateMassage = {
                                      image: {url:waifuddd.data.url,
                                      quoted: info},
                                      caption: ' elaina!',
                                      footer: "ꪶ͓Ckev",
                                      }
                                      anita.sendMessage(from, templateMassage)
                                      }
                                      break

                                      case 'yuri':{
                                         enviar('Un momento porfavor')
                                        waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/yuri?apikey=clover ')
                                        templateMassage = {
                                        image: {url:waifuddd.data.url,
                                        quoted: info},
                                        caption: 'Yuri !',
                                        footer: "ꪶ͓Ckev",
                                        }
                                        anita.sendMessage(from, templateMassage)
                                        }
                                        break

                                        case 'erza':{
                                          enviar('Un momento porfavor')
                                          waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/erza?apikey=clover ')
                                          templateMassage = {
                                          image: {url:waifuddd.data.url,
                                          quoted: info},
                                          caption: 'Erza !',
                                          footer: "ꪶ͓Ckev",
                                          }
                                          anita.sendMessage(from, templateMassage)
                                          }
                                          break

                                          case 'hinata':{
                                            enviar('Un momento porfavor')
                                            waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/hinata?apikey=clover')
                                            templateMassage = {
                                            image: {url:waifuddd.data.url,
                                            quoted: info},
                                            caption: 'Hinata !',
                                            footer: "ꪶ͓Ckev",
                                            }
                                            anita.sendMessage(from, templateMassage)
                                            }
                                            break

                                            case 'minato':{
                                              enviar('Un momento porfavor')
                                              waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/minato?apikey=clover ')
                                              templateMassage = {
                                              image: {url:waifuddd.data.url,
                                              quoted: info},
                                              caption: ' Minato!',
                                              footer: "ꪶ͓Ckev",
                                              }
                                              anita.sendMessage(from, templateMassage)
                                              }
                                              break 
                                              
                                              case 'naruto':{
                                                enviar('Un momento porfavor')
                                                waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/naruto?apikey=clover ')
                                                templateMassage = {
                                                image: {url:waifuddd.data.url,
                                                quoted: info},
                                                caption: 'Naruto !',
                                                footer: "ꪶ͓Ckev",
                                                }
                                                anita.sendMessage(from, templateMassage)
                                                }
                                                break                                        


case 'sagiri':{
  enviar('Un momento porfavor')
 waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/sagiri?apikey=clover ')
 templateMassage = {
image: {url:waifuddd.data.url,
quoted: info},
 caption: 'Sagirii !',
footer: "ꪶ͓Ckev",
}
anita.sendMessage(from, templateMassage)
}
break

case 'nezuko':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/nezuko?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'Nezu !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

 case 'rize':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/rize?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'Rize !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

 case 'anna':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/ana?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'Anna !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

 case 'deidara':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/deidara?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'Deidara !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

 case 'yuki':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/yuki?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'Yuki !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break


 case 'ana':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/ana?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'no c we !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break


 case 'asuna':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/asuna?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'Azuna !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

 case 'ayuzawa':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/ayuzawa?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'Ayuzawa !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

 case 'chitoge':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/chitoge?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'chitoge !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

 case 'emilia':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/emilia?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'Emiria !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

 case 'hestia':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/hestia?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'Hestia !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

 case 'inori':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/inori?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'Inori !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

 case 'itachi':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/itachi?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'Itachi !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

 case 'madara':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/madara?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'Madera digo Madara\nNo te enojes cristal !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

 case 'sakura':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/sakura?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'Sakura !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

 case 'sasuke':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/sasuke?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'Sasuke !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

 case 'tsunade':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/tsunade?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'uff esas tetas\n Tsunade !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

 case 'onepiece':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/onepiece?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'onepiece !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

 case 'mobil':{
  enviar('Un momento porfavor')
  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/mobil?apikey=clover ')
  templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'Mobil?? !',
 footer: "ꪶ͓Ckev",
 }
 anita.sendMessage(from, templateMassage)
 }
 break

                                    case 'kaneki':{
                                      enviar('Un momento porfavor')
                                      waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/keneki?apikey=clover')
                                      templateMassage = {
                                      image: {url:waifuddd.data.url,
                                      quoted: info},
                                      caption: 'Kaneki !',
                                      footer: "ꪶ͓Ckev",
                                      }
                                      anita.sendMessage(from, templateMassage)
                                      }
                                      break

                                      case 'megumin':{
                                        enviar('Un momento porfavor')
                                        waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/megumin?apikey=clover')
                                        templateMassage = {
                                        image: {url:waifuddd.data.url,
                                        quoted: info},
                                        caption: 'exploosiooón !',
                                        footer: "ꪶ͓Ckev",
                                        }
                                        anita.sendMessage(from, templateMassage)
                                        }
                                        break

                                        case 'touka':{
                                          enviar('Un momento porfavor')
                                          waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/toukachan?apikey=clover')
                                          templateMassage = {
                                          image: {url:waifuddd.data.url,
                                          quoted: info},
                                          caption: 'Toukachan !',
                                          footer: "ꪶ͓Ckev",
                                          }
                                          anita.sendMessage(from, templateMassage)
                                          }
                                          break



                                      case 'akira':{
                                        enviar('Un momento porfavor')
                                        waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/akira?apikey=clover ')
                                        templateMassage = {
                                        image: {url:waifuddd.data.url,
                                        quoted: info},
                                        caption: 'Akira !',
                                        footer: "ꪶ͓Ckev",
                                        }
                                        anita.sendMessage(from, templateMassage)
                                        }
                                        break


                                        case 'itori':{
                                          enviar('Un momento porfavor')
                                          waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/itori?apikey=clover ')
                                          templateMassage = {
                                          image: {url:waifuddd.data.url,
                                          quoted: info},
                                          caption: 'Itori !',
                                          footer: "ꪶ͓Ckev",
                                          }
                                          anita.sendMessage(from, templateMassage)
                                          }
                                          break


                                          case 'kurumi':{
                                            enviar('Un momento porfavor')
                                            waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/kurumi?apikey=clover ')
                                            templateMassage = {
                                            image: {url:waifuddd.data.url,
                                            quoted: info},
                                            caption: 'Kurumi !',
                                            footer: "ꪶ͓Ckev",
                                            }
                                            anita.sendMessage(from, templateMassage)
                                            }
                                            break


                                            case 'miku':{
                                              enviar('Un momento porfavor')
                                              waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/miku?apikey=clover ')
                                              templateMassage = {
                                              image: {url:waifuddd.data.url,
                                              quoted: info},
                                              caption: 'Mikuu !',
                                              footer: "ꪶ͓Ckev",
                                              }
                                              anita.sendMessage(from, templateMassage)
                                              }
                                              break

                                              case 'pokemon':{
                                                 enviar('Un momento porfavor')
                                                waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/pokemon?apikey=clover')
                                                templateMassage = {
                                                image: {url:waifuddd.data.url,
                                                quoted: info},
                                                caption: 'Pokemon !',
                                                footer: "ꪶ͓Ckev",
                                                }
                                                anita.sendMessage(from, templateMassage)
                                                }
                                                break

                                                case 'cosplay':{
                                                  enviar('Un momento porfavor')
                                                 waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/cosplay?apikey=clover')
                                                 templateMassage = {
                                                 image: {url:waifuddd.data.url,
                                                 quoted: info},
                                                 caption: 'mm !',
                                                 footer: "ꪶ͓Ckev",
                                                 }
                                                 anita.sendMessage(from, templateMassage)
                                                 }
                                                 break

                                                


                                                case 'menuanime':  case 'anime':
                                                  enviar('Espera el menu se esta enviando')
                                                const menu = fs.readFileSync('./archivos/fotos/menuanime.jpg')
                                                
                                                const anime = `
  ╭─────────────◆ 
  ┃ ✯〘𝒜𝒩𝐼𝒯𝒜-𝐵𝒪𝒯〙
  ┃ ✯╭──────────◆
  ┃ ✯│▢ʜᴏʟᴀ:${pushname}
  ┃ ✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟kev
  ┃ ✯│▢ɴᴜᴍᴇʀᴏ:Wa.me/573001382233
  ┃ ✯│▢ғᴇᴄʜᴀ:${colom}, ${hora}
  ┃ ✯╰───────────◆
  ╰━━━━━━━━━━━──⊷
  
  ╭─────────────◆ 
  ┃✯----Aɴɪᴛᴀ-Bᴏᴛ----⦿
  ┃ ✯╭──────────◆
  ┃ ✯│▢ ℙ𝕆ℝ 𝔽𝔸𝕍𝕆ℝ ℕ𝕆 𝕊ℙ𝔸𝕄𝔼𝔸ℝ ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊
  ┃ ✯╰───────────◆
  ╰━━━━━━━━━━━──⊷
  ╭─────────────◆ 
  ┃ ✯-𝕄𝔼ℕ𝕌 𝔸ℕ𝕀𝕄𝔼
  ┃ ✯- ᴇꜱᴄʀɪʙᴇ ᴛᴀʟ ᴄᴏᴍᴏ ᴇꜱᴛᴀ
  ┃ ✯╭──────────◆
  ┃ ✯│${prefix} cosplay
  ┃ ✯│${prefix} yotsuna
  ┃ ✯│${prefix} shinomiya
  ┃ ✯│${prefix} yumeko
  ┃ ✯│${prefix} tejina
  ┃ ✯│${prefix} chiho
  ┃ ✯│${prefix} boruto
  ┃ ✯│${prefix} kaori
  ┃ ✯│${prefix} shizuka  
  ┃ ✯│${prefix} kaga
  ┃ ✯│${prefix} katori
  ┃ ✯│${prefix} mikasa
  ┃ ✯│${prefix} akiyama
  ┃ ✯│${prefix} gremory
  ┃ ✯│${prefix} isuzu
  ┃ ✯│${prefix} shina
  ┃ ✯│${prefix} kagura
  ┃ ✯│${prefix} shinka
  ┃ ✯│${prefix} eba
  ┃ ✯│${prefix} elaina
  ┃ ✯│${prefix} yuri
  ┃ ✯│${prefix} erza
  ┃ ✯│${prefix} hinata
  ┃ ✯│${prefix} minato
  ┃ ✯│${prefix} naruto
  ┃ ✯│${prefix} sagiri
  ┃ ✯│${prefix} nezuko
  ┃ ✯│${prefix} rize
  ┃ ✯│${prefix} anna
  ┃ ✯│${prefix} deidara
  ┃ ✯│${prefix} yuki
  ┃ ✯│${prefix} anna
  ┃ ✯│${prefix} asuna
  ┃ ✯│${prefix} ayuzawa
  ┃ ✯│${prefix} chitoge
  ┃ ✯│${prefix} emilia
  ┃ ✯│${prefix} hestia
  ┃ ✯│${prefix} inori
  ┃ ✯│${prefix} itachi
  ┃ ✯│${prefix} madara
  ┃ ✯│${prefix} sakura
  ┃ ✯│${prefix} sasuke
  ┃ ✯│${prefix} tsunade
  ┃ ✯│${prefix} onepiece
  ┃ ✯│${prefix} mobil
  ┃ ✯│${prefix} kaneki
  ┃ ✯│${prefix} megumin
  ┃ ✯│${prefix} toukachan
  ┃ ✯│${prefix} akira
  ┃ ✯│${prefix} itori
  ┃ ✯│${prefix} kurimi
  ┃ ✯│${prefix} miku
  ┃ ✯│${prefix} pokemon
  ┃ ✯╰───────────◆
  ╰━━━━━━━━━━━──⊷ 
  ╭─────────────◆ 
  ┃✯----Aɴɪᴛᴀ-Bᴏᴛ----⦿
  ╰━━━━━━━━━━━──⊷
  
  `
                                              enviarimagencap(menu,anime)
                                              break

                                          

                  //stickers//


                  case 'wolf':
                    if (args.length < 1) return enviar(`[  ×  ] Ejemplo :\n*${prefix}kev*`)
                    F = body.slice(6)
                    enviar(respuesta.espere)
                    anu = await getBuffer(`https://trevorestapi.onrender.com/api/textpro/wolf?text=trevo&text2=api&apikey=clover`)
                    anita.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo`, quoted: mek})
                    break
                 
                    case 'neon': 
					makell = args.join(" ")
					enviar(respuestawait)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=&theme=neon&apikey=`)
					buffer1 = await getBuffer(anu.result.url)
					cnf.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./cnf.jpg')})
					break


                    case 'reiniciar':
if (!isOwner) return enviar(respuesta.dono)
enviar(`Reiniciando...`)
await sleep(2000)
process.exit()
break

  //NSFW
  case 'lolis':
  case 'nsfwloli':{
    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/anime/nsfwloli?apikey=clover')
    templateMassage = {
    image: {url:waifuddd.data.url,
    quoted: info},
    caption: 'LOLI encerio?!',
    footer: "ꪶ͓Ckev",
    }
    anita.sendMessage(from, templateMassage)
    }
    break

    case 'nekos':
    case 'nsfwneko':{
      waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/neko?apikey=clover')
      templateMassage = {
      image: {url:waifuddd.data.url,
      quoted: info},
      caption: 'Neko!',
      footer: "ꪶ͓Ckev",
      }
      anita.sendMessage(from, templateMassage)
      }
      break

      case 'ahegao' :
      case 'nsfwahegao':{
        waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/ahegao?apikey=clover')
        templateMassage = {
        image: {url:waifuddd.data.url,
        quoted: info},
        caption: 'mmm!',
        footer: "ꪶ͓Ckev",
        }
        anita.sendMessage(from, templateMassage)
        }
        break
 
        case 'pussy':
        case 'nsfwpussy':{
          waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/pussy?apikey=clover')
          templateMassage = {
          image: {url:waifuddd.data.url,
          quoted: info},
          caption: 'pussy?!',
          footer: "ꪶ͓Ckev",
          }
          anita.sendMessage(from, templateMassage)
          }
          break

         case 'ero':
          case 'nsfwero':{
            waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/ero?apikey=clover')
            templateMassage = {
            image: {url:waifuddd.data.url,
            quoted: info},
            caption: 'ta bien!',
            footer: "ꪶ͓Ckev",
            }
            anita.sendMessage(from, templateMassage)
            }
            break

            case 'cum':
            case 'nsfwcum':{
              waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/cum?apikey=clover')
              templateMassage = {
              image: {url:waifuddd.data.url,
              quoted: info},
              caption: 'cum?!',
              footer: "ꪶ͓Ckev",
              }
              anita.sendMessage(from, templateMassage)
              }
              break

              case 'orgy':
              case 'nsfworgy':{
                waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/orgy?apikey=clover')
                templateMassage = {
                image: {url:waifuddd.data.url,
                quoted: info},
                caption: 'xd!',
                footer: "ꪶ͓Ckev",
                }
                anita.sendMessage(from, templateMassage)
                }
                break

                case 'bdsm' :
                case 'nsfwbdsm':{
                  waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/bdsm?apikey=clover')
                  templateMassage = {
                  image: {url:waifuddd.data.url,
                  quoted: info},
                  caption: ':v!',
                  footer: "ꪶ͓Ckev",
                  }
                  anita.sendMessage(from, templateMassage)
                  }
                  break

                  case 'yuri':
                  case 'nsfwyuri':{
                    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/yuri?apikey=clover')
                    templateMassage = {
                    image: {url:waifuddd.data.url,
                    quoted: info},
                    caption: 'hay esta!',
                    footer: "ꪶ͓Ckev",
                    }
                    anita.sendMessage(from, templateMassage)
                    }
                    break

                  case 'hentai' :
                  case 'nsfwhentai':{
                    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/hentai?apikey=clover')
                    templateMassage = {
                    image: {url:waifuddd.data.url,
                    quoted: info},
                    caption: 'rico!',
                    footer: "ꪶ͓Ckev",
                    }
                    anita.sendMessage(from, templateMassage)
                    }
                    break

                    case 'ass' :
                  case 'nsfwass':{
                    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/ass?apikey=clover')
                    templateMassage = {
                    image: {url:waifuddd.data.url,
                    quoted: info},
                    caption: 'mmm rico?!',
                    footer: "ꪶ͓Ckev",
                    }
                    anita.sendMessage(from, templateMassage)
                    }
                    break

                    case 'cuckold' :
                      case 'nsfwcuckold':{
                        waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/cuckold?apikey=clover')
                        templateMassage = {
                        image: {url:waifuddd.data.url,
                        quoted: info},
                        caption: '🤔👍?!',
                        footer: "ꪶ͓Ckev",
                        }
                        anita.sendMessage(from, templateMassage)
                        }
                        break

                        case 'femdom' :
                          case 'nsfwfemdom':{
                            waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/femdom?apikey=clover')
                            templateMassage = {
                            image: {url:waifuddd.data.url,
                            quoted: info},
                            caption: 'fem?🤔?!',
                            footer: "ꪶ͓Ckev",
                            }
                            anita.sendMessage(from, templateMassage)
                            }
                            break

                            case 'glasses' :
                              case 'nsfwglasses':{
                                waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/glasses?apikey=clover')
                                templateMassage = {
                                image: {url:waifuddd.data.url,
                                quoted: info},
                                caption: 'glass?🤔?!',
                                footer: "ꪶ͓Ckev",
                                }
                                anita.sendMessage(from, templateMassage)
                                }
                                break

                                case 'foot' :
                                  case 'nsfwfoot':{
                                    waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/foot?apikey=clover')
                                    templateMassage = {
                                    image: {url:waifuddd.data.url,
                                    quoted: info},
                                    caption: 'tus gustos no mios!',
                                    footer: "ꪶ͓Ckev",
                                    }
                                    anita.sendMessage(from, templateMassage)
                                    }
                                    break

                                   case 'gifs' :
                                     case 'nsfwgifs':{
                                       waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/gifs?apikey=clover')
                                        templateMassage = {
                                        image: {url:waifuddd.data.url,
                                        quoted: info},
                                        caption: 'tus gustos no mios!',
                                        footer: "ꪶ͓Ckev",
                                        }
                                        anita.sendMessage(from, templateMassage)
                                        }
                                        break                      
                        
                                        case 'mangas' :
                                         case 'nsfwmangas':{
                                            waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/manga?apikey=clover')
                                             templateMassage = {
                                             image: {url:waifuddd.data.url,
                                             quoted: info},
                                             caption: 'no lo se rick!',
                                             footer: "ꪶ͓Ckev",
                                             }
                                             anita.sendMessage(from, templateMassage)
                                             }
                                             break

                                             case 'panties' :
                                              case 'nsfwpanties':{
                                                 waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/panties?apikey=clover')
                                                  templateMassage = {
                                                  image: {url:waifuddd.data.url,
                                                  quoted: info},
                                                  caption: 'no lo se rick!',
                                                  footer: "ꪶ͓Ckev",
                                                  }
                                                  anita.sendMessage(from, templateMassage)
                                                  }
                                                  break     

 case 'tentacles' :
 case 'nsfwtentacles':{
 waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/tentacles?apikey=clover')
 templateMassage = {
 image: {url:waifuddd.data.url,
 quoted: info},
  caption: 'cada quien con sus Gustos!',
 footer: "ꪶ͓Ckev",
  }
 anita.sendMessage(from, templateMassage)
 }
 break 

 case 'zentai' :
  case 'nsfwzentai':{
     waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/zettai?apikey=clover')
      templateMassage = {
      image: {url:waifuddd.data.url,
      quoted: info},
      caption: 'no lo se rick!',
      footer: "ꪶ͓Ckev",
      }
      anita.sendMessage(from, templateMassage)
      }
      break 

      case 'thighs' :
        case 'nsfwthighs':{
           waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/thighs?apikey=clover')
            templateMassage = {
            image: {url:waifuddd.data.url,
            quoted: info},
            caption: 'no lo se rick!',
            footer: "ꪶ͓Ckev",
            }
            anita.sendMessage(from, templateMassage)
            }
            break   
                                             
            case 'blowjob' :
              case 'nsfwblowjob':{
                 waifuddd = await axios.get('https://trevorestapi.onrender.com/api/nsfw/blowjob?apikey=clover')
                  templateMassage = {
                  image: {url:waifuddd.data.url,
                  quoted: info},
                  caption: 'a!',
                  footer: "ꪶ͓Ckev",
                  }
                  anita.sendMessage(from, templateMassage)
                  }
                  break 
                  
//MEME//
                  case 'meme' :
                    case 'memes':{
                       waifuddd = await axios.get('https://trevorestapi.onrender.com/api/random/meme?apikey=clover')
                        templateMassage = {
                        image: {url:waifuddd.data.url,
                        quoted: info},
                        caption: 'a xd !',
                        footer: "ꪶ͓Ckev",
                        }
                        anita.sendMessage(from, templateMassage)
                        }
                        break 




//JUEGOS//




case 'gay':// Sem Fotos
const aleta = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confirmando su porcentaje...')
await delay(5000)
enviar(`${pushname} Su Porcentage de gay es de : ${aleta}%`)
break

case 'lindo':
const aletc = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confirmando su porcentaje...')
await delay(5000)
enviar(`${pushname} Su porcentaje de lindo(a) es de  : ${aletc}%`)
break

case 'feura': // Sem Fotos
const aletb = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confirmando su porcentaje...')
await delay(5000)
enviar(`${pushname} Su porcentaje de feo(a)es de : ${aletb}%`)
break

case 'delicia':
const aletd = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confirmando su porcentaje...')
await delay(5000)
enviar(`${pushname} Su porcentaje de delicioso(a) es de  : ${aletd}%`)
break

case 'pendejo':
const aletz = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confirmando su porcentaje...')
await delay(5000)
enviar(`${pushname} Su porcentaje de pendejo(a) es de  : ${aletz}%`)
break

case 'puta':
case 'puto':
const aletq = `${Math.floor(Math.random() * 105)}`
enviar('Aguarde, confirmando su porcentaje...')
await delay(5000)
enviar(`${pushname} Su porcentaje de puto(@) es de  : ${aletq}%`)
break

case  'casino':
a = '🍇'
b = '🍎'
c = '🍓'
e = '🍑'
f = '💰'
g = '🥝'
pw = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck = pw[Math.floor(Math.random() * pw.length)]
pw1 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck1 = pw1[Math.floor(Math.random() * pw1.length)]
pw2 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck2 = pw2[Math.floor(Math.random() * pw2.length)]
pw3 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck3 = pw3[Math.floor(Math.random() * pw3.length)]
pw4 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck4 = pw4[Math.floor(Math.random() * pw4.length)]
pw5 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck5 = pw5[Math.floor(Math.random() * pw5.length)]
pw6 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck6 = pw6[Math.floor(Math.random() * pw6.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
pw7 = [`${a}`, `${b}`, `${c}`, `${e}`, `${f}`, `${g}`]
luck7 = pw7[Math.floor(Math.random() * pw7.length)]
s = `┃ │  ${luck} │  ${luck1} │ ${luck2}`
a = `┃ │  ${luck3} │  ${luck4} │ ${luck5}`
m = `┃ │  ${luck6} │  ${luck7} │ ${luck7}`
u = `
╭──╼┥𝐂𝐀𝐒𝐈𝐍𝐎┝╾──╮
╽ ┌──────────┐ ┃
${s}
┃ ├──────────┤ ┃
${a}
┃ ├──────────┤ ┃
${m}
╿ └──────────┘ ╿
╰─┨⃞ 𝐂𝐀𝐒𝐒𝐈𝐍𝐎┠─╯`
enviar(`${u}`)
break



//la verdad no c//
  case 'video': 
  const good4 = fs.readFileSync('./archivos/fotos/ranita.mp4')
  const desc2 = 'hola wee'
  enviarvideos(good4,desc2)
  break

  case 'admin': 
  const admin = fs.readFileSync('./archivos/media/admin.mp3')
  enviaraudios(admin)
  break

  case 'onnichan': 
  const onnichan = fs.readFileSync('./archivos/media/Onichan.mp3')
  enviaraudios(onnichan)
  break

  case 'oh_tio': 
  const oh_tio = fs.readFileSync('./archivos/media/oh_tio.mp3')
  enviaraudios(oh_tio)
  break

  case 'pato': 
  const pato = fs.readFileSync('./pato.mp3')
  enviaraudios(pato)
  break



  

  case 'video2': 
  const good5 = fs.readFileSync('./archivos/fotos/ranita.mp4')
  enviarvideos(good5)
  break

  
  case 'pato2' :
    anita.sendMessage(from,{audio : fs.readFileSync('./pato.mp3'), mimetype: 'audio,mp4'},
    {quoted : live})
    break

    case 'sticker': 
  const good7 = fs.readFileSync('./archivos/fotos/logo.webp')
  enviarsticker(good7)
  break



  case 'menu' :
    case 'Menu' : 
    case 'Menú' :
      case 'help' : 
      case 'bot' : 
      


      case 'menu': 
      enviar('Menu cargando, espera porfavor')
  const good3 = fs.readFileSync('./archivos/fotos/menu.jpg')
  

  const kev = `

  ╭─────────────◆ 
  ┃ ✯〘𝒜𝒩𝐼𝒯𝒜-𝐵𝒪𝒯〙
  ┃ ✯╭──────────◆
  ┃ ✯│▢ʜᴏʟᴀ:${pushname}
  ┃ ✯│▢ᴏᴡɴᴇʀ:ᴏғᴄ➟kev
  ┃ ✯│▢ɴᴜᴍᴇʀᴏ:Wa.me/573001382233
  ┃ ✯│▢ғᴇᴄʜᴀ:${colom}, ${hora}
  ┃ ✯╰───────────◆
  ╰━━━━━━━━━━━──⊷
  
  ╭─────────────◆ 
  ┃✯----Aɴɪᴛᴀ-Bᴏᴛ----⦿
  ┃ ✯╭──────────◆
  ┃ ✯│▢ ℙ𝕆ℝ 𝔽𝔸𝕍𝕆ℝ ℕ𝕆 𝕊ℙ𝔸𝕄𝔼𝔸ℝ ℂ𝕆𝕄𝔸ℕ𝔻𝕆𝕊
  ┃ ✯╰───────────◆
  ╰━━━━━━━━━━━──⊷

  ╭─────────────◆ 
  ┃✯----Aɴɪᴛᴀ-Bᴏᴛ----⦿
  ┃ ✯╭──────────◆
  ┃ ✯│▢𝕄𝔼ℕ𝕌
  ┃ ✯│▢𝕄𝔼ℕ𝕌 𝔸ℕ𝕀𝕄𝔼 (.menuanime)
  ┃ ✯╰───────────◆
  ╰━━━━━━━━━━━──⊷
  ╭─────────────◆ 
  ┃✯----Aɴɪᴛᴀ-Bᴏᴛ----⦿
  ┃ ✯╭──────────◆
  ┃ ✯│▢${prefix} menu
  ┃ ✯│▢${prefix} hola
  ┃ ✯│▢${prefix} welcome
  ┃ ✯│▢${prefix} salir
  ┃ ✯│▢${prefix} ping
  ┃ ✯│▢${prefix} creador
  ┃ ✯│▢${prefix} playmp4
  ┃ ✯│▢${prefix} playmp3
  ┃ ✯╰───────────◆
  ╰━━━━━━━━━━━──⊷

  ╭─────────────◆ 
  ┃✯- 𝔾ℝ𝕌ℙ𝕆𝕊
  ┃ ✯╭──────────◆
  ┃ ✯│${prefix} gplink
  ┃ ✯│${prefix} resetlink
  ┃ ✯│${prefix} antilink (1 activar 0 desactivar)
  ┃ ✯│${prefix} ban (ejemplo: @kev)
  ┃ ✯│${prefix} promover @
  ┃ ✯│${prefix} welcome 
  ┃ ✯│${prefix} add   (numero)
  ┃ ✯│${prefix} hidetag , invocar ,tagall (le puedes agregar el mensaje que quieras)
  ┃ ✯│${prefix} infogp
  ┃ ✯│${prefix} perfil 
  ┃ ✯╰───────────◆
  ╰━━━━━━━━━━━──⊷

  ╭─────────────◆ 
  ┃✯- 𝕁𝕌𝔼𝔾𝕆𝕊
  ┃ ✯╭──────────◆
  ┃ ✯│${prefix} gay 
  ┃ ✯│${prefix} lindo
  ┃ ✯│${prefix} retos o aleatorio
  ┃ ✯│${prefix} feura
  ┃ ✯│${prefix} delicia
  ┃ ✯│${prefix} pendejo
  ┃ ✯│${prefix} puto o puta (la que quieras)
  ┃ ✯│${prefix} humornegro
  ┃ ✯╰───────────◆
  ╰━━━━━━━━━━━──⊷

  ╭─────────────◆ 
  ┃✯- ℝ𝔼𝕃𝔸𝕋𝕆𝕊 𝕐 𝔽ℝ𝔸𝕊𝔼𝕊
  ┃ ✯ 𝕃𝔸𝕊 ℍ𝕀𝕊𝕋𝕆ℝ𝕀𝔸𝕊 𝕌ℕ ℙ𝕆ℚ𝕌𝕀𝕋𝕆 ℂ𝕌𝕋ℝ𝔼𝕊 
  ┃ ✯ 𝔼𝕊 𝕋𝕌 𝔼𝕃𝔼ℂℂ𝕀𝕆ℕ
  ┃ ✯╭──────────◆
  ┃ ✯│${prefix} piropo
  ┃ ✯│${prefix} frases o fraseromantica
  ┃ ✯│${prefix} historia o terror
  ┃ ✯╰───────────◆
  ╰━━━━━━━━━━━──⊷

  ╭─────────────◆ 
  ┃✯- 𝕀𝕄𝔸𝔾𝔼ℕ𝔼𝕊
  ┃ ✯╭──────────◆
  ┃ ✯│${prefix} waifu
  ┃ ✯│${prefix} waifu2
  ┃ ✯│${prefix} loli
  ┃ ✯│${prefix} neko
  ┃ ✯│${prefix} wallpaperanime
  ┃ ✯│${prefix} wallpaperaesthetic
  ┃ ✯│${prefix} wallpapergamer
  ┃ ✯│${prefix} wallpapersatanic
  ┃ ✯│${prefix} wallpaperciberspace
  ┃ ✯╰───────────◆
  ╰━━━━━━━━━━━──⊷
  ----------------- 
  ╭─────────────◆ 
  ┃✯- ℕ𝕊𝔽𝕎
  ┃ ✯╭──────────◆
  ┃ ✯│𝔼𝕁𝔼𝕄ℙ𝕃𝕆 (.nsfwero)
  ┃ ✯│${prefix} nsfwahegao
  ┃ ✯│${prefix} nsfwass
  ┃ ✯│${prefix} nsfwloli
  ┃ ✯│${prefix} nsfwneko
  ┃ ✯│${prefix} nsfwpussy
  ┃ ✯│${prefix} nsfwyuri
  ┃ ✯│${prefix} nsfwero
  ┃ ✯│${prefix} nsfwbdsm
  ┃ ✯│${prefix} nsfworgy
  ┃ ✯│${prefix} nsfwcum
  ┃ ✯│${prefix} nsfwhentai
  ┃ ✯│${prefix} nsfwbdsm
  ┃ ✯│${prefix} nsfwmangas
  ┃ ✯│${prefix} nsfwfoot
  ┃ ✯│${prefix} nsfwgifs
  ┃ ✯│${prefix} nsfwglasses
  ┃ ✯│${prefix} nsfwcuckold
  ┃ ✯│${prefix} nsfwfemdom
  ┃ ✯│${prefix} nsfwpanties
  ┃ ✯│${prefix} nsfwtentacles
  ┃ ✯│${prefix} nsfwzentai
  ┃ ✯│${prefix} nsfwthighs
  ┃ ✯│${prefix} nsfwblowjob
  ┃ ✯╰───────────◆
  ╰━━━━━━━━━━━──⊷
  ╭─────────────◆ 
  ┃✯----Aɴɪᴛᴀ-Bᴏᴛ----⦿
  ╰━━━━━━━━━━━──⊷


  `
enviarimagencap(good3,kev)
break

case 'documento':
  const mama = fs.readFileSync('./archivos/fotos/msvcp.zip')
  enviardocumentos(mama)
  break

case 'documento2':
  anita.sendMessage(from,{ document : fs.readFileSync('./archivos/fotos/msvcp.zip') , 
mimetype: 'application/octel-stream'},{quoted : live }) 
break

case 'retos':
case 'aleatorio':
  const ale = ['Pasa el pack de una hormiga',
  'Dile a tus amigos que te vas a vivir a EU y mándame una captura de lo que te haya dicho',
  'Grita desde la ventana que quieres mamar y mándame el vídeo','Escribe el nombre de tu crush',
  'Debes de poner el nombre de mi creador en tu estado de WhatsApp, sin dar contexto',
  'Envíame una fotografía tuya',
  'Debes de dibujar en alguna parte de tu cuerpo el nombre de algún integrante del grupo, luego realiza una foto y envíala',
  'Hazte una foto dándole un beso a una Televisión',
  'Mándame una fotografía en ropa interior',
  'Escribe en tu estado de WhatsApp que te gusta comer tierra',
  'Debes de poner la fotografía de un participante del grupo que sea del sexo opuesto al tuyo en tu perfil de WhatsApp durante 3 días 📸📸',
  'Tienes que mandar un audio cantando la canción: Un pato que va cantando alegremente cua cua 🦆',
  "Envía un mensaje a tu ex y dile todavía me gustas", 'Envía un audio diciendo amo a a todos ','Dile a tu crush que la amas y pasa captura al grupo", "Envía un audio cantando', 
  'Envía una foto en la que salgas tu sin taparte la cara ni nada", "Envía un video bailando', 
  'Invita a personas que no conoces a tomarse una selfi contigo y luego envíalo al grupo', 
  "Elija algunos números aleatorios de sus contactos y envíeles un mensaje de texto con el mensaje 'Estoy embarazad@'.", 
  "¡Tome cualquier bebida que esté cerca de usted, luego mézclela con chile y beba!", 
  "Tome un número aleatorio de sus contactos, llámelo y dígale 'te amo' ", 
  "Compre la comida más barata en la cafetería (o compre una botella de agua) y diga entre sollozos a sus compañeros de clase: 'Esta ... es la comida más cara que he comprado)' ", 
  " Compre una botella de coca cola y salpique flores con ella frente a la multitud."," Párese cerca del refrigerador, cierre los ojos, elija alimentos al azar en él, incluso cuando coma, sus ojos deben estar cerrados.", 
  " De pie en medio de la cancha de baloncesto y gritando: 'TE AMO MI PRÍNCIPE / PRINCESA' ", 
  "Presenta tus respetos a alguien de la clase y luego di: 'Estoy a su servicio, Majestad' ", 
  " Caminando aplaudiendo y cantando la canción 'Feliz cumpleaños' de la clase al pasillo.", 
  " Arrodíllate sobre una rodilla y di '¿Cásate conmigo?' la primera persona en entrar a la habitación.", 
  " Haz un tocado absurdo con tejido, sea lo que sea, sigue pidiendo poses frente a la cámara, sigue subiendo", 
  "Dile 'ERES HERMOSA / MUY HERMOSA, NO MIENTES' a la chica que crees que es la más bonita de esta clase.", 
  " Dile a alguien en clase: 'Primero me dijeron que era tu gemelo, nos separamos y luego me sometí a una cirugía plástica. Y esto es lo más serio que he dicho' ", 
  " Tirar el cuaderno de alguien a la basura, frente a sus ojos, diciendo 'Este libro nadie puede entender' ", 
  " ¡Arranca el pelo de tu propia pierna 3 veces!", 
  " Chatea con tus padres, diles que los extrañas con emoticonos tristes.", 
  " Intente buscar en Google cosas aterradoras o ridículas como tripofobia, etc.", 
  " Siéntese relajado en medio de la cancha de baloncesto mientras finge que es una playa para tomar el sol.", 
  " Llena tu boca de agua y tienes que aguantar hasta dos rondas, si te ríes y derramas o bebes, entonces tienes que volver a llenar y agregar una ronda más.", 
  " Salude a la primera persona que entre en esta sala y diga '¡Bienvenido a Quién quiere ser millonario!' ", 
  "Envía un mensaje de texto a tus padres '¡Hola, hermano! ¡Acabo de comprar el último número de la revista Playboy!' ", 
  "Envíales un mensaje de texto a tus padres: 'Mamá, papá, ya sé que soy un niño adoptado del orfanato. No ocultes esto más'.", 
  " Envía tres números aleatorios en tus contactos y escribe 'Me acabo de convertir en modelo de la revista Playboy' ", 
  " ¡Come una cucharada de salsa de soja dulce y salsa de soja!", 
  " Come algo pero no uses las manos.", 
  " Enojarse con sus amigos que no vienen a pesar de que tienen una cita para jugar 'Verdad o Reto' juntos", 
  "¡Rompe el huevo con la cabeza!", 
  "Coma alimentos que se hayan mezclado y tendrán un sabor extraño, pero asegúrese de que los alimentos no sean dañinos para la salud a largo o corto plazo.", 
  "Baila como Girls 'Generation para los niños frente a la clase, o baila como Super Junior para las niñas.", 
  "Izar el asta de la bandera sin la bandera.", 
  "Hablando de la persona que te gusta, de tus amigos más cercanos, del sexo opuesto que no conoces en absoluto y cosas por el estilo.", 
  "Copia los peinados de todos tus amigos.", 
  "Cantando la canción HAI TAYO frente a mucha gente mientras baila", 
  "Cante la canción Baby Shark en voz alta en el aula.", 
  "Pedir prestado algo a los vecinos", 
  "Pide la firma de uno de los profesores más feroces mientras dices 'Eres verdaderamente la persona que más admiro en el mundo' ", 
  " Pídale dinero a alguien (al azar ) en la calle diciendo 'No tengo dinero para tomar un angkot'.", 
  " Beba algo que haya sido preparado / acordado, pero asegúrese de que no sea peligroso, puede ser como beber jarabe mezclado con salsa de soja.", 
  " Hablando con el emoticono-miedo de la persona que te gusta, está bien conversar con lo que quieras, a través de cualquier medio que puedas.", 
  " Canta tu película de Disney favorita fuera de casa mientras gritas.", 
  " Nombra de 1 azul a 20 azules rápidamente y no debes cometer ningún error. Si está mal, debe repetirse desde el principio.", 
  " Póngase una corona de papel de copia y diga a todos en la habitación 'HONOR AL REY' mientras señala a cada persona con una regla.", 
  " Vuelve a ponerte los pantalones hasta la mañana siguiente.", 
  " Abraza a la persona que NO te agrada en clase y di: 'Muchas gracias por ser la mejor persona para mí' ", 
  " Ve a un campo amplio, luego corre lo más rápido posible mientras dices 'Estoy loco, estoy loco' ", 
  " Elija una flor y luego conéctela a alguien que no conoce (debe ser del sexo opuesto)", 
  " Elige a una persona al azar en la calle, luego di 'No sabes que eres hermosa' (ala One Direction)", 
  " Fingir estar poseído ejm: poseído por un tigre, etc.", 
  " Pídale que silbe ya que su boca está nuevamente llena de comida.", 
  " Pide ser un mesero para que te sirva con tus amigos para el almuerzo.", 
  " Dígales que usen calcetines para hacer guantes.", 
  "Dígales que usen el sombrero más extraño / el casco más absurdo durante la próxima ronda.", 
  "Llama a tu mamá y dile 'mamá, quiero casarme lo antes posible' ", 
  "Llama a tu ex y di 'te extraño' ", 
  "Cambia de ropa con la persona más cercana hasta la siguiente ronda.", 
  "Actualice el estado en WhatsApp lo que sea con palabras que comiencen con 'S' ", 
  "Sube un video de canto a YouTube que esté cantando canciones populares.", 
  "Colorea tus uñas de las manos y de los pies de diferentes colores durante una semana.", 
  "come 2 cucharadas de arroz sin guarniciones", 
  "Envie el emoji '🦄💨' cada vez que escriba en un grupo 1 día", 
  "diga '¡Bienvenido a Quién quiere ser millonario!' a todos los grupos que tienes", 
  "canta el coro de la última canción que tocaste", 
  "Envia un audio de voz a tu ex / enamorado / novia, dile hola (nombre), quiero llamar, solo un momento. Te Extraño🥺👉🏼👈🏼 ", 
  "Dile a la gente al azar: Primero me dijeron que era tu gemelo, nos separamos y luego me sometí a una cirugía plástica. Y esto", 
  "¡Haz 1 rima para el primer jugador!", 
  "cuenta tu propia versión de cosas vergonzosas", 
  "cambiar el nombre a 'Gay' durante 24 horas", 
  "¡Menciona tu tipo de novia!", 
  "Di 'Estoy enamorado de ti, ¿quieres ser mi novio o no?' al último sexo opuesto con el que conversaste en WhatsApp, espera a que responda", 
  "Háblale a tu ex por WhatsApp y dile 'te amo, por favor vuelve'. Manda una captura de pantalla como evidencia de reto cumplido!"]
  const ale2 = Math.floor(Math.random()*ale.length)
  const ale3 = ale[ale2]
  enviartexto(ale3)
  break



case 'fraseromantica': case 'frases' : 
  const frase = ['Hace un año no sabía quién eras, y hoy no sabría cómo vivir sin ti.' , 'Tú eres mi meta, el camino que decidí tomar, la mujer de mi vida, mi vida sin más.' , 'Si lloras, te regalaré mis sonrisas. Si tienes frío, te regalaré mi calor.' , ' Si te duele, yo te curaré. Vida mía, siempre te protegeré.' , 'Por arte de magia, un día todos mis pensamientos se centraron en ti.' , 'Tumbémonos juntos, susurrémonos cosas lindas al oído, sonriamos cogidos de la mano, y todas las noches dormiré contigo.' , 
  'Pareces el brujo del tiempo, contigo pasa tan deprisa y sin ti tan lento…' , 'Con un beso tuyo puedo tocar las estrellas.' , ' No hay paisaje más hermoso que el que encuentro en la mirada de tus ojos.' , 'Tú me diste la luz, y mientras duerma contigo no le tendré miedo a la noche.' , ' Me cautivaste con tu sonrisa, me enamoraste con tu corazón.' , ' Tu voz es la sinfonía más bonita que he escuchado en toda mi vida.' , ' Sabrás que le amas porque hará que dejes de sufrir por el pasado, que vivas el presente y que dejes de preocuparte por el futuro.' ,' Saboreemos nuestros cuerpos, amémonos sin complejos, convirtamos esta historia, en un cuento de amor eterno.' , ' Tu amor nació en mi corazón, y ahora recorre mis venas llenándome de ilusión.' , ' Yo no fui quien escogió amarte, sino mi alma, y me dijo que te amaría eternamente.' , ' No tienes ni idea de cómo me tiemblan las piernas cada vez que me miras…' , 'i me dices «Te quiero», te regalo mi corazón entero.']
  const frase2 = Math.floor(Math.random()*frase.length)
  const frase3 = frase[frase2]
  enviartexto(frase3)
  break

case 'historia': case 'terror':
  const miedo = ['Una familia, compuesta por dos pequeños y sus padres, viajaban por carretera hacia [....] cuando el coche se les averió. Los padres salieron a buscar ayuda y, para que los niños no se aburrieran, les dejaron con la radio encendida. Cayó la noche y los padres seguían sin volver cuando escucharon una inquietante noticia en la radio: un asesino muy peligroso se había escapado de un centro penitenciario cercano a [....] y pedían que se extremaran las precauciones.Las horas pasaban y los padres de los niños no regresaban. De pronto, empezaron a escuchar golpes sobre sus cabezas. “Poc, poc, poc”. Los golpes, que parecían provenir de algo que golpeaba la parte de arriba del coche, eran cada vez más rápidos y más fuertes. “POC, POC, POC”. Los niños, aterrados, no pudieron resistir más: abrieron la puerta y huyeron a toda prisa.Solo el mayor de los niños se atrevió a girar la cabeza para mirar qué provocaba los golpes. No debería haberlo hecho: sobre el coche había un hombre de gran tamaño, que golpeaba la parte superior del vehículo con algo que tenía en las manos: eran las cabezas de sus padres.' ,
  ' Hace unos años, en un campamento, hubo un grupo de jóvenes que, durante una excusión, se perdió. Tras varias horas perdidos, encontraron a un hombre solitario: llevaba un hacha a la espalda y no les daba buena espina pero, desesperados, le preguntaron cómo se llegaba al pueblo. A pesar de la primera impresión, el hombre resultó ser supergradable: les dijo que se llamaba Yoduloso y les acompañó hasta el pueblo, donde se despidió. Antes, se hizo una foto junto a los jóvenes.El grupo de jóvenes contó en el pueblo que el hombre que los había llevado hasta allí se llamaba Yoduloso, pero los vecinos de la localidad dijeron que aquello era imposible. El único Yoduloso que había habido en el pueblo falleció hace más de 100 años, y murió de una forma horrible: un grupo de niños jugaba a la pelota y se le escapó, y Yoduloso fue a por ella. Llevaba un hacha en la mano y tuvo la mala suerte de tropezar y cortarse su propia pierna. Murió desangrado.Los jóvenes escucharon incrédulos y pensaron que, incluso a pesar de las coincidencias del nombre y de que aquel señor también llevaba un hacha, era imposible que se trata de la misma persona. Sin embargo, cuando revelaron aquella foto que se habían hecho al llegar al pueblo, se percataron de algo que les hizo cambiar de parecer: Yoduloso había desaparecido de la fotografía.' ,
  ' Hace muchísimos años venía a los campamentos un joven llamado Manitou. Debido a su mal comportamiento, fue expulsado del campamento, y decidió vengarse. Durante toda la eternidad: aunque esto ocurrió hace muchísimo tiempo, Manitou sigue visitando los campamentos. Podemos saber que está cerca porque antes de su llegada puede escucharse un sonido similar al de un tambor.En ocasiones, al despertar, algunos niños se han dado cuenta de que les habían dibujado en la frente, o por el cuerpo, una letra M en color roja. Está pintada con sangre.' , 'Esta es la historia de una joven de [....], llamémosla Sara. De pequeña, Sara tenía miedo a la oscuridad, hasta que adoptó a un perro que le hacía compañía. Durante años, Sara dormía tranquila porque sabía que bajo la cama estaba su perro, y si tenía miedo solo tenía que extender la mano: entonces, el perro empezaba a lamerla hasta que se quedaba dormida.Así pasaron los años y Sara se hizo adulta. Una noche, en la radio, escuchó que cerca de [....] estaba en busca y captura un asesino muy peligroso. Sara, acompañada de su perro, no tenía miedo: se metió en la cama, extendió la mano hacia el borde y el perro, como todas las noches, empezó a lamerla.Durmió del tirón y, al despertar, le sorprendió que el perro no se hubiera cansado de lamerle la mano en toda la noche. O eso creía: al abrir los ojos, encontró al perro muerto sobre el suelo de la habitación. Bajo la cama, un hombre seguía lamiéndole la mano.',
  'Varias adolescentes habían ido a pasar la noche en casa de una amiga, aprovechando que sus padres estaban de viaje. Cuando apagaron las luces se pusieron a hablar de un viejo al que acababan de enterrar en un cementerio cercano. Se decía que lo habían enterrado vivo y que se le podía escuchar arañando el ataúd, intentando salir.Una de las chicas se burló de aquella idea, así que las otras la desafiaron a que se levantara y fuera a visitar la tumba. Como prueba de que había ido, tenía que clavar una estaca de madera sobre la tierra de la tumba. La chica se fue y sus amigas apagaron la luz otra vez y esperaron a que volviera.Pero pasó una hora, y otra más, sin que tuvieran noticias de su amiga. Se quedaron en la cama despiertas, cada vez más aterradas. Llegó la mañana y la chica no había aparecido. Aquel mismo día, los padres de la chica regresaron a casa y, junto al resto de padres, acudieron al cementerio. Encontraron a la chica tirada sobre la tumba… Muerta. Al agacharse para clavar la estaca en el suelo, había pillado también el bajo de su falda. Cuando intentó levantarse y no pudo, creyó que el viejo muerto la había agarrado. Murió del susto en el acto.',
  'Una adolescente está cuidando por primera vez a unos niños en una casa enorme y lujosa. Acuesta a los niños en el piso de arriba, y, cuando apenas se ha sentado delante de la televisión, suena el teléfono. A juzgar por su voz, el que llama es un hombre. Jadea, ríe de forma amenazadora y pregunta: “¿Has subido a ver a los niños?”.La canguro cuelga convencido de que sus amigos le están gastando una broma, pero el hombre vuelve a llamar y pregunta de nuevo: “¿Has subido a ver a los niños?”. Ella cuelga a toda prisa, pero el hombre llama por tercera vez, y esta vez dice: “¡Ya me he ocupado de los niños, ahora voy a por ti!”.La canguro está verdaderamente asustada. Llama a la policía y denuncia las llamadas amenazadoras. La policía pide que, si vuelve a llamar, intente distraerle al teléfono para que les de tiempo a localizar la llamada.Como era de esperar, el hombre llama de nuevo a los pocos minutos. La canguro le suplica que la deje en paz, y así le entretiene. Él acaba por colgar. De repente, el teléfono suena de nuevo, y a cada timbrazo el tono es más alto y más estridente. En esta ocasión, es la policía, que le da una orden urgente: “¡Salga de la casa inmediatamente! ¡Las llamadas vienen del piso de arriba!”.',
' Un grupo de amigas había decidido ir a [...] para pasar unos días. Se registraron en el hotel y subieron a su habitación a dejar el equipaje, pero notaron un olor peculiar, como si se les hubiera olvidado sacar la basura o no hubieran tirado de la cadena del váter. Sin embargo, todo parecía estar en orden, así que se fueron y no volvieron hasta la última hora de la noche.El olor había empeorado notablemente a lo largo del día y ya era casi insoportable, de modo que llamaron a mantenimiento para que localizara su origen. La persona que les mandaron miró debajo de las camas, dentro de los armarios, incluso olfateó los desagües y las ventilaciones, pero no pudo encontrar la fuente del olor. Al final, limpiaron la habitación con generosas cantidades de productos perfumados, pusieron la ventilación al máximo y desearon las buenas noches al grupo de amigas. La peste estaba, por el momento, enmascarada, y como ellas estaban agotadas, se fueron a la cama. Una de ellas escondió la cartera debajo del colchón, como acostumbraba a hacer en los hoteles.Todas durmieron hasta bien entrada la mañana: grandes rayos de sol entraban ya en la habitación, caldeándola en extremo. El hedor seguía presente y más potente que nunca. Una de las mujeres, ya bastante irritada, volvió a llamar al departamento de mantenimiento para quejarse. Luego llamó al director del hotel para quejarse un poco más. Un pequeño ejército de personal de dirección y mantenimiento se presentó en breve, y una vez más, rebuscaron por todas partes sin resultado. Sin embargo, todos estuvieron de acuerdo en que el olor era inaguantable, así que dirección ofreció cambiar a las amigas de habitación.Recogieron sus cosas para bajar al vestíbulo, pero cuando la señora que había escondido la cartera hurgó debajo del colchón, tocó algo que parecía sospechosamente una mano humana. Quitaron el colchón de encima de la cama y ahí, en un hueco practicado entre los muelles del somier, había un hombre muerto. Era evidente que lo habían asesinado en la habitación y el asesino lo había escondido entre el colchón y el somier. Había recortado una parte de los muelles del somier para que el cuerpo no formara un bulto en la cama.',
'Una niña de siete años se había quedado con su abuela en su pequeño piso porque sus padres se habían ido al cine. Todo fue normal, cenaron y se rieron un rato charlando juntas. A las diez de la noche, la abuela se puso a hacer labores de costura, y la niña se puso a ver la tele, pero de repente a la abuela le entró una sed increíble, y le dijo a su nieta si le podía traer un vaso de agua.-Está oscuro -dijo la niña.-No temas, sigue el pasillo, que justo al lado de la puerta del baño hay un interruptor.La niña se decidió, y al entrar al pasillo no veía nada porque estaba muy oscuro, por lo que se arrimó a una pared y fue palpando y tanteando a ciegas en busca de un interruptor. Al seguir andando y llegar al marco de la puerta del baño, se paró y siguió tanteando, y de repente notó como una mano huesuda intentaba arrastrarla a la oscuridad del baño. La niña logró apartarse y fue llorando a su abuela. Desde entonces, la niña está en tratamiento psicológico. ¿Que pasó, si solo estaban ellas dos en la casa y la abuela estaba en el salón cosiendo?',
'Lo que me dispongo a relatar es absolutamente verídico y relativamente reciente, me ocurrió a mí hace aproximadamente seis meses. A mí el mundo del espiritismo, las psicofonías y demás me produce mucha curiosidad, pero a la vez me asusta.Un compañero de clase me proporcionó un CD que tenía grabadas algunas psicofonías. Mi hermano me propuso llevarme un portátil para escuchar el CD mientras se duchaba, y así lo hicimos. Antes de escuchar la primera psicofonía una voz presentaba el CD y hacía una advertencia: “Nunca lo escuchen a oscuras”. En ese momento, para asustar a mi hermano, apagué la luz del cuarto de baño y él gritó: “¡Enciende la luz!”. Cuando la encendí, el disco ya no sonaba. Alguien le había dado al stop. Yo no fui, de eso estoy seguro porque tenía el dedo en el interruptor de la luz, y mi hermano tampoco, estaba dentro de la bañera y a más de dos metros del portátil. ¿Quién apagó las psicofonías? No lo sé, y no estoy seguro de querer saberlo.',
'Ted Martin y Sam Miller eran buenos amigos. Ambos pasaban mucho tiempo juntos. En esa noche en particular estaban sentados sobre una valla cerca de la oficina de correos hablando sobre nada en particular.Había un campo de nabos enfrente de la carretera. De repente vieron algo arrastrarse fuera del campo y ponerse en pie. Parecía un hombre, pero en la oscuridad resultaba difícil saberlo a ciencia cierta. Luego desapareció. Pero pronto apareció de nuevo. Se acercó hasta la mitad de la carretera, en ese momento se dio la vuelta y regresó al campo.Después salió por tercera vez y se dirigió hacia ellos. Llegados a ese punto Ted y Sam sentían miedo y comenzaron a correr. Pero cuando finalmente se detuvieron, pensaron que se estaban comportando como unos bobos. No estaban seguros de lo que les había asustado. Por lo que decidieron volver y comprobarlo.Lo vieron muy pronto, porque venía a su encuentro. Llevaba puestos unos pantalones negros, camisa blanca y tirantes oscuros. Sam dijo: “Intentaré tocarlo. De ese modo sabremos si es real”.Se acercó y escudriñó su rostro. Tenía unos ojos brillantes y maliciosos profundamente hundidos en su cabeza. Parecía un esqueleto. Ted echó una mirada y gritó, y de nuevo él y Sam corrieron, pero esta vez el esqueleto los siguió. Cuando llegaron a casa de Ted, permanecieron frente a la puerta y lo observaron. Se quedó un momento en el camino y luego desapareció.Un año más tarde Ted enfermó y murió. En sus últimos momentos, Sam se quedó con él todas las noches. La noche en que Ted murió, Sam dijo que su aspecto era exactamente igual al del esqueleto.',
'Un hombre llamado Joseph Blackwell llegó a [....] en un viaje de negocios. Se hospedó en la gran casa que unos amigos poseían en las afueras de la ciudad. Esa noche pasaron un buen rato conversando y rememorando viejos tiempos. Pero cuando Blackwell fue a la cama, comenzó a dar vueltas y no era capaz de dormir.En un momento de la noche, oyó un coche llegar a la entrada de la casa. Se acercó a la ventana para ver quién podía arribar a una hora tan tardía. Bajo la luz de la luna vio un coche fúnebre de color negro lleno de gente. El conductor alzó la mirada hacia él. Cuando Blackwell vio su extraño y espantoso rostro, se estremeció. El conductor le dijo: “Hay sitio para uno más”. Entonces el conductor esperó uno o dos minutos, y se retiró.Por la mañana, Blackwell les contó a sus amigos lo que había pasado. “Estabas soñando”, dijeron ellos. “Eso debe haber sido”, repuso él, “pero no parecía un sueño”. Después del desayuno se marchó a la ciudad. Pasó el día en las oficinas de uno de los nuevos y altos edificios de la urbe.A última hora de la tarde, él estaba esperando un ascensor que lo llevara de vuelta a la calle. Pero cuando se detuvo en su piso, este se encontraba muy lleno. Uno de los pasajeros lo miró y le dijo: “Hay sitio para uno más”. Se trataba del conductor del coche fúnebre. “No, gracias”, dijo Blackwell. “Esperaré al siguiente”.Las puertas se cerraron y el ascensor empezó a bajar. Se oyeron voces y gritos, y un gran estruendo. El ascensor se había desplomado contra el fondo. Todas las personas que habían a bordo murieron.']
const miedo2 = Math.floor(Math.random()*miedo.length)
const miedo3 = miedo[miedo2]
enviartexto(miedo3)
break

case 'chistenegro': case 'humornegro':
  const negro = ['- papá que es ¿el humor negro? +¿ves ése hombre sin brazos?. Dile que aplauda -pero papá soy ciego +exacto',
'¿Por qué no tiran bombas a África? Porque no encuentran el blanco',
'¿Qué hace un negro vomitando? Presumir de que comió',
'¿Porqué los negros son zurds? Porque no tienen derechos',
'Dos amigos se encuentran y le dice uno al otro: - Oye, ¿tu abuela es mecanica?. - No, ¿por qué?. - Porque la he visto en la autopista debajo de un camión.',
'Cual es la diferencia entre albert einstein y el nene de 2 años? que tengo que albert einstein murio virgen',
'- Doctor, ¿tendré cura? - ¡Por supuesto, cura, misa y funeral!' ,
'Entra un negrito a estudiar derecho y le preguntan: - Señor, ¿qué rama va a escoger? Y el negro responde: - Ninguna rama, hijo puta... a mí me dan un pupitre como a los blancos.' ,
'Qué escala las Torres gemelas? Spiderman Qué las sobrevuela? Superman Qué las atraviesa? Musulman' ,
'Dos hermanitos de 4 años peleándose: - Jaja... yo me voy a disney y vos ¡¡nooooo!!. - Si... pero yo no tengo leucemia.' ,
'La mamá le dice a la niña ciega: - Y si te vuelves a portar mal, te cambio los muebles de lugar.', 
'Un niño pequeño pregunta a su madre: - Mamá, mamá. ¿Cómo se llama eso que yo tengo?. ¿Tauro, virgo, sagitario?... - Cáncer, hijo, cáncer.', 
'- ¿Qué haces con gorra, camiseta de los Lakers y collares de oro? ¡Es el velatorio de tu madre! - ¿No había que venir de negro?',
'¿Qué hacen 2 epilépticos en una cabina de teléfono?. - La fiesta de la espuma.',
'¿Qué diferencia hay entre el amor y el sida?. Pues que el sida es para toda la vida.',
'Esto es una pareja que alquila un piso para ir a echar un polvo, y cuando ya acaban le dice la chica al chico. - Manolo, yo tengo el SIDA y otras muchas enfermedades y te las acabo de pegar. Y le dice Manolo: - Pues eso no es nada, ya que yo tengo la lepra y te he dejado la polla dentro.',
'¿Qué hace un leproso tocando la guitarra?. - Carne picada.',
'- Mamá, mamá, ¿me das una galleta?. - Niño, están encima del frigorífico. - Mamá, es que no tengo brazos... - Si no hay brazos, no hay galletas',
'Un matrimonio va por la calle y se encuentran con un amigo que se dirige al marido:- Hola, Paco. ¿Qué tal estás? - Mal, Pedro, tengo un SIDA terrible. El médico me ha dado tres meses de vida. El amigo se despide rápidamente y se va todo acongojado. La mujer le recrimina al marido: - Pero, Paco. ¿Cómo le dices a la gente que tienes SIDA, si lo que tienes en realidad es cáncer de pulmón? - Yo me voy a morir, pero contigo nadie se acuesta...',
'Un tipo entra en el dormitorio y le dice a su mujer: - Claro, yo como un estúpido buscando el cinturón por toda la casa, y tu aquí ahorcada con él, ¡no te jode!.',
'Estaba Bush en la Casa Blanca cuando suena el teléfono y habla Bin Laden: - Tengo dos noticias, una buena y otra mala. A lo que responde Bush: - La buena primero. - La buena es que me voy a entregar. - ¿Y la mala?. - La mala es que voy en avión.',
'Suena el teléfono: - ¿Diga? - contesta el hombre -. - Hola, soy su médico. Tengo que comunicarle una noticia buena y otra mala. ¿Cuál quiere oír primero?. - Pues empiece con la buena. - Padece usted una enfermedad que mata en 24 horas, dice el médico sin inmutarse. - ¡Joder!. ¡Y esa es la buena!. ¿Cuál es la mala entonces?. - Que estoy intentando localizarle desde ayer.',
'¿Porque en África no ven bob esponja? Porque lo echan después de comer',
'Un niño llama a un telefonillo: - ¿Baja Juanito a jugar al fútbol?. - ¡Pero si Juanito no tiene ni brazos ni piernas!. - Ya, pero bota muy bien.',
'¿Por qué los alemanes no comen frijoles? Porque en otros países se les llama JUDÍAS',
'-Acepta usted a María en la salud y en la enfermedad, en la riqueza y en la pobreza hasta que la muerte os separe? -Si,no,si,no,no',
'Un niño vuelve a su casa despues del colegio... -Mamá, ¿Por qué huele tan mal?, mamá, mamá...',
'Tu novía me guiño un ojo el otro día +No, es que tiene un tick -Pues yo ya me la he follao',
'Una niña le pregunta a su madre: ¿Me queda bien este vestido de bailarina?. Y la madre le contesta: Sí, pero se te ve un poco la silla de ruedas.',
'- ¡Doctor, doctor! ¿Qué tal ha ido la operación? - ¿Operación, no era una autopsia?',
'¿De qué color era el coche de Lady di?. - Negro estampado.',]
const negro2 = Math.floor(Math.random()*negro.length)
const negro3 = negro[negro2]
enviartexto(negro3)
break


case 'piropo' :
const piro = ['Me gustaría ser papel para poder envolver ese bombón.' , 'Eres como wifi sin contraseña, todo el mundo te busca' , 'Quién fuera bus para andar por las curvas de tu corazón.' , 'Quiero volar sin alas y salir de este universo, entrar en el tuyo y amarte en silencio.' , 'Quisiera ser mantequilla para derretirme en tu arepa.' , 'Si la belleza fuera pecado vos ya estarías en el infierno.' , 'Me Gustaría Ser Un Gato Para Pasar 7 Vidas A Tu Lado.' , 'Robar Está Mal Pero Un Beso De Tu Boca Sí Me Lo Robaría.' , 'Qué Hermoso Es El Cielo Cuando Está Claro Pero Más Hermoso Es El Amor Cuando Te Tengo A Mi Lado.' , 'Bonita, Camina Por La Sombra, El Sol Derrite Los Chocolates.' , 'Si Fuera Un Correo Electrónico Serías Mi Contraseña.' , 'Quisiera que fueses monte para darte machete' , 'Perdí mi número de teléfono ¿Me das el tuyo?' , '¿Cómo te llamas para pedirte de regalo a Santa Claus?' , ' En el cielo hay muchas estrellas, pero la más brillante está en la Tierra y eres tú.' , '¿Acaba de salir el sol o es la sonrisa que me regalas hoy?' , 'No es el ron ni la cerveza, eres tú quien se me ha subido a la cabeza' , 'Si hablamos de matemáticas eres la suma de todos mis deseos.' , 'Pareces Google porque tienes todo lo que yo busco.' , 'Mi café favorito, es el de tus ojos.' , 'Quiero ser photoshop para retocarte todo el cuerpo.' , 'Quisiera que fueras cereal, para cucharearte en las mañanas.' , 'Quien fuera hambre, para darte tres veces al día.',]
const piro2 = Math.floor(Math.random()*piro.length)
const piro3 = piro[piro2]
enviartexto(piro3)
break








default:

}

// COMANDOS SIN PREFIJOS

} catch (e) {
console.log(e)
}
fs.watchFile('./anita.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log(color("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\a anita FUE MODICADO\n ..REINICIANDO INDEX..", "blue"));
process.exit()
}
})
})

}
startJuls()