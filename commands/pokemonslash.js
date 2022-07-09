
const fetch = require('node-fetch');
const Discord = require('discord.js');
module.exports= {
    name: "pokemonslash",
    description:"pokemon slash command",
    async execute(interaction,client,text){
        const url = `https://pokeapi.co/api/v2/pokemon/${text}`;

                const res = await fetch(`${url}`)
                console.log(res);
                if(res.status===200){
                const data = await res.json()
                
       if(!data){interaction.reply("that is not a pokemon see if you misspelled it"); return;}
       console.log(data)
            e();
            async function e(){
                //console.log(dat.list)
            const embed = new Discord.MessageEmbed()
                embed.setColor('RED')
                embed.setAuthor(`${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                embed.setThumbnail(data.sprites.front_default)
                embed.setTitle(`${data.name.charAt(0).toUpperCase() + data.name.slice(1)}`)
                embed.setURL(``)
                embed.addField(`⚖ Weight`,`${data.weight}`,true)
                embed.addField(`📏 Height`,`${data.weight}`,true)
                let e=''
                let a=0;
                data.types.forEach(types => {
                    console.log(types);
                    e += ' '+types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1);
                });
                data.moves.forEach(move=>{
                    a++;
                })
                console.log(e);
                embed.addField(`🧾 Types`,`${e.trimStart().replace(' ',', ')}`,true)
                embed.addField(`Summary `,`${data.name.charAt(0).toUpperCase() + data.name.slice(1)} is a ${e.trimStart().replace(' ',' and ')} type pokemon with ${a} moves that they can learn and ${data.base_experience} base exp`)
                embed.addFields(
                    //	{ name: '\u200B', value: '\u200B' },
                    {name:`${data.stats[0].stat.name.charAt(0).toUpperCase() + data.stats[0].stat.name.slice(1)}`,value:`${data.stats[0].base_stat}`,inline:true},
                    {name:`${data.stats[1].stat.name.charAt(0).toUpperCase() + data.stats[1].stat.name.slice(1)}`,value:`${data.stats[1].base_stat}`,inline:true},
                    {name:`${data.stats[2].stat.name.charAt(0).toUpperCase() + data.stats[2].stat.name.slice(1)}`,value:`${data.stats[2].base_stat}`,inline:true},
                    {name:`${data.stats[3].stat.name.charAt(0).toUpperCase() + data.stats[3].stat.name.slice(1)}`,value:`${data.stats[3].base_stat}`,inline:true},
                    {name:`${data.stats[4].stat.name.charAt(0).toUpperCase() + data.stats[4].stat.name.slice(1)}`,value:`${data.stats[4].base_stat}`,inline:true},
                    {name:`${data.stats[5].stat.name.charAt(0).toUpperCase() + data.stats[5].stat.name.slice(1)}`,value:`${data.stats[5].base_stat}`,inline:true},

                )
                .setFooter(`Using pokeapi.co`)
              interaction.reply({ embeds: [embed]});
                }
            }else{interaction.reply("that is not a pokemon see if you misspelled it"); return;}
                
            
    }
}