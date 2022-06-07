
const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');
module.exports= {
    name: "invite",
    description:"invite command",
    execute(message,client){
       
            e();
            async function e(){
            const embed = new Discord.MessageEmbed()
                .setColor('RED')
                .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle(`Invite Paddycrackbot to your server`)
                .setURL(`https://discord.com/api/oauth2/authorize?client_id=916743866915389542&permissions=8&scope=applications.commands%20bot`)
                .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
                .setImage(`${client.user.displayAvatarURL({ dynamic: true })}`)
                .setDescription(`**[Invite me](https://discord.com/api/oauth2/authorize?client_id=916743866915389542&permissions=8&scope=applications.commands%20bot) \n[Top.gg](https://top.gg/bot/916743866915389542)**`)
                .setFooter(`paddycrack.com`)
                const row = new Discord.MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setEmoji(`🌐`)
                    .setLabel(`Top.gg`)
                    .setURL(`https://top.gg/bot/916743866915389542`)
                    .setStyle("LINK"),
                )
                .addComponents(
                    new MessageButton()
                    .setEmoji(`📨`)
                    .setLabel(`Invite`)
                    .setURL(`https://discord.com/api/oauth2/authorize?client_id=916743866915389542&permissions=8&scope=applications.commands%20bot`)
                    .setStyle("LINK"),
                )
              message.channel.send({ embeds: [embed],components:[row]});
            
        }
    }
}