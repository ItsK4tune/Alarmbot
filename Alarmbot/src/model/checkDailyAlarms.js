import { dailyAlarmQueue } from "../data.js";

import sendMessage from "./sendMessage.js";

// Function to check current daily alarms in queue
function checkDailyAlarms() {
    // Get current time
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    // Loop through all alarms
    for (const alarm of dailyAlarmQueue) {
        // const [hour, minute, message] = alarm;

        // Check if the current time matches the alarm time
        if (currentHour === alarm.hour && currentMinute === alarm.minute) {
            // Send the alarm message
            sendMessage(alarm.Id, alarm.message);
        }
    }
}

export default checkDailyAlarms;