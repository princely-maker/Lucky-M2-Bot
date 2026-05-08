/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['256789966218','2349168558655'], // Add your number without + or spaces (e.g., 256789966218)
    ownerName: ['Lucky 218', princely'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Lucky M2 Bot',
    version: '1.5.0',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'LuckyM2-H4sIAAAAAAAAA5VUXZOiOBT9L3nFGhFBaKu6agFBRQVRUXRrHgIEjPJlElCc8r9PYXdPz8PubO9bSIpzzz3n3PsD5AWmaIYaMPwBSoJryFB7ZE2JwBBoVRwjAjogggyCIUBLzZ/HmW2Kjmx58ry0Ii67dXnZrvUUrtVu4VXbMRfezf0reHRAWQUpDv8AGE9GaNHlE5R1+d1Ue3nBjny7XqQ9hwt+czMP/VqZZopMb9NX8GgRISY4T4zyiDJEYDpDzRJi8jX6ymRe1hO4Xh4XcHTXL5xzFD2fCV4/4HW9yvuCOfIk+ZgYxdfo5xsn2K8b47JV2EmojAPuN/w13XMWL2Ze6UQ2NyDd3XK+4d/oU5zkKJpGKGeYNV/W3bMM27ncLpV+Ugj2FS+yNvIeocifSRya+IVeKKopx2bmfo04DLyzXK0H09jWc1cwRiduph4XnC+Orlu8cAOzO68CRRT0xe/El+QjK+f/o/t1RM7sULmDfW1eFX+27DL54vXl7n12jYXxkTc2+ELylTT5ou7avjvY6/ZpMbaSw2k+O+wkGmteVwi0Abd3Fr4aB4Qtu0qifNKHrCJ/Ysl5im+IzSJwxm7cj4zxraqb6cuo52vLgNvWzWDZ0ECnhdOb4TQ+EFkYW+s96s9F25h5FVStyyHzsSo30SG1hEa6rvD19dnRGTXTCAx7jw4gKMGUEchwkT/vpF4HwKheo5Ag9pQXbCZHdE/D04obIOcuNy985awE29G9m4O2k7p3HqX+Mt50zeQVdEBJihBRiqIJpqwgzQJRChNEwfDv7x2Qoxt7M64t1+91QIwJZV5elWkBow9XPx5hGBZVztZNHurtAREw5D+vEWM4T2irY5VDEh5xjfQjZBQMY5hS9KtDRFAEhoxU6NfU6kXUCj93Vxtx2/dBB2RPQ3AEhkDoiy+9gSJJykCShj3hL/rt2uLCsvyWI9aq+M6h/SVCDOKUgiHQZ8RWIjo2nLv0EirjsWokqp6o4JPzh/lv4mI5P2hS775TreWhcd2x6NlcKnD2NLXifNDs003TJIkxOxmv/wAChmA7UsNzg/TFypoOzEZzNUuMe8fAFeq4MsciNXbUXKVkS3ymKQZ/2zoXSC673U6Dfd1EeZyoSd8eXC1PvE2ibGPkZOS+ttUiVOMQ/V6MG02PtTmXqpPmHoszpvwyS+T77nDbNs7uGpiBQAtlYiS2HyuSJjrVkWsU52pdBeV+SLI1ddLKzs+BbS8mjXRwLssMu2+xfI5F+r6O8DMwrRvtZ4zRc7pz2Hr0n+58MG9TxD86v4G8L4x/neRKElwUhb1E3wjh2dAqcxSXUX1aW2tf4mhmeQotpppe3MDj8b0DyhSyuCBZu8XyiBQ4Ah1AiqqN5TSPiz8U01U61d3EbltPIWXqZ9Q3OEOUwawEw54sK4LAC3L/8RN91iIyIAcAAA==',
    newsletterJid: '120363420656466131@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/Tomilucky218/Lucky-M2-Bot/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Lucky M2 Bot',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: true,
    autoRecording: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'all', // set bot or all via cmd
    autoDownload: false,
    
    // Auto Reply
    AUTO_REPLY: true,
   
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Africa/Kampala',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/Tomilucky218',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@LUCKYTECHHUB'
    }
};
  
