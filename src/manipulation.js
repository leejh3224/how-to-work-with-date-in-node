const dayjs = require('dayjs');
const moment = require('moment');
const { parse, addDays, subMonths } = require('date-fns');

const dateString = '2019-06-30';

const testJsDate = new Date(dateString);

const testDayjs = dayjs(dateString);

const testDatefns = parse(dateString);

// add 5 days
const result1 = new Date(
  testJsDate.getFullYear(),
  testJsDate.getMonth(),
  testJsDate.getDate() + 5,
);
const result2 = testDayjs.add(5, 'day');
const result3 = addDays(testDatefns, 5);
const result4 = moment(dateString).add(5, 'day'); // moment.js is mutable

// subtract 3 months
const result5 = new Date(
  testJsDate.getFullYear(),
  testJsDate.getMonth() - 3,
  testJsDate.getDate(),
);
const result6 = testDayjs.subtract(3, 'month');
const result7 = subMonths(testDatefns, 3);
const result8 = moment(dateString).subtract(3, 'month'); // moment.js is mutable

console.log(result1, result2, result3, result4);
console.log(result5, result6, result7, result8);
