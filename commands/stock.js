const Discord = require('discord.js')
 
module.exports.run = async (bot, message, args, gen) => {
    let embed = new Discord.MessageEmbed()
     .setTitle('**Accounts In Stock**')
     .setColor(bot.color)
     .setAuthor('Generator Support', 'https://images-ext-1.discordapp.net/external/01UenhWP-N5I1-KS1_IwLXtp6nDlERluUZh3tGqk0B0/https/images.miona.bot/image/843ed2e8-5e80-447e-ad2d-e354fb2f54a4.gif?width=300&height=300', 'https://discord.gg/s3hPh9zq9u')
     .setThumbnail('https://images-ext-1.discordapp.net/external/01UenhWP-N5I1-KS1_IwLXtp6nDlERluUZh3tGqk0B0/https/images.miona.bot/image/843ed2e8-5e80-447e-ad2d-e354fb2f54a4.gif?width=300&height=300')
     .setFooter('Made By 0xd1e90','https://images-ext-1.discordapp.net/external/01UenhWP-N5I1-KS1_IwLXtp6nDlERluUZh3tGqk0B0/https/images.miona.bot/image/843ed2e8-5e80-447e-ad2d-e354fb2f54a4.gif?width=300&height=300')
     .setTimestamp()
     gen.calculateStock()
     setTimeout(() => {
         const stock = gen.stock
        for(const type of stock) {
            embed.addField(type[0], type[1], true)
        }
        message.channel.send(embed)
        setTimeout(() => message.delete(), 10000);
     }, 200);
     
 }
 module.exports.help = {
     name: 'stock',
     aliases: []
 }