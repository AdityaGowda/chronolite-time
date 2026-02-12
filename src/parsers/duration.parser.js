import { getDurationRegex } from "../utils/regex.js";
import { TIME_UNITS } from "../utils/constants.js";

export function parseDuration(text) {

  if (typeof text !== "string") return null;
  let totalMilliseconds = 0;
  const matches = text.matchAll(getDurationRegex()) 


  for (const match of matches) {
    const value = parseFloat(match[2]);
    const unit = match[3].toLowerCase();

    const multiplier = TIME_UNITS[unit];

    if (!multiplier) continue;

    totalMilliseconds += value * multiplier;
  }
  if (totalMilliseconds === 0) return null;

  return {
    type: "duration",
    milliseconds: Math.round(totalMilliseconds)
  };
}
