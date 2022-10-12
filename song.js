// package main

// // var (
// // 	Token string
// // )

// // const KuteGoAPIURL = "https://kutego-api-xxxxx-ew.a.run.app"

// // func init() {
// // 	flag.StringVar(&Token, "t", "", "Bot Token")
// // 	flag.Parse()
// // }
// // func main() {
// // 	discord, err := discordgo.New("Bot " + Token)
// // 	if err != nil {
// // 		fmt.Println("error creating discord session", err)
// // 		return
// // 	}
// // 	discord.AddHandler(messageCreate)
// // 	discord.Identify.Intents = discordgo.IntentsGuildMessages
// // 	err = discord.Open()
// // 	if err != nil {
// // 		fmt.Println("error opening connection,", err)
// // 		return
// // 	}
// // 	fmt.Println("Bot is now running. Press CTRL-C to exit.")
// // 	sc := make(chan os.Signal, 1)
// // 	signal.Notify(sc, syscall.SIGINT, syscall.SIGTERM, os.Interrupt, os.Kill)
// // 	<-sc
// // 	discord.Close()
// // }

// // type Abot struct {
// // 	Name string `json: "name"`
// // }

// // func messageCreate(s *discordgo.Session, m *discordgo.MessageCreate) {

// // 	if m.Author.ID == s.State.User.ID {
// // 		return
// // 	}
// // 	if m.Content == "!play" {
// // 		response, err := http.Get(KuteGoAPIURL + "/gopher/" + "dr-who")
// // 		if err != nil {
// // 			fmt.Println(err)
// // 		}
// // 		defer response.Body.Close()

// // 		if response.StatusCode == 200 {
// // 			_, err = s.ChannelFileSend(m.ChannelID, "dr-who.png", response.Body)
// // 			if err != nil {
// // 				fmt.Println(err)
// // 			}
// // 		} else {
// // 			fmt.Println("Error: Can't get dr-who Gopher! :-(")
// // 		}

// //		}
// //	}
// type Song struct {
// 	Url string
// }

// func TypeSong(url string) *Song {
// 	return &Song{
// 		Url: url,
// 	}
// }
const { CommandoClient }= require ('discord.js-commando');
const path = require('path');


const client = new 	CommandoClient({
commandPrefix:'-',
owner:'461431119150317578',
invite:'https://discord.gg/gu7nKyQn'
});
client.registry
	.registerDefaultTypes()
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerGroup('music','Music')
	.registerCommandsIn(path.join(__dirname, 'commands'));
	
	client.once('ready', ()=> {
		console.log(`Connecté en tant que ${client.user.tag} - (${client.user.id})`);
	})
	client.on('error',(error)=>console.error(error));

	client.login('MTAyOTcwMDA2ODM2NzkyOTM2NA.GPU8xC.cj5PC4LG_E_tr2Aknpk5D8RkyD2txM_4i5zSQs')