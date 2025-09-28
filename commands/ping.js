module.exports = {
  run: (client, message, args) => {
    message.channel.send(`Pong! 🏓 Latency is ${Date.now() - message.createdTimestamp}ms.`);
  },
  help: {
    name: 'ping',
    description: 'Răspunde cu Pong și timpul de ping.',
    aliases: []
  }
};
