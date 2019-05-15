const kick = require('../commands/kick');
// Add new command here.. 

module.exports = (client, message) => {
  console.log("==> Entered message.js function");
  // Begin -- !kick command
  if (message.content.startsWith('!kick')) {
    console.log("Message beings with !kick");
    return kick(message)
  } // End -- !kick command

  // Add logic to detect new command here...

  console.log("<== Exited message.js function");
}
