
const redditFetch = require('reddit-fetch/src/redditFetch');
module.exports= {
name: "rap",
description:"rap command",
execute(message){
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
               
               message.channel.send(`here is a rap ${message.author} TITLE ${post.title} RAP ${post.selftext} ${post.url}`);
            }else {
                fetch();
            }  
         });
}}}