
const fetch = require('node-fetch');
const Discord = require('discord.js');
module.exports= {
    name: "covidslash",
    description:"covid slashcommand",
    execute(interaction,client){
       
            e();
            async function e(){

                const url = `https://disease.sh/v3/covid-19/all`;
                const res = await fetch(`${url}`);
                const data = await res.json();
                console.log(data);
            const embed = new Discord.MessageEmbed()
                embed.setColor('RED')
                embed.setAuthor(`${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
                embed.setThumbnail(`https://cdn.britannica.com/06/215106-131-41CC5B68/Magnified-image-coronavirus-clublike-protein-spikes.jpg`)
                embed.setTitle(`Covid Info`)
                const cases = (data.cases).toLocaleString(
                    undefined,
                  );
                  const todayCases = (data.todayCases).toLocaleString(
                    undefined,
                  );
                  const deaths = (data.deaths).toLocaleString(
                    undefined,
                  );
                  const todayDeaths = (data.todayDeaths).toLocaleString(
                    undefined,
                  );
                  const recovered = (data.recovered).toLocaleString(
                    undefined,
                  );
                  const todayRecovered = (data.todayRecovered).toLocaleString(
                    undefined,
                  );
                  const critical = (data.critical).toLocaleString(
                    undefined,
                  );
                  const casesPerOneMillion = (data.casesPerOneMillion).toLocaleString(
                    undefined,
                  );
                  const tests = (data.tests).toLocaleString(
                    undefined,
                  );
                embed.addFields(
                    {name:`Total Cases`,value:`${cases}`,inline:true},
                    {name:`Cases Today`,value:`${todayCases}`,inline:true},
                    {name:`Total Deaths`,value:`${deaths}`,inline:true},
                    {name:`Deaths Today`,value:`${todayDeaths}`,inline:true},
                    {name:`Recovered`,value:`${recovered}`,inline:true},
                    {name:`Recoverd Today`,value:`${todayRecovered}`,inline:true},
                    {name:`Critical condition`,value:`${critical}`,inline:true},
                    {name:`Cases per million`,value:`${casesPerOneMillion}`,inline:true},
                    {name:`Covid Tests`,value:`${tests}`,inline:true},
                )
                embed.setURL(``)
                embed.setFooter(`source disease.sh`)
                interaction.reply({ embeds: [embed]});
            
        }
    }
}