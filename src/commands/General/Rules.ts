import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'rules',
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/Rin/rules.mp4'
        ]
        let chitoge = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: chitoge }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: `_*----❤️[Bot Rules]❤️----*_\n\n❌*PLEASE DONT ASK FOR THE BOTSCRIPT*🙃\n*>>>* use #support to get the Official group link in your dm\n*--->*  If you want to chat with Elaina you can use *Don't chat in groups bot can only chat in dm\n*--->* If you want to add Elaina in your group the contact then contact owner by *#owner/$mods* \n*--->* Dont call the bot if you call you will be blocked with immediate effect dont  use wrong command, use the command given in the *help list* \n*--->* Dont spam the bot with commands if the bot is not responding, it means the bot maybe offline or facing internet issue. \n*--->* Dont Dm the bot \n\n*IF YOU DONT FOLLOW THE RULES THEN YOU WILL BE BANNED * 😑  ` }
        )
    } 
}
   
