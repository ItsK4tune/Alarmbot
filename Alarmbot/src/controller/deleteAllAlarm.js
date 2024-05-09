import { isBotRunning, alarmQueue, dailyAlarmQueue } from "../data.js";

import sendMessage from "../model/sendMessage.js";

let deleteAllAlarm_c = (msg) => {
    const chatId = msg.chat.id;
    let getChatBotRunning = isBotRunning.find(Id => Id == chatId);

    if (getChatBotRunning){
        // Check empty queue
        if (!alarmQueue.length && !dailyAlarmQueue.length){
            sendMessage(chatId, 'There are currently no alarm to delete');
            return;
        }

        // Delete all alarm set by chatId
        for (const alarm of alarmQueue)
            if (alarm.Id == chatId){
                const index = alarmQueue.indexOf(alarm);
                alarmQueue.splice(index, 1);    
            }

        for (const alarm of alarmQueue)
            if (alarm.Id == chatId){
                const index = alarmQueue.indexOf(alarm);
                alarmQueue.splice(index, 1);    
            }
        // Send a response
        sendMessage(chatId, 'I emptied all the alarm')
    }
}

export default deleteAllAlarm_c;