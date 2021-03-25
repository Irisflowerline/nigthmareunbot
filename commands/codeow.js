const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('info sur')
            .setTitle('***code de parties personnalisé sur overwatch***')
            .setColor('#0B5345')
            .addField('**Green screen**', 'AND2Y', false)
            .addField('**Aim train**', ' kave5', false)
            .addField('**Training room**', 'BTRZE', false)
            .addField('**UNO**', '22FJJ', false)
            .addField('**Murder**', ' 9MPKQ', false)
            .addField('**Mario Party**', 'XWRC2', false)
            .addField('**overfighter** (smatch  bros like)', 'Z5XK2', false)
            .setThumbnail('')
            .setURL('https://workshop.codes'))
    },
    name: 'codeow'
}