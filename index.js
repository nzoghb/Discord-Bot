const Discord = require('discord.js');
const bot = new Discord.Client();

var arr1;
var arr2;
var rand;
var execute;
var channel;
const prefix = "~";

bot.on('voiceJoin', (user, voiceChannel) => {
	console.log("hi");
	// channel.join()
	// 	.then(connection => console.log('Connected!'))
	// 	.catch(console.error);
});

bot.on('message', (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	if (message.content.slice(1) == "jojo") {
		execute = true;
		arr1 = Array("ORA ORA ORA ORA ORA ORA ORA !!!!!!",
			"ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ\n" +
			"ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴゴ ゴ\n" +
			"ＴＨＩＳ 　ＭＵＳＴ 　ＢＥ 　ＴＨＥ 　ＷＯＲＫ\n" +
			"ＯＦ 　ＡＮ 　ＥＮＥＭＹ 「ＳＴＡＮＤ」！！\n" +
			"ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴゴ ゴ\n" +
			"ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ ゴ\n",
			"YARE YARE DAZE...")
		arr2 = Array('ORA.mp3', 'enemy_stand.mp3', 'YYD.mp3')
	} else if (message.content.slice(1) == "dio") {
		execute = true;
		arr1 = Array("MUDA MUDA MUDA MUDA MUDA MUDA MUDA !!!!!!!", "Za WoRuDo !!!!!",
			'[ T H E W O R L D ]');
		arr2 = Array('MUDA.mp3', 'Za_Warudo.mp3', 'The_World.mp3')
	}
	if (execute) {

		channel = message.member.voiceChannel;
		rand = Math.floor(Math.random() * arr1.length);

		channel.join()
			.then(connection => {connection.playFile('./audio/' + arr2[rand])})
			.catch(console.error);

		// setTimeout( function() {
			message.channel.sendMessage(arr1[rand]);
		// }, 2000);

		setTimeout(function(){ channel.leave() }, 8000);
	}
});

bot.login('MzAyMzQwNTkzOTA3MTM4NTYx.C9IL1g.VTSOJ3ye9aOyUNdNFpy_2ZqAJ3g');
