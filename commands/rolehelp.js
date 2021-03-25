const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('info sur')
            .setTitle('***info rôles***')
            .setColor('#D35400')
            .addField('**juge**', `permet de juger les gens comme bon vous semble

            ||*S'obient en étant actif sur le serveur et en ne faisant pas de bêtise*||`, true)
            .addField('**nitro booster**', `vous permet d'être plus connu sur le serveur.

            ||*S'obtient en boostant le serveur*||`, true)
            .addField('**créateur**', `permet d'envoyer ces nouveaux postes sur tout type de réseaux.
            
            ||*Réclame d'avoir déja fait des postes sur les réseaux sociaux*||`, true)
            .setThumbnail('')
            .setURL())
    },
    name: 'rolehelp'
}