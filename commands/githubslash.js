
const fetch = require('node-fetch');
const Discord = require('discord.js');
module.exports= {
    name: "githubslash",
    description:"github slash command",
    async execute(interaction,client,text){
        const url = `https://api.github.com/users/${text}`;

                const res = await fetch(`${url}`)
                console.log(res);
                if(res.status===200){
                const data = await res.json()
                
       if(data.message){interaction.reply("that is not a github user see if you misspelled the name"); return;}
       else{
       console.log(data)
            e();
       }
            async function e(){
                //console.log(dat.list)
            const embed = new Discord.MessageEmbed()
                embed.setColor('RED')
                embed.setAuthor(`${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                embed.setThumbnail(data.avatar_url)
                embed.setTitle(`${data.login.charAt(0).toUpperCase() + data.login.slice(1)}`)
                embed.setURL(`${data.html_url}`)
                if(data.bio){
                    embed.addField(`📖Bio`,`${data.bio}`,true)
                }
                if(data.email){
                    if(data.hireable){
                    embed.addField(`📨Email`,`mail them if you need what they do they are hireable[${data.email}](mailto:${data.email})`,true)
                    }else{
                        embed.addField(`📨Email`,`${data.email}`,true)
                    }
                }
                if(data.company){
                    embed.addField(`💼Company`,`${data.company}`,true)
                }

                if(data.hireable){
                    embed.addField(`Hireable`,`Hire them`,true)
                }
                if(data.name){
                    embed.addField(`Name`,`${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`,true)
                }
                if(data.twitter_username){
                    embed.addField(`📱twitter`,`${data.twitter_username}`,true)
                }
                if(data.location){
                    embed.addField(`🗺Location`,`${data.location}`,true)
                }
                if(data.blog){
                    embed.addField(`🌐Blog`,`**[${data.blog}](${data.blog})**`,true)
                }
                embed.addField(`Followers[${data.followers}]`,`${data.login} has ${data.followers} followers`,true)
                embed.addField(`Public repos[${data.public_repos}]`,`${data.login} has ${data.public_repos} public repos`,true)
                embed.addField(`User Created`,`${data.login} was created ${data.created_at}`,true)
                embed.setFooter(`Using github rest api`)
                
              interaction.reply({ embeds: [embed]});
                }
            }else{interaction.reply("that is not a pokemon see if you misspelled it"); return;}
                
            
    }
}