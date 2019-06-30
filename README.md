# How to work with date in Node.js

This repository has working with date examples.

Especially, I compared four apis, [native JS date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), [moment](https://momentjs.com/), [date-fns](https://date-fns.org/) and [dayjs](https://github.com/iamkun/dayjs).

## TLDR;

To me, `dayjs` was the best fit. 

Its api is quite similar to `moment` yet has much smaller size (Gzipped: 2.9K).

And also `dayjs`'s api is immutable (returns new object instead of mutating original like `moment`),

thus doesn't produce [unexpected side effects](http://codebetter.com/matthewpodwysocki/2008/04/30/side-effecting-functions-are-code-smells/).

## Table Of Contents

Check out `src` directory.

Must use `npm start` for `i18nAndParsing.js`, ie `npm start src/i18nAndParsing.js`.

```
- How to compare two dates (same, before, after)
- How to parse neutral date string and get localized results or vise versa.
- How to change day/month/year
- How to get formated relative time string
```

## Gzipped Size Comparison

```
moment: 66.2k
date-fns: 6.7k
dayjs: 2.9k
```