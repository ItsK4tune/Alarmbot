import { alarmQueue } from "../data.js";

// Function to add an alarm
function addAlarm(chatId, hours, minutes, messages) {
    // Sort queue ascendently
    let insertIndex = alarmQueue.findIndex(obj => {
        if (obj.hour > hours)
            return true;
        if (obj.hour == hours)
            if (obj.minute > minutes)
                return true;
        else    return false;
    });

    if (insertIndex === -1) {
        alarmQueue.push({Id: chatId , hour: hours, minute: minutes, message: messages});
        return;
    }
    alarmQueue.splice(insertIndex, 0, {Id: chatId , hour: hours, minute: minutes, message: messages});
};

export default addAlarm;