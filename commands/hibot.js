module.exports= {
    name: "hibot",
    description:"hibot command",
    execute(message){
        message.reply({
            content: 'hello '+ message.author.username,
        })
    }
}