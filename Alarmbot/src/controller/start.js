import { isBotRunning } from "../data.js";
import sendMessage from "../model/sendMessage.js";

let Start_c = (msg) => {
    const chatId = msg.chat.id;

    // Get this chatId obj
    let getChatBotRunning = isBotRunning.find(Id => Id == chatId);

    // Check if the bot started in this chatId
    if (getChatBotRunning){
        sendMessage(chatId, 'I\'m currently listening. Don\'t need to call me again')
        return;
    }

    // Push the chatId into active array
    isBotRunning.push(chatId);
    sendMessage(chatId, 'Welcome to the alarm bot! Use \/help to see what i can do.');
}

export default Start_c;