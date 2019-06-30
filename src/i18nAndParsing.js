const dayjs = require('dayjs');
const moment = require('moment');
const { parse, format } = require('date-fns');
const koLocale = require('date-fns/locale/ko');
const LocalizedFormat = require('dayjs/plugin/localizedFormat');
const customParseFormat = require('dayjs/plugin/customParseFormat');
require('dayjs/locale/ko');

dayjs.extend(customParseFormat);
dayjs.extend(LocalizedFormat);

const dateString = '2019-06-30';
const localizedString = '2019년 06월 30일';

const testDayjs = dayjs(dateString);
const testDatefns = parse(dateString);

// from neutral format to localized string
const result1 = testDayjs.locale('ko').format('LL');
const result2 = format(testDatefns, 'YYYY년 M월 D일');
const result3 = moment(dateString)
  .locale('ko')
  .format('LL');

/**
 * In current Node LTS (v10.16.0), toLocaleDateString() returns en-US format only.
 * You should add `full-icu` into your project to use other locales.
 * reference: https://stackoverflow.com/questions/54171233/date-tolocaledatestring-format-issues
 */
const options = {
  timeZone: 'Asia/Seoul',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
const result4 = new Date(dateString).toLocaleDateString('ko-KR', options);

// from localized string to neutral format
const result5 = dayjs(localizedString, 'YYYY년 MM월 DD일', 'ko').format(
  'YYYY-MM-DD',
); // customParseFormat plugin needed

// date-fns v1.30.1 doesn't provide parsing from localized string
// If you want that either use v2.0.0-alpha and up (non official releases) or dayjs/moment
const result6 = format(new Date(dateString), 'YYYY-MM-DD', {
  locale: koLocale,
});
const result7 = moment(localizedString, 'YYYY년 MM월 DD일').format(
  'YYYY-MM-DD',
);

// native js date doesn't support parsing from localized string

console.log(result1, result2, result3, result4);
console.log(result5, result6, result7);
