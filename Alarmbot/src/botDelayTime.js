import checkDailyAlarms from "./model/checkDailyAlarms.js";
import checkAlarms from "./model/checkAlarms.js";

import 'dotenv/config'

const time = process.env.TIME;
const dailytime = process.env.DAILYTIME;

function botTick () {
    setInterval(checkAlarms, time); 
    setInterval(checkDailyAlarms, dailytime);
}

export default botTick;