const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true
    }),
    config = require('./config.json'),
    fs = require('fs')
    
client.login(process.env.TOKEN)
client.commands = new Discord.Collection()

fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})

client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return
 
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    command.run(message, args, client)
})
client.on('ready', () => {
    const statuses = [
        () => `tapez /help`,
        () => `event en cours...`
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'STREAMING', url: 'https://www.twitch.tv/irisflowerzebi'})
        i = ++i % statuses.length
    }, 1e4)
})

client.on('guildMemberAdd', member => {
    member.guild.channels.cache.get(config.greeting.channel).send( new Discord.MessageEmbed()
        .setDescription(`YO ${member} ici tu est sur **club nightmare**, nous sommes **${member.guild.memberCount}** :tada:! `)
        .setColor('#00ff00'))
    member.roles.add(config.greeting.role)
})

client.on('guildMemberRemove', member => {
    member.guild.channels.cache.get(config.greeting.channel).send(new Discord.MessageEmbed()
        .setDescription(`${member} viens tout juste de quitter le serveur, quelle histoire triste en plus nous ne sommes plus que **${member.guild.memberCount}**`)
        .setColor('#ff0000'))
})