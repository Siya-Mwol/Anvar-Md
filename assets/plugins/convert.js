const { command, isPrivate} = require("../../lib/");
command(
  {
    pattern: 'url',
		fromMe: isPrivate,
		desc: 'Image/Video to url',
		type: 'misc',
	},
	async (message, match) => {
		if (
			!message.reply_message ||
			(!message.reply_message.image && !message.reply_message.video)
		)
			return await message.send('*Reply to a image/video*')
		await message.send(
			await getUrl(
				await message.sendMessage.downloadAndSaveMediaMessage('url');
    });
  }
);