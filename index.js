//const { mememodule } = require('./mainmeme')
const Discord = require('discord.js')
const print = console.log
//const { print } = require('./python.json')
const req = require
const chalk = req('chalk')
const got = require(`got`)
print(chalk.blue('No errors'))
print(chalk.red('This useless module is made by Agent hacker')) 
const client = new Discord.Client();

client.once('ready', () => {
	print('Ready!');
});
 let be = "="
const prefix = ("--")
client.on('message', message => {
if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
    const ctx = message.channel
	if (command === 'meme') {
       const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            
            ctx.send(embed);
    })
        }
        
	 

})
client.login('NzgwNzgwNTM0NDE4NTA1NzI4.X70EiQ.WwMiDFwSvZsp68SGym6YSZJN1to');
