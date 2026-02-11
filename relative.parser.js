import { buildDate, buildMonthRange, buildWeekRange, buildYearRange } from "../helper/helper.js";
import { getInRegex,getTimeRegex,getWeekdayRegex } from "../utils/regex.js";

const WEEKDAYS = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6
};

const UNIT_SETTERS = {
  second: (d, v) => d.setSeconds(d.getSeconds() + v),
  minute: (d, v) => d.setMinutes(d.getMinutes() + v),
  hour: (d, v) => d.setHours(d.getHours() + v),
  day: (d, v) => d.setDate(d.getDate() + v),
  week: (d, v) => d.setDate(d.getDate() + v * 7),
  month: (d, v) => d.setMonth(d.getMonth() + v),
  year: (d, v) => d.setFullYear(d.getFullYear() + v)
};

export function parseRelative(text) {
  if (typeof text !== "string") return null;

  const input = text.toLowerCase().trim();
  const now = new Date();

  const timeMatch = input.match(getTimeRegex());

  // -------- keywords --------
  const keywordMap = {
    today: 0,
    tomorrow: 1,
    yesterday: -1
  };

  if (keywordMap[input] !== undefined) {
    const d = new Date(now);
    d.setDate(d.getDate() + keywordMap[input]);
    return buildDate(d, timeMatch);
  }

  // -------- in X units --------
  const inMatch = input.match(getInRegex());

  if (inMatch) {
    const value = Number(inMatch[1]);
    const unit = inMatch[2].replace(/s$/, "");

    if (!Number.isFinite(value)) return null;
    if (!UNIT_SETTERS[unit]) return null;

    const d = new Date(now);
    UNIT_SETTERS[unit](d, value);

    return buildDate(d, timeMatch);
  }

  // -------- ranges --------

  const ranges = {
    "this week": () => buildWeekRange(now, 0),
    "next week": () => buildWeekRange(now, 1),
    "this month": () => buildMonthRange(now, 0),
    "next month": () => buildMonthRange(now, 1),
    "this year": () => buildYearRange(now, 0),
    "next year": () => buildYearRange(now, 1)
  };

  if (ranges[input]) return ranges[input]();

  // -------- weekdays --------

  const weekdayMatch = input.match(getWeekdayRegex());

  if (weekdayMatch) {
    const [, modifier, weekday] = weekdayMatch;

    const target = WEEKDAYS[weekday];
    const d = new Date(now);

    let diff = target - d.getDay();
    if (modifier === "next" || diff <= 0) diff += 7;

    d.setDate(d.getDate() + diff);

    return buildDate(d, timeMatch);
  }

  return null;
}
