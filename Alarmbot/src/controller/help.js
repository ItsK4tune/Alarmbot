import { isBotRunning } from "../data.js";
import sendMessage from "../model/sendMessage.js";

let help_c = (msg) => {
    const chatId = msg.chat.id;

    let getChatBotRunning = isBotRunning.find(Id => Id == chatId);
    
    if(getChatBotRunning){
        sendMessage(chatId, 'Here is all of my commands:\n\/\start: to wake me up.\n\/\stop: to make me sleep.\n\/\setalarm <HH:MM> <Message>: set an alarm at HH:MM with a message.\n\/\setdailyalarm <HH:MM> <Message>: set a daily alarm at HH:MM with a message.\n\/\show: show all set alarm.\n\/\deletealarm <HH:MM>: delete an alarm at HH:MM.\n\/\deletedailyalarm <HH:MM>: delete a daily alarm at HH:MM.\n\/\deleteallalarm: delete all alarm.');
        return;
    }
}

export default help_c;