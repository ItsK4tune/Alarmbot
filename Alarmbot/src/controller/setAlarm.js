import { isBotRunning, alarmQueue } from "../data.js";

import addAlarm from "../model/addAlarm.js";
import sendMessage from "../model/sendMessage.js";

let setAlarm_c = (msg, match) => {
    const chatId = msg.chat.id;
    let getChatBotRunning = isBotRunning.find(Id => Id == chatId);

    if (getChatBotRunning){
        // Get time and alarm message
        const time = match[1].trim();
        const message = match[2];

        // Parse time (assuming format HH:MM)
        const [hours, minutes] = time.split(':').map(Number);

        // Check alarm at HH:MM existence
        let checkAlarm = alarmQueue.find(alarm => {
            if (alarm.Id == chatId && alarm.hour == hours && alarm.minute == minutes)
                return alarm;
        });

        if (checkAlarm){
            sendMessage(chatId, `There has been an alarm at ` + (hours < 10 ? `0${hours}` : hours.toString()) + ':' + (minutes < 10 ? `0${minutes}` : minutes.toString()) + `. Use /show to see all set alarm`)
            return;
        }

        // Store alarm information
        addAlarm(chatId, hours, minutes, message);

        // Send a response
        sendMessage(chatId, `I\'ve set an alarm for you at ${time} with message: ${message}`)
    }
}

export default setAlarm_c;