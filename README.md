# Current Progress
* Project is live and hosted locally on my work computer.
* File Structure in place to store functions logically
  * UserCommand-based functions
  * Event-based functions

# Updates Coming
* Push bot out onto remote server for 24/7 run-time.
* Creation of poll generation function

## List of required downloads
* Node.js
* npm
  * **Link**: [Node.js](https://nodejs.org/en/) *<-- This will download both node.js and npm!*
  * **Note**: *use commands "node -v" & "npm -v" to verify the installation was successful.*

# The Quick-Start Guide
## Initialize folder for the Local project (*Files for the Bot*)
### Open terminal.app and execute the following commands
```bash
# While in desired target directory
mkdir test-bot # Make Directory named "test-bot"
cd test-bot # Change current directory to "test-bot"
npm init -y # Generates the minimal package.json file
```

### Import Discord API
```bash
# While in root directory or Discord bot files
npm install discord.js # Import's Discords API Library
```

## Add template file
Import **index.js** into the directory that you previously created. (E.g. *"test-bot"*)

## Establish online connection
* Follow this link [Discord App - Developer Applications](https://discordapp.com/developers/applications/) in order to establish a Web Socket with the Discord servers.
* Name the bot and select an appropriate avatar (optional)
* On the panel (left-side of screen) click "BOT" => "ADD BOT"
  * A message should appear "A wild bot has appeared" (This means it was successful)
* Copy the TOKEN and assign it to the 'token' variable at the top.

## Add Bot to Discord Server
Navigate to the Discord developer web page
* OAuth2 => Scope => Select 'bot'
* Select the button 'copy' with the newly generated URL next to it
* Open a new tab on internet browser and paste the copied URL there.
  * This is how you select the server to authorize the bot to "inhabit"

## Give life to the bot
```bash
# Execute following command within the "test-bot" directory
npm install nodemon --save-dev # Reloads the code as soon as it changes
```
Add following scripts to package.json files
```json
{
  "name": "my-bot",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "discord.js": "^11.4.2"
  },
  "devDependencies": {
    "nodemon": "^1.18.9"
  }
}
```
```bash
# Grant life to the bot
npm run dev
```

## Hiding that token key
```bash
# Create an .env file that WONT get pushed to GitHub
# Install following package so that the environment variables will get loaded into 'index.js' in order to establish Web Socket connection
npm install dotenv
```
```javascript
// Add the following lines of code inside the 'index.js'
// Note: __dirname is a built-in feature that targets the file structure as relative to 'index.js'.
require('dotenv').config({ path: __dirname + '/config.env' }); // Import environment library
client.login(process.env.BOT_TOKEN); // the 'dotenv' library will import from the configuration file the appropriate token
```

## Adding the Welcome message
** Currently work in progress **
## Kick Users
** Currently work in progress **
## Grant Bot Permissions
** Currently work in progress **
## Refactorization
### Events folder
```javascript
// Create 'events' folder
// Create .js files with appropriate names
  // Example: greetNewUser.js kickUser.js ready.js

// Inside the 'index.js' file import the 'fs' library
const fs = require('fs');
```
### Commands folder
** Currently work in progress **

# Sources
  1. [FreeCodeCamp - Discord Bot under 15-minutes](https://medium.freecodecamp.org/how-to-create-a-discord-bot-under-15-minutes-fb2fd0083844)

# Links to help explain various files
* [package-lock.json](https://docs.npmjs.com/files/package-lock.json)
* [package.json](https://docs.npmjs.com/files/package.json)

# Contributors
* Jacob Storer
* James Anunda (maybe?)
