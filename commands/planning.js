const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('info sur')
            .setTitle('***planning***->')
            .setColor('#8508EE')
            .setThumbnail('https://cdn.discordapp.com/attachments/811383679355584516/820632487863779339/planning_empty_15_au_21.png')
            .setURL())
    },
    name: 'planning'
}