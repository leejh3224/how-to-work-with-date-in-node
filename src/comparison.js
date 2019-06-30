const dayjs = require('dayjs');
const moment = require('moment');
const { isSameDay } = require('date-fns');

const dateString1 = '2019-06-30';
const dateString2 = '2019-07-02';

const testDayjs1 = dayjs(dateString1);
const testDayjs2 = dayjs(dateString2);

// comparison in days (isSame, isBefore, isAfter)
const result1 = testDayjs1.isSame(testDayjs2, 'day');
const result2 = isSameDay(dateString1, dateString2);
const result3 = moment(dateString1).isSame(dateString2, 'day');
// eslint-disable-next-line operator-linebreak
const result4 =
  new Date(dateString1).getDate() === new Date(dateString2).getDate();

console.log(result1, result2, result3, result4);
