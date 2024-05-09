import { alarmQueue } from "../data.js";

import sendMessage from "./sendMessage.js";
import deleteAlarm from "./deleteAlarm.js";

// Function to check current alarms in queue
function checkAlarms() {
    // Get current time
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    // Loop through all alarms
    for (const alarm of alarmQueue) {
        // const [hour, minute, message] = alarm;

        // Check if the current time matches the alarm time
        if (currentHour === alarm.hour && currentMinute === alarm.minute) {
            // Send the alarm message
            sendMessage(alarm.Id, alarm.message);

            // Delete the alarm 
            deleteAlarm(alarm);
        }
    }
};

export default checkAlarms;