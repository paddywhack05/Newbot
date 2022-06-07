
const fetch = require('node-fetch');
const Discord = require('discord.js');
const redditFetch = require('reddit-fetch/src/redditFetch');
const{MessageActionRow,MessageButton} = require('discord.js');
module.exports= {
name: "redditslash",
description:"redditslash command",
async execute(interaction,client,text){
    check();
    async function check(){
        const url = `https://api.reddit.com/r/${text}/.json?limit=1&?sort=hot&t=all`;
        const res = await fetch(`${url}`);
        const dat = await res.json();
        console.log(dat);
        console.log(url);
        if (dat.error === 404||dat.error === 403||dat.data.dist === 0){
            interaction.channel.send(`subreddit not found reason ${dat.reason} message ${dat.message} err code ${dat.error} \n if it says undefind under message or err there was not enough data or a sub called that was deleted`);
        }
        else if(!interaction.guild){
            console.log("dm detected")
            interaction.reply("You cant use this command in dms");
            return;
           }
        else if (interaction.channel.nsfw){
            console.log("nsfw chanel detected")
            nfetch();
        }
       else{rfetch();}
    
    }
    async function rfetch(){
    redditFetch({
        
        subreddit:`${text}`,
        sort: `top`,
        allowNSFW: true,
    allowCrossPost: true,
        allowVideo: false,
        allowModPost: false,
        
     }).then(async post => {
        // console.log(post);
        if(post.over_18 === true){
            interaction.channel.send("https://www.youtube.com/watch?v=9Deg7VrpHbM")
            console.log("brugh");
            return;
        }
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
                .setLabel(`r/${text}`)
                .setURL(`https://www.reddit.com/r/${text}/`)
                .setStyle("LINK"),
            )
           
            await interaction.reply({ embeds: [embed],components: [row]});
            console.log(`dwn ${post.downs} \n ups${post.upvote_ratio} \n real downs ${anser}`)
            //message.channel.send(`here is a meme ${message.author} ${post.title} ${post.url}`);
           
         }else {
             rfetch();
         }
     
         
     });
  
}
async function nfetch(){
    redditFetch({
        
        subreddit:`${text}`,
        sort: `top`,
        allowNSFW: true,
    allowCrossPost: true,
        allowVideo: false,
        allowModPost: false,
        
     }).then(async post => {
        // console.log(post);
        
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
                .setLabel(`r/${text}`)
                .setURL(`https://www.reddit.com/r/${text}/`)
                .setStyle("LINK"),
            )
           
            await interaction.reply({ embeds: [embed],components: [row]});
            console.log(`dwn ${post.downs} \n ups${post.upvote_ratio} \n real downs ${anser}`)
            //message.channel.send(`here is a meme ${message.author} ${post.title} ${post.url}`);
           
         }else {
             nfetch();
         }
     
         
     });
  
}
}}