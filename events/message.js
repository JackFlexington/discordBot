const kick = require('../commands/kick')

module.exports = (client, message) => {
  console.log("==> Entered message.js function");
  if (message.content.startsWith('!kick')) {
    console.log("Message beings with !kick");
    return kick(message)
  }
  console.log("<== Exited message.js function");
}
