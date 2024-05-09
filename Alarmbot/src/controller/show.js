import { isBotRunning, alarmQueue, dailyAlarmQueue } from "../data.js";
import sendMessage from "../model/sendMessage.js";

let show_c = (msg) => {
    const chatId = msg.chat.id;

    let getChatBotRunning = isBotRunning.find(Id => Id == chatId);

    if(getChatBotRunning){
        let alarmCheck = alarmQueue.find(alarm => alarm.Id == chatId);
        let dailyAlarmCheck = dailyAlarmQueue.find(alarm => alarm.Id == chatId);

        if ((!alarmCheck) && (!dailyAlarmCheck)){
            sendMessage(chatId, 'There are currently no set alarm to show.')
            return;
        }

        var outputText = '';
        for (const alarm of alarmQueue){
            if (alarm.Id == chatId)
                outputText += ' - ' + (alarm.hour < 10 ? `0${alarm.hour}` : alarm.hour.toString()) + ':' + (alarm.minute < 10 ? `0${alarm.minute}` : alarm.minute.toString()) + ' with a message: ' + alarm.message + '.\n';
        }
        for (const alarm of dailyAlarmQueue){
            if (alarm.Id == chatId)
                outputText += ' - ' + 'daily at ' + (alarm.hour < 10 ? `0${alarm.hour}` : alarm.hour.toString()) + ':' + (alarm.minute < 10 ? `0${alarm.minute}` : alarm.minute.toString()) + ' with a message: ' + alarm.message + '.\n';
        }
        sendMessage(chatId, 'I\'d love to show you all of the timemark that i will alarm you:\n' + outputText);
        return;
    }
}

export default show_c;