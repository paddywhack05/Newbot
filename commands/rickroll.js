
module.exports= {
    name: "rickroll",
    description:"rickroll command",
    execute(message,client){

        message.reply ({content: "https://youtu.be/dQw4w9WgXcQ"})
        message.author.send("Im sorry but if you rick roll the entire chat you dont get away https://youtu.be/dQw4w9WgXcQ")
    }
}