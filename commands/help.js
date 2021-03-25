const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('info sur')
            .setTitle('***commands help***')
            .setColor('RANDOM')
            .addField('**/codeow**', 'vous permet de voir tous les code de map personnalisé sur overwatch', true)
            .addField('**/planning**', 'permet de montrer le planning des events à venir', true)
            .addField('**/rolehelp**', 'permet de savoir comment obtenir les rôles du serveur', true)
            .setThumbnail('')
            .setURL())
    },
    name: 'help'
}