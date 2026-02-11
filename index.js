import { parseDuration } from "./parsers/duration.parser.js";
import { parseRelative } from "./parsers/relative.parser.js";
import { parseAbsolute } from "./parsers/absolute.parser.js";

export function parseTime(text) {
  return parseRelative(text) || parseDuration(text) || parseAbsolute(text);
}
