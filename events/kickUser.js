// kickUser.js

// Kick User
module.exports = (client, message) => {
  if (message.content.startsWith('!kick')) {
    const member = message.mentions.members.first();

    if (!member) {
      return message.reply(`Who are you trying to kick? You must mention a user.`);
    }

    if (!member.kickable) {
      return message.reply(`I can't kick this user. Sorry!`);
    }

    return member
      .kick() // ; ommitted on purpose
      .then(() => message.reply(`${member.user.tag} was kicked.`)) // ; ommitted on purpose
      .catch(error => message.reply(`Sorry, an error occured.`));
  }
}
