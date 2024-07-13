const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_09_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTI4LFxuICAgICAgICA5MCxcbiAgICAgICAgODEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYxLFxuICAgICAgICAyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNixcbiAgICAgICAgNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICA5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDYxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDU3LFxuICAgICAgICA4MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk2LFxuICAgICAgICA2OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDAsXG4gICAgICAgIDk4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MixcbiAgICAgICAgMTY5LFxuICAgICAgICA0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQyLFxuICAgICAgICA1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjksXG4gICAgICAgIDYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDksXG4gICAgICAgIDcyLFxuICAgICAgICAyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDYxLFxuICAgICAgICA0MSxcbiAgICAgICAgMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICA2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA4MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInFMRVQxNThJbEtSUHBTWGZONTQwN0VkV0xOalhPalhQeVVwU0RrMG1QRWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZvX0lKd0V6VHAyLTlKVWo4UzRzYkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTE4NTg2OGYtZTg1MS00NzdlLWEzOGEtOGVkZmVhYWU1ZjcxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUsXG4gICAgICAzMyxcbiAgICAgIDQ0LFxuICAgICAgNjQsXG4gICAgICAxNjUsXG4gICAgICAxMCxcbiAgICAgIDEwMSxcbiAgICAgIDgyLFxuICAgICAgNzcsXG4gICAgICA3NSxcbiAgICAgIDczLFxuICAgICAgMjcsXG4gICAgICA2MSxcbiAgICAgIDIyMCxcbiAgICAgIDExMSxcbiAgICAgIDE0LFxuICAgICAgMTE1LFxuICAgICAgNTIsXG4gICAgICAxNzUsXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMixcbiAgICAgIDE4MixcbiAgICAgIDIzNyxcbiAgICAgIDE0NyxcbiAgICAgIDg2LFxuICAgICAgMjQwLFxuICAgICAgMTgxLFxuICAgICAgODIsXG4gICAgICA2NSxcbiAgICAgIDE2MSxcbiAgICAgIDIyNyxcbiAgICAgIDgzLFxuICAgICAgOSxcbiAgICAgIDE4NSxcbiAgICAgIDIwMyxcbiAgICAgIDE3MyxcbiAgICAgIDYyLFxuICAgICAgNzAsXG4gICAgICA5NixcbiAgICAgIDU1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJUNk1ZSlA1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjM0MzU2OTMzMjg6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLiqrsg4oyIwqsg8J2Zj82izaHwnZmd2Lnwk4ap6pybxrLPu/CdkIDGptic8JOGquOAhuKMi+KkucKz4qq8XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuwrvCu/CThqk88J2fkT7wk4aqwqvCq1wiLFxuICAgIFwibGlkXCI6IFwiMTIwNDUyNzQzNzUzNzY1Ojc1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pLQjlmVURFSlBReUxRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMXRBQy9haDdBSW1CY1RVRjY3SEdPUnhYbDlVWTNEemtIZnZicUgvWHcxTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJJTFZDa3lMZjBOeC9CUkMwb3lmSTdETnUxb3JIT2dqKzZZTjFQM2J4MU83Sm5kaGQ5VGFwaTZLQlFSaWZ2NmhYK2NVeThRZ251ZHVxc3NsWGplNS9BZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJEUy80SXZ0OE44N012ejhmYkVJc2x3Ymh5QXhyaVlHWEVJZWxIRUpPbE9NNWJvRkZIaWE1TlFZbFExWlF1N3NBaHFnU1FNc1lINDE2djBRcVk2QzdEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjM0MzU2OTMzMjg6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODU0NTUxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR1ptXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHWm0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLcTROL2lUbVRBc0IyNnB0STdQdTNhdUt5cE84WmY3WmZFSUpLSHJkaG9FPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEwNTI1OTAyMjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA2MTc2MjY0ODFcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
