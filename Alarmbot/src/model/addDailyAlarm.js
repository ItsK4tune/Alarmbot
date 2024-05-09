import { dailyAlarmQueue } from "../data.js";

// Function to add an alarm
function addDailyAlarm(chatId, hours, minutes, messages) {
    // Sort queue ascendently
    let insertIndex = dailyAlarmQueue.findIndex(obj => {
        if (obj.hour > hours)
            return true;
        if (obj.hour == hours)
            if (obj.minute > minutes)
                return true;
        else    return false;
    });

    if (insertIndex === -1) {
        dailyAlarmQueue.push({Id: chatId , hour: hours, minute: minutes, message: messages});
        return;
    }
    dailyAlarmQueue.splice(insertIndex, 0, {Id: chatId , hour: hours, minute: minutes, message: messages});
};

export default addDailyAlarm;