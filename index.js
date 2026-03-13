'use strict';
import user from './user.js';
import task from './task.js';
const task1 = new task();
task1.run();
const user1 = new user(task1);
user1.do();