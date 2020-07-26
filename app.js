const Discord = require("discord.js");
const client = new Discord.Client();
const { Client, RichEmbed } = require('discord.js');
client.login("NzMzMzUzNzA0NTY4Mzg5NzIz.XxguoA.MwTNCx5KCWdiax_kAMxi_iswoRM");
console.log("Я запустилси, хазяин!");
const fs = require("fs");

client.on("message", (message) => { 
  if(message.content == "%help"){ 
  message.channel.send({embed: {
    "title": "Список команд бота",
  "fields": [
    {
      "name": "`%status`",
      "value": "**Посмотреть статус бота.**"
    },
    {
      "name": "`%staffs`",
      "value": "**Посмотреть список членов администрации сервера.**"
    },
	{
		"name": "`%credits`",
		"value": "**Посмотреть авторов бота**",
	}],
    "color": 16763392,
  },
},
); 
  } 
  }); 
  
  client.on("message", (message) => { 
    if(message.content == "%status"){ 
    message.channel.send({embed: {
      "title": "Статус бота",
    "description": "**Готов к испытаниям!**",
    "color": 16763392,
  },
    }); 
    } 
    }); 

    client.on("message", (message) => { 
      if(message.content == "%staffs"){ 
      message.channel.send({embed: {
        "title": "Члены администрации сервера",
      "fields": [
        {
          "name": "Администратор",
          "value": "**DesoCrew#8859**"
        },
        {
          "name": "Младший Администратор",
          "value": "**TheSpecial#6356**"
        },
        {
          "name": "Младший Администратор",
          "value": "**Млекопитающий мимокрокодил#7066**"
        }],
        "color": 16763392,
      },
    },
    ); 
      } 
      }); 

      client.on("message", (message) => { 
        if(message.content == "%credits"){ 
        message.channel.send({embed: {
          "title": "Авторы бота",
        "fields": [
          {
            "name": "Кодер",
            "value": "DesoCrew#8859"
          },
		  {
			  
			"name": "Дизайнер-кодер",
			"value": "TheSpecial#6356"
		  }],
          "color": 16763392,
        },
      },
      ); 
        } 
        }); 
		
client.on("ready", () => {
 client.user.setStatus('dnd');
    client.user.setPresence({
		game: {
            name: 'Help | t!help',
            type: "STREAMING",
            url: "https://www.twitch.tv/floodfloodis"
		}})});
		
client.on("message", (message) => { 
  if(message.content == "%entity96584"){ 
  message.channel.send({embed: {
    "title": "Доска объявлений",
	"description":"Здесь будут публиковаться ваши объявления.",
	"footer": 
	{
        "text":"По объявлениям к Администрации"		
	},
  "fields": [
    {
      "name": "`Типы объявлений:`",
      "value": "Системные (От админов) ||Значок: 💠|| \nCustom (От участников) ||Значок: 🔶||"
    },
    {
      "name": "`Права участников:`",
      "value": "1. Цена до 3k\n2. Обычный текст\n3. Без рейтинга\n4. Срок 5 дней."
    },
    {
		"name":"`Права донат. ролей:`",
		"value":"1. Цена до 10k\n2. Embed текст/Баннер\n3. Рейтинг\n4. Срок 10 дней."
	}],
    "color": 16763392,
  },
},
); 
  } 
  }); 

client.on("message", (message) => { 
    if(message.content == "%adminhelp2281337"){ 
    message.channel.send({embed: {
      "title": "Команды админов",
    "description": "**РАЗРЕШЕНО ТОЛЬКО DesoCrew**",
	"fields": [
	{
		"name": "Доска объявлений",
		"value": "entity96584"
	},
	{
		"name": "Кланы",
		"value": "entity93756"
	}],
    "color": 16763392,
  },
    }); 
    } 
    }); 

client.on("message", (message) => { 
    if(message.content == "%entity93756"){ 
    message.channel.send({embed: {
      "title": "Создать клан",
	  "description": "Создание клана доступно с 10 уровня.",
	"fields": [
	{
		"name": "`Анкета:`",
		"value": "1. Название\n2. Цвет роли\n3. Глава клана\n4. Участники клана\n5. Флаг (эмодзи) клана."
	}],
    "color": 16763392,
  },
    }); 
    } 
    }); 

    client.on("message", (message) => { 
      if(message.content == "%newsRoleUnicodeUpdate"){ 
      message.channel.send({
        "embed": {
        "title": "Role Unicode Update",
        "description": "Первое обновление для нашего сервера.\nВстречайте! Ролевое обновление, где обновяться некоторые роли сервера.\n\n**`Список изменений:`**",
        "color": 16098851,
        "image": {
          "url": "https://imgur.com/Uefjrjd.png"
        },
        "author": {
          "name": "DesoCrew#8859",
          "icon_url": "https://imgur.com/lOXWsCF.png"
        },
        "fields": [
          {
            "name": "Обновлены роли администрации:",
            "value": "@◈ Администратор\n@◈ Младший Администратор\n@◈ Старший модератор\n@◈ Младший модератор \n@◈ Хелпер"
          },
          {
            "name":"Обновлены роли партнёров:",
            "value":"@Партнёр ⟩ 1 LVL\n@Партнёр ⟩ 2 LVL\n@Партнёр ⟩ 3 LVL "
          },
          {
            "name": "Обновлены роли уровней",
            "value": "@Hero ⟩ 1 LVL\n@God ⟩ 5 LVL\n@Supreme ⟩ 10 LVL\n@Legend ⟩ 15 LVL\n@oLegacy ⟩ 20 LVL\n@Wither ⟩ 25 LVL\n@Phoenix ⟩ 30 LVL\n@Avenger ⟩ 35 LVL\n@Phantom ⟩ 40 LVL"
          },
          {
            "name": "На этом всё!",
            "value": "Надеюсь в будущем будет больше обновлений.\n**Спасибо за внимание!**"
          }
        ]
      }
    }
      )}})