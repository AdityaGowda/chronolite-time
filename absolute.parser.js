import {  buildSafeDate, monthIndex } from "../helper/helper.js";
import {
  getISODateRegex,
  getSlashDateRegex,
  getWordDateRegex
} from "../utils/regex.js";

export function parseAbsolute(text) {
  if (typeof text !== "string") return null;

  const input = text.trim();

  // YYYY-MM-DD
  if (getISODateRegex().test(input)) {
    const [y, m, d] = input.split("-").map(Number);
    return buildSafeDate(y, m - 1, d);
  }

  // 15/03/2026 or 15-03-2026
  const slashMatch = input.match(getSlashDateRegex());
  if (slashMatch) {
    return buildSafeDate(
      Number(slashMatch[3]),
      Number(slashMatch[2]) - 1,
      Number(slashMatch[1])
    );
  }

  // Feb 20 2026
  const wordMatch = input.match(getWordDateRegex());
  if (wordMatch) {
    const month = monthIndex(wordMatch[1]);
    if (month === undefined) return null;

    return buildSafeDate(
      Number(wordMatch[3]),
      month,
      Number(wordMatch[2])
    );
  }

  return null;
}