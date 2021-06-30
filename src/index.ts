// import {
//   hoursToDays,
//   hoursToMicroseconds,
//   hoursToMilliseconds,
//   hoursToMinutes,
//   hoursToMonths,
//   hoursToNanoseconds,
//   hoursToSeconds,
//   hoursToWeeks,
// } from "./dateTimeHelpers";

import * as dateTimeHelpers from "./dateTimeHelpers";

export const hoursToDays = dateTimeHelpers.hoursToDays;
export const hoursToMicroseconds = dateTimeHelpers.hoursToMicroseconds;
export const hoursToMilliseconds = dateTimeHelpers.hoursToMilliseconds;
export const hoursToMinutes = dateTimeHelpers.hoursToMinutes;
export const hoursToMonths = dateTimeHelpers.hoursToMonths;
export const hoursToNanoseconds = dateTimeHelpers.hoursToNanoseconds;
export const hoursToSeconds = dateTimeHelpers.hoursToSeconds;
export const hoursToWeeks = dateTimeHelpers.hoursToWeeks;

const jshf = {
  ...dateTimeHelpers,
};
export default jshf;
