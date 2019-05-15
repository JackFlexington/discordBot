// kick.js

// Kick User
module.exports = message => {
  console.log("==> Entered kick.js function");
  const member = message.mentions.members.first()

  // Error detection -- No member targetted
  if (!member) {
    console.log("ERROR: Didn't mention members' name.");
    console.log("~~ Early termination of function.");
    return message.reply(`Who are you trying to kick? You must mention a user.`)
  } // End -- No member targetted

  // Error detection -- Member non-kickable
  if (!member.kickable) {
    console.log("ERROR: Member isn't kickable.");
    console.log("~~ Early termination of function.");
    return message.reply(`I can't kick this user. Sorry!`)
  } // End -- Member non-kickable

  console.log("~~ kick.js function received appropriate parameters... Kicking user.");
  console.log("<== Exiting kick.js function");
  return member
    .kick()
    .then(() => message.reply(`${member.user.tag} was kicked.`))
    .catch(error => message.reply(`Sorry, an error occured.`))
}
