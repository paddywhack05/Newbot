module.exports = {
    name: 'diceslash',
    description: 'dice slashcommand',
    async execute(interaction) {
      const dices = [
        'https://imgur.com/a/YdAmiRe',
        'https://imgur.com/a/w35gKMR',
        'https://imgur.com/a/MkDVhQS',
        'https://imgur.com/a/WCuaCbL',
        'https://imgur.com/a/0xyPIkx',
        'https://imgur.com/a/urv1H42',
      ];
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
      const ans = dice1 + dice2;
      // array's index starts at zero
      const url1 = dices[dice1 - 1];
      const url2 = dices[dice2 - 1];
  
      await interaction.reply({ content: `${url1}\n${url2}` });
      interaction.followUp({content: `You got ${ans}` });
    },
  };