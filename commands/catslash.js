
const { EmbedAssertions } = require('@discordjs/builders');
const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "catslash",
description:"catslash command",
execute(interaction,client){
    fetch();
    function fetch(){
     redditFetch({
    subreddit:'catpics',
    sort: 'top',
    allowNSFW: false,
   allowCrossPost: true,
    allowVideo: true,
    allowModPost: false,
   }).then(async post => {
    if(post.is_video){fetch();return;}
    if(post.url.includes("gallery")){fetch();return;}
       if(post.upvote_ratio >= 0.90){
        var anser = 1.00-post.upvote_ratio;
        console.log(anser);
        var dwn = anser * post.ups;
        console.log(final);
        var final = Math.round(dwn);
           const embed = new Discord.MessageEmbed()
           .setColor('RED')
           .setAuthor(`${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
           .setTitle(`${post.title}`)
           .setURL(`https://redd.it/${post.id}`)
           .setDescription(`${post.selftext}`)
           .setThumbnail(`${post.url}`)
           //.addField('field test','field description test')
           .setImage(`${post.url}`)
           .setFooter(`💬 ${post.num_comments} 👍 ${post.ups} 👎 ${final}`)
           const row = new Discord.MessageActionRow()
           .addComponents(
               new MessageButton()
               .setCustomId(`cat`)
               .setLabel(`Next Cat`)
               .setStyle("SUCCESS"),
           )
           .addComponents(
            new MessageButton()
            .setLabel(`r/catpics`)
            .setURL(`https://www.reddit.com/r/catpics/`)
            .setStyle("LINK"),
        )
           if(interaction.isButton()||interaction.isSelectMenu()){
               try{
            await interaction.channel.send({ embeds: [embed], components: [row]});
               }catch(err){
                await interaction.user.send({content:"I cant send it in the channel because I don have proper permissions but", embeds:[embed], components:[row]})
               }
           }
           else{
           await interaction.reply({ embeds: [embed], components: [row]});
           }
        
           
           console.log(post);
      }else {
          fetch();
      }  
   });
  
}}}