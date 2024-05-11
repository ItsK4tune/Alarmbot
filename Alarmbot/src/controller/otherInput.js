import { isBotRunning, excludedCommands } from "../data.js";
import sendMessage from "../model/sendMessage.js";

let otherInput_c = (msg) => {
    const chatId = msg.chat.id;

    let getChatBotRunning = isBotRunning.find(Id => Id == chatId);

    // No sending message when request start with ... in excludedCommands
    if((!getChatBotRunning) && msg.text !== ('/start') && msg.text !== '/stop'){
        sendMessage(chatId, 'I\'m currently off to work right now. Use /start to make me return to work');
        return;
    } else {
        const isExcludedCommand = excludedCommands.some(command => msg.text.startsWith(command));
        if (!isExcludedCommand && msg.text.startsWith('/')){
            // Check bot's running status
            sendMessage(chatId, 'I can\'t understand your command. Maybe \/help will help you.');
        }
    }  
}

export default otherInput_c;