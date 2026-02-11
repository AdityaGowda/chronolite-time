export function getDurationRegex() {
  return /(^|[^a-zA-Z0-9.])(\d+(?:\.\d+)?)\s*(milliseconds?|ms|seconds?|Seconds?|Sec|sec|s|minutes?|min|Minutes?|Min|m|hours?|hr|Hrs?|Hr|h|days?|day|Days?|Day|d|weeks?|week|Weeks?|Week|w|years?|year|Years?|Year|y)\b/gi;
}



// Relative regex

export function getTimeRegex() {
  return /\bat\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b/i;
}

export function getInRegex() {
  return /^in\s+(\d+(?:\.\d+)?)\s+(seconds?|minutes?|hours?|days?|weeks?|months?|years?)/i;
}

export function getWeekdayRegex() {
  return /^(next|this)\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/i;
}


// -------- ABSOLUTE DATE REGEX --------

// 2026-03-15
export function getISODateRegex() {
  return /^\d{4}-\d{2}-\d{2}$/;
}

//  dd/mm/yyyy or dd-mm-yyyy
export function getSlashDateRegex() {
  return /^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/;
}

// format: "Month day, year" (e.g., "January 12, 2026" or "Jan 12 2026")
export function getWordDateRegex() {
  return /^(jan|january|feb|february|mar|march|apr|april|may|jun|june|jul|july|aug|august|sep|september|oct|october|nov|november|dec|december)\s+(\d{1,2}),?\s+(\d{4})$/i;
}