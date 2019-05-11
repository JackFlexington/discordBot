Author: Jacob Storer
Description: Initialization files for Discord Bot
Source: https://medium.freecodecamp.org/how-to-create-a-discord-bot-under-15-minutes-fb2fd0083844

/* Apple Guide */

/* List of required downloads */
1.) node.js
2.) npm
  Link: https://nodejs.org/en/ <-- This will download both node.js and npm!
  Note: use commands "node -v" & "npm -v" to verify the installation was successful.

/* Now initialize folder for the local project (Files for the Bot) */
  // Open terminal.app and execute the following commands
  mkdir test-bot # Make Directory named "test-bot"
  cd test-bot # Change current directory to "test-bot"
  npm init -y # Generates the minimal package.json file

  // Import Discord API
  npm install discord.js # Imports Discord's API library

  // Copy the "index.js" and paste it into the "test-bot" directory.

  // Acquire token used to establish a web socket with Discord
    // This allows your bot to access Discords API
    // Link: https://discordapp.com/developers/applications/

  // Name the bot and select an appropriate avatar (optional)

  // On the panel (left-side of screen) click "BOT" => "ADD BOT"
    // A message should appear "A wild bot has appeared" (This means it was successful)

  // Copy the TOKEN and assign it to the 'token' variable at the top.

  // END -- Bot Initialization

/* Add bot to Discord Server */
  // Navigate to the Discord developer web page
    // OAuth2 => Scope => Select 'bot'
    // Select the button 'copy' with the newly generated URL next to it
    // Open a new tab on internet browser and paste the copied URL there.
      // This is how you select the server to authorize the bot to "inhabit"

/* Give life to bot */
  // Execute following command within the "test-bot" directory
  npm install nodemon --save-dev // Reloads the code as soon as it changes

  // Add following scripts to package.json files
  "scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
  },d

  // Grant life to the bot
  npm run dev

/* HIDE THAT TOKEN KEY */
  // Create an .env file that WONT get pushed to GitHub
  // Install following package so that the environment variables will get loaded into index.js
  npm install dotenv

  // Navigate to the 'index.js' file
    // Added the following lines of code
    require('dotenv').config() // Import environment library
    client.login(process.env.BOT_TOKEN) // the 'dotenv' library will import from the configuration file the appropriate token

/* Adding a Welcome message */
/* Kick Users */
/* Grant Bot permissions */
/* Events folder to modularize code */
  // Create 'events' folder
  // Create .js files with appropriate names
    // Example: greetNewUser.js kickUser.js ready.js

  // Inside the 'index.js' file import the 'fs' library
  const fs = require('fs')

  ~~~~~~ STOPPED AT COMMANDS ~~~~~~
