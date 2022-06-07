
const{MessageActionRow,MessageButton} = require('discord.js');
const Discord = require('discord.js');

module.exports= {
    name: "inviteslash",
    description:"invite slashcommand",
    execute(interaction,client){
        e();
        async function e(){
        const embed = new Discord.MessageEmbed()
            .setColor('RED')
            .setAuthor(`${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
            .setTitle(`Invite Paddycrackbot to your server`)
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=916743866915389542&permissions=8&scope=applications.commands%20bot`)
            .setDescription(`**[Invite me](https://discord.com/api/oauth2/authorize?client_id=916743866915389542&permissions=8&scope=applications.commands%20bot) \n [Top.gg](https://top.gg/bot/916743866915389542)**`)
            .setThumbnail(`${client.user.displayAvatarURL({ dynamic: true })}`)
            .setFooter(`paddycrack.com`)
            .setImage(`${client.user.displayAvatarURL({ dynamic: true })}`)
            const row = new Discord.MessageActionRow()
            .addComponents(
                new MessageButton()
                .setEmoji(`🌐`)
                .setLabel(`Top.gg`)
                .setURL(`https://top.gg/bot/916743866915389542`)
                .setStyle("LINK"),
            )
            .addComponents(
                new MessageButton()
                .setEmoji(`📨`)
                .setLabel(`Invite`)
                .setURL(`https://discord.com/api/oauth2/authorize?client_id=916743866915389542&permissions=8&scope=applications.commands%20bot`)
                .setStyle("LINK"),
            )
          await interaction.reply({ embeds: [embed],components: [row]});
    }
   }
}