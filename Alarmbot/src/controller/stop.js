import { isBotRunning } from "../data.js";
import sendMessage from "../model/sendMessage.js";

let Stop_c = (msg) => {
    const chatId = msg.chat.id;

    // Get this chatId obj
    let getChatBotRunning = isBotRunning.find(Id => Id == chatId);

    // Check if this chatId have initialized the bot yet
    if (!getChatBotRunning){
        sendMessage(chatId, 'I\'m literally sleeping right now. Try using /start to awake me');
        return;
    }

    // Remove the chatId out of array
    const index = isBotRunning.indexOf(getChatBotRunning);
    isBotRunning.splice(index, 1);
    sendMessage(chatId, 'I\'m going to sleep. See ya~');
}

export default Stop_c;