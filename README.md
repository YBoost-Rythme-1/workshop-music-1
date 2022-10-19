# workshop-music-1
YBoost workshop #1 | 12/10/2022

# Bot discord

## Objective

You have to create a discord bot that will be able to :  
* play music 
* Play a playlist of music 
* Stop the music
* Play a random music from a key word 
* Create an internal playlist in a server

## Notion 
* [Golang documentation : Flag](https://pkg.go.dev/flag)
* [Golang documentation : Discord](https://pkg.go.dev/github.com/bwmarrin/discordgo)
* [Golang documentation : Net/http](https://pkg.go.dev/net/http)
* [Golang documentation : Os](https://pkg.go.dev/os)
* [Golang documentation : syscall](https://pkg.go.dev/syscall)

## Before you start
Discord is a chat application working like Teams with servers and channels.
You can create a discord server and invite your friends to it. You can also create a bot that will be able to join your server and interact with it.  
If you don't have a discord account, you can create one [here](https://discord.com/register).
Then, you had to enable the developer mode in your discord settings. You can follow [this](https://beebom.com/how-enable-disable-developer-mode-discord/) tutorial to do it.

## Step 1 : Create a bot 
To create a bot, you have to go to the [discord developer portal](https://discord.com/developers/applications) and create a new application.  
Then, you have to go to the bot tab and create a new bot.

## Step 2 : Invite your bot to your server
To invite your bot to your server, you have to go to the OAuth2 tab from the developer portal and select the bot scope.  
Then, you have to select the permissions you want your bot to have.  
Finally, you have to copy the link and paste it in your browser. You will be able to select the server you want to add your bot to.

## Step 3 : Edit your bot in golang
Using the discordgo package, you have to create a bot that will be able to join a voice channel and play a music.
Here is the github of the package : [discordgo](https://github.com/bwmarrin/discordgo) where you can find the documentation and exemple.

You can follow this [tutorial](https://dev.to/aurelievache/learning-go-by-examples-part-4-create-a-bot-for-discord-in-go-43cf) to make your bot

## ORGANISATION PROPOSITION 

Dev 1 (easy) : play, pause, stop a music or a playlist
Dev 2 (medium -) : create a daily recommandation song which has never been offered during this daily and has a release date of less than a month
Dev 3 (medium -) : play, pause, stop a random music from a key word
Dev 4 (medium -) : create an internal playlist in a server and play it
Dev 5 (medium +) : create user's stats (count songs played, type of songs (rap, jazz, rock...), duration of listening...) 
