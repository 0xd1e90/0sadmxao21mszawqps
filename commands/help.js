const Discord = require('discord.js')
module.exports.run = async (bot, message, args, gen) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Gen Commands')
    .setColor(bot.color)
    .setThumbnail('https://images-ext-1.discordapp.net/external/01UenhWP-N5I1-KS1_IwLXtp6nDlERluUZh3tGqk0B0/https/images.miona.bot/image/843ed2e8-5e80-447e-ad2d-e354fb2f54a4.gif?width=300&height=300')
    .setDescription('This Help command is for you to understand the commands of the free gen.')
    .addField('$help','Shows you a options account')
    .addField('$gen (acc type)', 'Gens you an account')
    .addField('$stock','Shows you a list of all accounts in stock')
    .setFooter('Made by 0xd1e90','https://images-ext-1.discordapp.net/external/01UenhWP-N5I1-KS1_IwLXtp6nDlERluUZh3tGqk0B0/https/images.miona.bot/image/843ed2e8-5e80-447e-ad2d-e354fb2f54a4.gif?width=300&height=300')
    .setTimestamp()
       message.channel.send(embed)
       setTimeout(() => message.delete(), 10000);
    }
    
module.exports.help = {
    name: 'help',
    aliases: []
}