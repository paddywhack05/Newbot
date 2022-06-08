
const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');

module.exports= {
    name: "join",
    description:"join command",
    execute(guild,client,owner,channel){
        const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setAuthor(`${guild.name}`, `${guild.iconURL({ dynamic: true })||client.user.displayAvatarURL({ dynamic: true })}`)
        .setTitle(`${guild.name}`)
        .setURL(`https://discord.com/oauth2/authorize?client_id=916743866915389542&permissions=8&scope=applications.commands%20bot`)
        .setDescription(` **Thank you for inviting me \n[Invite](https://discord.com/oauth2/authorize?client_id=916743866915389542&permissions=8&scope=applications.commands%20bot) | [Discord](https://discord.gg/yFZXQB8cjx)**\n\n**LINKS**\n**[Website](https://paddycrack.com) | [Github](https://github.com/paddywhack05/botthing) | [Top.gg](https://top.gg/bot/916743866915389542) | [DBL](https://discordbotlist.com/bots/paddycrackbot)**`)
        .setThumbnail(`${guild.iconURL({ dynamic: true })||client.user.displayAvatarURL({ dynamic: true })}`)
        .setFooter(`paddycrack.com`)
        const row = new Discord.MessageActionRow()
        .addComponents(
            new MessageButton()
            .setEmoji(`🌐`)
            .setLabel(`Website`)
            .setURL(`https://paddycrack.com`)
            .setStyle("LINK"),
        )
        .addComponents(
            new MessageButton()
            .setEmoji(`🌐`)
            .setLabel(`Top.gg`)
            .setURL(`https://top.gg/bot/916743866915389542`)
            .setStyle("LINK"),
        )
        .addComponents(
            new MessageButton()
            .setEmoji(`🌐`)
            .setLabel(`DBL`)
            .setURL(`https://discordbotlist.com/bots/paddycrackbot`)
            .setStyle("LINK"),
        )
        if(!channel){
            console.log("no permissions");
        }else{
        channel.send({ embeds: [embed],components: [row] });
    }
//---------------------------------------------------------------------------------------------owner send--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        const embe = new Discord.MessageEmbed()
        .setColor('RED')
        .setAuthor(`${guild.name}`, `${guild.iconURL({ dynamic: true })||client.user.displayAvatarURL({ dynamic: true })}`)
        .setTitle(`${guild.name}`)
        .setURL(`https://paddycrack.com`)
        .setDescription(`Thank you for choosing Paddycrack go to my [website](https://paddycrack.com)\n Vote for me on [Top.gg](https://top.gg/bot/916743866915389542/vote) or [DBL](https://discordbotlist.com/bots/paddycrackbot/upvote) if you want to get notified when you vote join [my comunity server](https://discord.gg/yFZXQB8cjx) it will also put your username on a list on my server when you join`)
        .setThumbnail(`${guild.iconURL({ dynamic: true })||client.user.displayAvatarURL({ dynamic: true })}`)
        .setFooter(`paddycrack.com`)
        const ro = new Discord.MessageActionRow()
        .addComponents(
            new MessageButton()
            .setEmoji(`🌐`)
            .setLabel(`Website`)
            .setURL(`https://paddycrack.com`)
            .setStyle("LINK"),
        )
        .addComponents(
            new MessageButton()
            .setEmoji(`🌐`)
            .setLabel(`Top.gg`)
            .setURL(`https://top.gg/bot/916743866915389542`)
            .setStyle("LINK"),
        )
        .addComponents(
            new MessageButton()
            .setEmoji(`🌐`)
            .setLabel(`DBL`)
            .setURL(`https://discordbotlist.com/bots/paddycrackbot`)
            .setStyle("LINK"),
        )
       owner.send({ embeds: [embe],components: [ro] });
   }
}