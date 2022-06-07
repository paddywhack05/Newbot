
const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
const{MessageActionRow,MessageButton} = require('discord.js');
module.exports= {
name: "memeslash",
description:"memeslash command",
async execute(interaction,client){
    fetch();
    async function fetch(){
    redditFetch({
        
        subreddit:'memes',
        sort: 'top',
        allowNSFW: false,
    allowCrossPost: true,
        allowVideo: true,
        allowModPost: true,
        
     }).then(async post => {
        console.log(post);
         
             //if(post.is_video){fetch();return;}
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
                .setCustomId(`meme`)
                .setLabel(`Next Meme`)
                .setStyle("SUCCESS"),
            )
            .addComponents(
                new MessageButton()
                .setLabel(`r/memes`)
                .setURL(`https://www.reddit.com/r/memes/`)
                .setStyle("LINK"),
            )
//upvotes divided by upvote ratio = kinda of down votes
            //await interaction.reply({ content:`next meme`,component: [row]})
            if(post.fallback_url){
                if(interaction.isButton()||interaction.isSelectMenu()){
                    await interaction.channel.send({ embeds: [embed],content:`\n ${post.fallback_url}`, components: [row]});
                   }
                   else{
                   await interaction.reply({ embeds: [embed],content:`\n ${post.fallback_url}`, components: [row]});
                   }
            console.log(`dwn ${post.downs} \n ups${post.upvote_ratio} \n real downs ${anser}`)
        }
            else{
                if(interaction.isButton()||interaction.isSelectMenu()){
                    await interaction.channel.send({ embeds: [embed], components: [row]});
                   }
                   else{
                   await interaction.reply({ embeds: [embed], components: [row]});
                   }
            }
            //message.channel.send(`here is a meme ${message.author} ${post.title} ${post.url}`);
           
         }else {
             fetch();
         }
     
         
     });
  
}
}}