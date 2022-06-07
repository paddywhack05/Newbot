
const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "ukrainenews",
description:"ukrainenews command",
execute(message){
    fetch();
    function fetch(){
    redditFetch({
        subreddit:'UkraineWarReports',
        sort: 'top',
        allowNSFW: false,
       allowCrossPost: true,
        allowVideo: true,
        allowModPost: true,
       }).then(post => {
        if (post.selftext.length >= 256){ 
            fetch();
         return; }
         if (post.title.length >= 256){ 
            fetch();
         return; }
           if(post.upvote_ratio >= 0.90){
            var anser = 1.00-post.upvote_ratio;
           console.log(anser);
           var dwn = anser * post.ups;
           console.log(final);
           var final = Math.round(dwn);
            const embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle(`${post.title}`)
            .setURL(`https://redd.it/${post.id}`)
            .setDescription(`${post.selftext}`)
            .setThumbnail(`${post.url}`)
            //.addField('field test','field description test')
            .setImage(`${post.url}`)
            .setFooter(`💬 ${post.num_comments} 👍 ${post.ups}  👎 ${final}`)
            const row = new Discord.MessageActionRow()
            .addComponents(
                new MessageButton()
                .setCustomId(`news`)
                .setLabel(`More news about glorious nation`)
                .setStyle("SUCCESS"),
            )
            .addComponents(
                new MessageButton()
                .setLabel(`r/UkraineWarReports`)
                .setURL(`https://www.reddit.com/r/UkraineWarReports/`)
                .setStyle("LINK"),
            )
         message.channel.send({ embeds: [embed],components: [row] });
            //message.channel.send(`here is a meme ${message.author} ${post.title} ${post.url}`);
            }else {
                
                fetch();
            }  
         });
}}}