import { isBotRunning, alarmQueue } from "../data.js";

import deleteAlarm from "../model/deleteAlarm.js";
import sendMessage from "../model/sendMessage.js";

let deleteAlarm_c = (msg, match) => {
    const chatId = msg.chat.id;
    let getChatBotRunning = isBotRunning.find(Id => Id == chatId);

    if (getChatBotRunning){
        // Check empty queue
        if (!alarmQueue.length){
            sendMessage(chatId, 'There are currently no alarm to delete');
            return;
        }

        // Get time and alarm message
        const time = match[1];

        // Parse time (assuming format HH:MM)
        const [hours, minutes] = time.split(':').map(Number);

        // Find alarm at inputed time
        const foundElement = alarmQueue.find(function (alarm) {
            if (alarm.hour == hours && alarm.minute == minutes){
            return alarm;
            } else {
                return;
            }
        });

        // Check existence
        if (foundElement) {
            deleteAlarm(foundElement);
            sendMessage(chatId, 'I\'ve deleted that alarm for ya');
        } else {
            sendMessage(chatId, `Cannot found alarm at ${time} in my memory.`);
        }
    }
}

export default deleteAlarm_c;