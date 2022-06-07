const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');
module.exports= {
    name: "infoslash",
    description:"info command",
    execute(interaction,client){
       
            e();
            async function e(){
            const embed = new Discord.MessageEmbed()
                .setColor(client.displayHexColor)
                .setAuthor(`${client.user.tag}`, client.user.displayAvatarURL({ dynamic: true }))
                .setTitle(`${client.user.username} information`)
                .setURL(``)
                .setDescription(`**Bot id: ${client.user.id}**\n **Serving in ${client.guilds.cache.size} servers** \n **Latency is ${Date.now() - interaction.createdTimestamp}ms**\n**[Bot Github](https://github.com/paddywhack05/botthing)**`)
                .setImage(`${client.user.displayAvatarURL({ dynamic: true })}`)
                .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
                .setFooter(`paddycrack.com`)
               
             
                interaction.reply({ embeds: [embed]});
            
        }
    }
}