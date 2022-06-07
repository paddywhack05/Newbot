
const fetch = require('node-fetch');
const Discord = require('discord.js');
module.exports= {
    name: "ubslash",
    description:"ubslash command",
    async execute(interaction,client,text){
        
        const url = `https://api.urbandictionary.com/v0/define?term=${text}`;
                const response = await fetch(`${url}`)
const {list} = await response.json()
const [dat] = list;
       if(!dat){interaction.reply("that is not a word acording to Urban dictionary"); return;}
            e();
            async function e(){
                //console.log(dat.list)
            const embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setAuthor(`${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                .setTitle(`Definition of ${dat.word}`)
                .setURL(`${dat.permalink}`)
                .setDescription(`**Definition**\n${dat.definition}\n\n**Example**\n${dat.example}`)
                .setFooter(`👍${dat.thumbs_up}  👎${dat.thumbs_down}  AUTHOR ${dat.author}`)
              interaction.reply({ embeds: [embed]});
            
        }
    }
}