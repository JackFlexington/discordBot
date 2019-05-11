// This file is for 'ITbot'
// Special Notes:
  // __dirname is a built-in feature that targets the file structure as relative to 'index.js'.
  // rest parameters allow us to use an indefinite amount of arguments (...Args)
require('dotenv').config({ path: __dirname + '/config.env' }); // Import environment library
const fs = require('fs'); // Used to work with files
const Discord = require('discord.js'); // Import discord.js library
const client = new Discord.Client(); // Initialize

// Initialization debugging messages
console.log("========================");
console.log("~~Initialization DEBUGGING messages~~");
console.log("BOT_TOKEN pulled from config.env file: " + process.env.BOT_TOKEN);
console.log("========================");

// Event Handler debugging messages
console.log("========================");
console.log("~~Add Events in DEBUGGING messages~~");

// Read all files within the 'events' folder -- 'err' param = (human read-able message, name of file, linenumber of failure) || 'files' param = array of filenames in directory
fs.readdir('./events/', (err, files) => {
  // Iterate through filename array
  files.forEach(file => {
    // Create events to listen for by using the filenames within the 'events' folder
    const eventHandler = require(`./events/${file}`);
    // console.log("Event Name: " + `${file}`);
    // Remove the filenames extension
    const eventName = file.split('.')[0];
    console.log("Added Event Named: " + eventName);
    // Update each event handler file with the associated file
    client.on(eventName, (...args) => eventHandler(client, ...args));
  }); // END -- files.forEach
  console.log("========================"); // END -- Event Handler debugging messages
}); // END -- fs.readdir


/* LISTENERS */
// Custom funny message
client.on('message', msg => {
  if (msg.content === 'What you think about Jonathon?') {
    msg.reply('I hate him.');
  }
});

client.on('message', msg => {
  if (msg.content === 'What do you think about Jacob?') {
    msg.reply('He\'s the one and only true god.');
  }
});

// Establish Web Socket (you will need to acquire one from Discord)
client.login(process.env.BOT_TOKEN); // the 'dotenv' library will import from the configuration file the appropriate token
