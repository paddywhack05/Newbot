const{MessageActionRow,MessageButton,MessageEmbed} = require('discord.js');
const Discord = require('discord.js');
const moment = require('moment');
module.exports= {
    name: "userinfo",
    description:"userinfo command",
    execute(message){
            if(!message.guild){
             console.log("dm detected")
             message.reply("You cant use this command in dms");
            }
            else{
            e();
        }
            async function e(){
                const Target = message.mentions.users.first()||message.author;
                const Member = message.guild.members.cache.get(Target.id);
                const rol = Member.roles.cache.map(r=>r).length - 1;
                if(rol === 0){
                    const embed = new Discord.MessageEmbed()
                    .setColor(Member.displayHexColor||'RED')
                    .setAuthor(`${Target.tag}`, Target.displayAvatarURL({ dynamic: true }))
                    .setTitle(`${Target.username} information`)
                    .setImage(`${Target.displayAvatarURL({ dynamic: true })}`)
                    .setThumbnail(`${Target.displayAvatarURL({ dynamic: true })}`)
                    .setURL(``)
                    .setDescription(`**${Target.username} joined ${Member.guild} at** ${moment(Member.joinedAt).format('YYYY/MM/DD, h:mm:ss')}\n**Been a member for:** ${moment(Member.joinedAt).startOf('day').fromNow()}\n **Joined discord at** ${moment(Target.createdAt).format('YYYY/MM/DD, h:mm:ss')}\n**Joined Discord:** ${moment(Member.user.createdAt).startOf('day').fromNow()}\n**Nickname: ${Member.nickname}**\n**User id: ${Target.id}**\n**Role color: ${Member.displayHexColor}**\n`)
                    /*.addField(`**${Target.username} joined ${Member.guild} at** ${moment(Member.joinedAt).format('YYYY/MM/DD, h:mm:ss')}`)
                    /*.addField(`**Joined discord at** ${moment(Target.createdAt).format('YYYY/MM/DD, h:mm:ss')}`)
                    .addField(`**Nickname: ${Member.nickname}**`)
                    .addField(`**User id: ${Target.id}**`,false)
                    .addField(`**Role color: ${Member.displayHexColor}`)*/
                    .addField(`Roles[0]`,`No roles lol dont think \@everyone counts`)
                    .setFooter(`paddycrack.com`)
                    message.channel.send({ embeds: [embed]});
                }
                else{
            const embed = new Discord.MessageEmbed()
                .setColor(Member.displayHexColor||'RED')
                .setAuthor(`${Target.tag}`, Target.displayAvatarURL({ dynamic: true }))
                .setTitle(`${Target.username} information`)
                .setImage(`${Target.displayAvatarURL({ dynamic: true })}`)
                .setThumbnail(`${Target.displayAvatarURL({ dynamic: true })}`)
                .setURL(``)
                .setDescription(`**${Target.username} joined ${Member.guild} at** ${moment(Member.joinedAt).format('YYYY/MM/DD, h:mm:ss')}\n **Been a member for:** ${moment(Member.joinedAt).startOf('day').fromNow()}\n **Joined discord at** ${moment(Target.createdAt).format('YYYY/MM/DD, h:mm:ss')}\n**Joined Discord:** ${moment(Member.user.createdAt).startOf('day').fromNow()}\n**Nickname: ${Member.nickname}**\n**User id: ${Target.id}**\n**Role color: ${Member.displayHexColor}**\n`)
                /*.addField(`**${Target.username} joined ${Member.guild} at** ${moment(Member.joinedAt).format('YYYY/MM/DD, h:mm:ss')}`)
                /*.addField(`**Joined discord at** ${moment(Target.createdAt).format('YYYY/MM/DD, h:mm:ss')}`)
                .addField(`**Nickname: ${Member.nickname}**`)
                .addField(`**User id: ${Target.id}**`,false)
                .addField(`**Role color: ${Member.displayHexColor}`)*/
                .addField(`Roles[${rol}]`,`${Member.roles.cache.map(r=>r).join(' ').replace("@everyone",'.')}`)
                .setFooter(`paddycrack.com`)
               
             
              message.channel.send({ embeds: [embed]});
                }
        }
    }
}