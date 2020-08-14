const Discord = require('discord.js');
const client = new Discord.Client();
const {RichEmbed} = require('discord.js')
const { prefix, token } = require('./config.json');
const { Client, MessageEmbed } = require('discord.js');

client.login(token);
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({status: 'idle', game:{name: '%help to get help!', type: 1}})
});

client.on('message', message =>{
  if (message.content === `${prefix}ping`) {
	message.channel.send('Pong.');
} else if (message.content === `${prefix}beep`) {
	message.channel.send('Boop.');
}
})

client.on('message', message => {
  console.log('============================================');
  console.log(`Сообщение ${message.author.tag} было отправлено в канал #${message.channel.name} сервера "${message.guild.name}".`);
  console.log(`Содержимое: ${message.content}`)
});

client.on('message', message => {
  if(message.content === `${prefix}profile`) {
    const embed = new MessageEmbed()
      .setTitle(`Профиль игрока ${message.author.username}`)
      .addField('Дискриминатор', `${message.author.discriminator}`)
      .addField('Верификция', `${message.client.user.verified}`)
      .addField('ID', `${message.author.id}`)
      .addField('Аккаунт Создан', `${message.author.createdAt}`)
      .addField('Полное имя', `${message.author.tag}`)
      .setFooter(`${message.guild.name} DS`)
      .setColor(0xffdb00)
    message.channel.send(embed)
  }
});

client.on('message', message => {
  if(message.content === `${prefix}serverinfo`){
    const embed = new MessageEmbed()
      .setTitle(`Информация о сервере ${message.guild.name}`)
      .addField('Каналов', `${message.guild.channels}`, true)
      .addField('Ролей', `${message.guild.roles}`, true)
      .addField('Владелец', `${message.guild.owner}`, true)
      .addField('Регион', `${message.guild.region}`, true)
      .setFooter(`Команда запрошена ${message.author.username}, ID: ${message.author.id}`)
      .setColor(0xffdb00)
    message.channel.send(embed)
  }
});

client.on('message', message => {
  if(message.content === `${prefix}help`){
    const embed = new MessageEmbed()
      .setTitle('Справочный центр')
      .addField('Тестовые команды','%ping - `"Pong!"`\n%beep - `"Boop!"`')
      .addField('Утилиты', '%profile - `Открыть свой профиль`\n%serverinfo - `Узнать информацию о сервере`')
      .setColor(0xffdb00)
      .setFooter(`${message.guild.name} DS`)
  message.channel.send(embed)
  }
})

client.on('message', message => {
  if(message.content === `${prefix}test`){
    message.channel.send('Тест')
  }
})

client.on('message', message => {
  if(message.content === `${prefix}gitrep`){
    const embed = new MessageEmbed()
      .setTitle('Github Repository')
      .setColor(0xffdb00)
      .setDescription('')
  }
})