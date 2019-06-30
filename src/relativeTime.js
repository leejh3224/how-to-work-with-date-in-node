const dayjs = require('dayjs');
const moment = require('moment');
const relativeTime = require('dayjs/plugin/relativeTime');
require('dayjs/locale/ko');
require('intl-relative-time-format');
require('intl-relative-time-format/locale-data/ko-KR');

dayjs.extend(relativeTime);

const dateString = '2019-06-20';

const result1 = dayjs().from(dayjs(dateString));
const result2 = moment().from(dateString);

// date-fns v1.30.1 doesn't support relative format
// v2.0.0-alpha and up support it with date-fns/formatRelative

// localized
const result3 = dayjs()
  .locale('ko')
  .from(dayjs(dateString));
const result4 = moment()
  .locale('ko')
  .from(dateString);

/**
 * Intl.RelativeTimeFormat is not natively supported in current Node LTS (v10.16.0)
 * so install the package `intl-relative-time-format`(https://www.npmjs.com/package/intl-relative-time-format)
 */
const rtf = new Intl.RelativeTimeFormat('ko-KR', { style: 'narrow' });
const result5 = rtf.format(
  Math.ceil((new Date() - new Date(dateString)) / (24 * 60 * 60 * 1000)),
  'day',
);

console.log(result1, result2, result3, result4, result5);
