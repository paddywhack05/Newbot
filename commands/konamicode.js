module.exports= {
    name: "konamicode",
    description:"konamicode command",
    execute(message){
        message.reply({
            content: 'hello '+ message.author.username,
            content: 'your codes have no power hear '+ message.author.username, 
        })
    }
}