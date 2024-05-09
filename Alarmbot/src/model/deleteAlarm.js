import { alarmQueue } from "../data.js";

// Function to delete alarm
function deleteAlarm(alarm) {
    const index = alarmQueue.indexOf(alarm);
    alarmQueue.splice(index, 1);
}

export default deleteAlarm;