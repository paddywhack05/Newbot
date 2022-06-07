
const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "rapslash",
description:"rapslash command",
execute(interaction){
    fetch();
    function fetch(){
    redditFetch({
        subreddit:'raplyrics',
        sort: 'top',
        allowNSFW: false,
       allowCrossPost: true,
        allowVideo: true,
        allowModPost: true,
       }).then(post => {
           if(post.upvote_ratio >= 0.90){
            interaction.reply(`here is a rap ${interaction.user.tag} TITLE ${post.title} RAP ${post.selftext} ${post.url}`);
               
            }else {
                fetch();
            }  
         });
}}}