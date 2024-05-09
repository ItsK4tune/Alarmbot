import Start_c from './src/controller/start.js';
import help_c from './src/controller/help.js';
import setAlarm_c from './src/controller/setAlarm.js';
import setDailyAlarm_c from './src/controller/setDailyAlarm.js';
import show_c from './src/controller/show.js';
import deleteAlarm_c from './src/controller/deleteAlarm.js';
import deleteDailyAlarm_c from './src/controller/deleteDailyAlarm.js';
import deleteAllAlarm_c from './src/controller/deleteAllAlarm.js';
import Stop_c from './src/controller/stop.js';
import otherInput_c from './src/controller/otherInput.js';

import botTick from './src/botDelayTime.js';
import bot from './src/initBot.js';

import 'dotenv/config'

// Handle /start command
bot.onText(/\/start/, Start_c);

// Command to message a help table
bot.onText(/\/help/, help_c);

// Command to set an alarm
bot.onText(/\/setalarm (\d{1,2}:\d{1,2}) (.+)/, setAlarm_c);

// Command to set an daily alarm
bot.onText(/\/setdailyalarm (\d{1,2}:\d{1,2}) (.+)/, setDailyAlarm_c);

// Command to show all set alarm
bot.onText(/\/show/, show_c);

// Command to delete an alarm
bot.onText(/\/deletealarm (\d{1,2}:\d{1,2})/, deleteAlarm_c);

// Command to delete an alarm
bot.onText(/\/deletedailyalarm (\d{1,2}:\d{1,2})/, deleteDailyAlarm_c);

// Command to delete all alarms
bot.onText(/\/deleteallalarm/, deleteAllAlarm_c);

// Handle unknown commands
bot.on('message', otherInput_c);

// Handle /stop command
bot.onText(/\/stop/, Stop_c);

botTick();