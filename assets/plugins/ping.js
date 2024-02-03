const { command, isPrivate} = require("../../lib/");
command(
  {
    pattern: "alive",
    fromMe: isPrivate,
    desc: "Check the bot is alive",
    type: "user",
  },
  async (message, match) => {
    await message.sendMessage(message.jid,"I am alive now buddy💎🤍");
  });                   
command(
    {
        pattern: "ping",
    fromMe: isPrivate,
    desc: "To check ping",
    type: "user",
  },
  async (message, match) => {
    const start = new Date().getTime();
    await message.sendMessage(message.jid,"*𝙿𝚒𝚗𝚐㋞*");
    const end = new Date().getTime();
    return await message.sendMessage(message.jid,
      "*𝙿𝚘𝚗𝚐* ㋚\n ```" + (end - start) + "``` *ms*"
    );
  }
);