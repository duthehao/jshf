/**
 * Convert hours to months. The result is approximate - assuming each month has 30 days
 *
 * @param {number} hours
 * @return {number}
 */
export const hoursToMonths = (hours: number): number => {
  return hours / 730;
};

/**
 * Convert hours to weeks.
 *
 * @param {number} hours
 * @return {number}
 */
export const hoursToWeeks = (hours: number): number => {
  return hours / 168;
};

/**
 * Convert hours to days.
 *
 * @param {number} hours
 * @return {number}
 */
export const hoursToDays = (hours: number): number => {
  return hours / 24;
};

/**
 * Convert hours to minutes.
 *
 * @param {number} hours
 * @return {number}
 */
export const hoursToMinutes = (hours: number): number => {
  return hours * 60;
};

/**
 * Convert hours to seconds.
 *
 * @param {number} hours
 * @return {number}
 */
export const hoursToSeconds = (hours: number): number => {
  return hours * 3600;
};

/**
 * Convert hours to milliseconds.
 *
 * @param {number} hours
 * @return {number}
 */
export const hoursToMilliseconds = (hours: number): number => {
  return hours * 3600000;
};

/**
 * Convert hours to microseconds.
 *
 * @param {number} hours
 * @return {number}
 */
export const hoursToMicroseconds = (hours: number): number => {
  return hours * 3600000000;
};

/**
 * Convert hours to nanoseconds.
 *
 * @param {number} hours
 * @return {number}
 */
export const hoursToNanoseconds = (hours: number): number => {
  return hours * 3600000000000;
};
