
const fetch = require('node-fetch');
const Discord = require('discord.js');
module.exports= {
    name: "dadjoke",
    description:"dadjoke command",
    execute(message,client){
       
            e();
            async function e(){
                var headers = {
                    Accept: 'application/json'
                  }
                const url = `https://icanhazdadjoke.com/`;
                const res = await fetch(`${url}`,{method: 'GET', headers: headers});
                const dat = await res.json();
                console.log(dat);
                const img = `https://icanhazdadjoke.com/j/${dat.id}.png`;
                const joke = dat.joke;
                console.log(joke);
                console.log(img);
            const embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle(`Dad joke`)
                .setURL(img)
                .setDescription(`${joke}`)
                .setFooter(`paddycrack.com`)
              message.channel.send({ embeds: [embed]});
            
        }
    }
}