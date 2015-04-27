(function () {
    //Nome de usuário de onde foi feito a cópia, assim você não precisa mudar tanta coisa.
    var fork = "overallwarf47";
		
    //Definir função pela extensão do bot.
    function extend() {
        //Se o bot não iniciou corretamente, tente novamente 1 segundo depois.
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaução para ter certeza de que foi atribuido corretamente.
        var bot = window.bot;

        //Carregar configurações personalizadas abaixo. ↓
        bot.retrieveSettings();

        /*
         Extenda o bot aqui, ou criando uma nova função ou aqui diretamente.
         Modelo de código para um comando do bot:
         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Funcionalidade do comando vem aqui.
         }
         }
         }
         */

	/* bot.commands.biscoitoCommand: {
                command: ['cookie', 'biscoito'],
                rank: 'user',
                type: 'startsWith',
                cookies: ['te deu um biscoito de chocolate!',
                    'te deu um biscoito macio, feito em casa, de aveia!',
                    'te deu um biscoito liso, seco e velho. O último da caixa. Nojento.',
                    'te dá um biscoito de açúcar. O que? Sem flocos? Se eu fosse você não aceitava...',
                    'te dá um biscoito de chocolate. Não pera, isso são passas. Urgh!',
                    'te dá um biscoito enorme. Cutucando esse biscoito ele te dá mais biscoitos. Estranho.',
                    'te dá um biscoito da sorte. Ele diz: "Por que você não está trabalhando em algum projeto?"',
                    'te dá um biscoito da sorte. Ele diz: "Siga os bons e aprenda com eles."',
                    'te dá um biscoito da sorte. Ele diz: "Se morrer não morra!"',
                    'te dá um biscoito da sorte. Ele diz: "Vai pra fora."',
                    'te dá um biscoito da sorte. Ele diz: "Não esqueça os vegetais..."',
                    'te dá um biscoito da sorte. Ele diz: "A vida coloca em nossa frente opções."',
                    'te dá um biscoito da sorte. Ele diz: "De um biscoito pra mim porque sim."',
                    'te dá um biscoito da sorte. Ele diz: "Se se virar um pouco, vai ver as moças bonitas."',
                    'te dá um biscoito da sorte. Ele diz: "Eu te amo."',
                    'te dá um biscoito de ouro. Você não pode comer, pois é feito de ouro. Droga.',
                    'te dá um biscoito Oreo com um copo de leite.',
                    'te dá um biscoito de arco-íris feito com amor <3',
                    'te dá um biscoito velho, que ficou na chuva. É mofado.',
                    'te faz biscoitos frescos! Eles cheiram ótimo!',
                    'te dá biscoitos feitos ano passado, eu daria o mesmo biscoito para ele',
                    'te deu um biscoito bem marrom, e não cheira muito bem, eu comeria...',
                    'te dá um biscoito da sorte. Ele diz: "me pague 10 centavos pelo biscoito'
                ],
                getCookie: function () {
                    var c = Math.floor(Math.random() * this.cookies.length);
                    return this.cookies[c];
                },
                functionality: function (chat, cmd) {
                    if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                    if (!basicBot.commands.executable(this.rank, chat)) return void (0);
                    else {
                        var msg = chat.message;
                        var space = msg.indexOf(' ');
                        if (space === -1) {
                            API.sendChat(basicBot.chat.eatcookie);
                            return false;
                        }
                        else {
                            var name = msg.substring(space + 2);
                            var user = basicBot.userUtilities.lookupUserName(name);
                            if (user === false || !user.inRoom) {
                                return API.sendChat(subChat(basicBot.chat.nousercookie, {name: name}));
                            }
                            else if (user.username === chat.un) {
                                return API.sendChat(subChat(basicBot.chat.selfcookie, {name: name}));
                            }
                            else {
                                return API.sendChat(subChat(basicBot.chat.cookie, {nameto: user.username, namefrom: chat.un, cookie: this.getCookie()}));
                            }
                        }
                    }
                }
            }, */
        //Carregar o pacote do chat novamente para registrar todas as mudanças
        bot.loadChat();

    }

    //Mudar as configurações padrões do bot e ter certeza que elas foram carregadas corretamente

    localStorage.setItem("basicBotsettings", JSON.stringify({
    	version: "1.0.0",
        status: false,
        botName: "EhAqui BOT",
        language: "portuguese",
        startupCap: 1, // 1-200
        startupVolume: 100, // 0-100
        startupEmoji: false, // true ou false
        chatLink: "https://rawgit.com/overallwarf47/EhAquiBOT/master/pt.json",
        maximumAfk: 120,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 2,
        timeGuard: true,
        maximumSongLength: 6,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
        	["tema", "A música não se encaixa nos padrões da sala. "],
        	["op", "Essa música está na lista OP. "],
        	["historico", "A música ainda está no histórico. "],
        	["mix", "Você tocou um mix (muito longo) - não permitido. "],
        	["som", "A música que você tocou tinha má qualidade ou estava sem som. "],
        	["nsfw", "A música que você tocou é NSFW (impróprio). "],
        	["indisponivel", "A música que você tocou está indisponível. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Mensagem temporária do dia",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: 'https://www.facebook.com/EhAquiOficial',
        youtubeLink: null,
        website: 'http://ehaqui.com/',
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Inicia o bot e o extende quando for completamente carregado.
    $.getScript("https://rawgit.com/motelbible/basicBot/master/basicBot.js", extend);

}).call(this);
