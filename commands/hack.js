module.exports= {
    name: "hack",
    description:"hack command",
    execute(message){
        message.reply({content:"online hacking"})
        message.reply({content:"sudo hydra -l “dwight.schrute” -P passwords.txt 50.116.24.84 ssh"})
        message.reply({content:"failed fire wall caught trying offline hacking with md5 hash"})
        message.reply({content:"sudo hashcat -a 0 -m 0 -o decodedpass.txt \  d3ad16e86a2bf2c2ad74cc177ae69025  exspectedpasses.txt"})
        }
    }
