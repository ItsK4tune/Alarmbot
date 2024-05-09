import bot from "../initBot.js";

// Function to send alarm message
function sendMessage(chatId, message) {
    bot.sendMessage(chatId, message);
};

export default sendMessage;