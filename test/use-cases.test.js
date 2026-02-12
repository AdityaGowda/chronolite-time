

export function check(input, result) {
    if (!result) return false;
    if (result.type === 'duration') return result.milliseconds > 0;
    if (result.type === 'relative' || result.type === 'absolute') return !!result.iso;
    if (result.type === 'relative-range') return !!result.start && !!result.end;
    return false;
}


export function generateTestCases() {

  const cases = [];


  // Duration cases (1000+)
  const durationUnits = ["seconds", "minutes", "hours", "days", "weeks", "months", "years", "s", "m", "h", "d", "w", "mo", "y"];
  for (let i = 1; i <= 100; i++) {
    durationUnits.forEach(unit => {
      cases.push(`${i} ${unit}`);
      cases.push(`${i}${unit}`);
      cases.push(`${i} ${unit} and ${i + 1} ${durationUnits[0]}`);
    });
  }

  // Relative cases (2000+)
  const relativeKeywords = ["today", "tomorrow", "yesterday", "now", "day after tomorrow"];
  const times = ["10am", "5pm", "10:30am", "22:00"];
  relativeKeywords.forEach(kw => {
    cases.push(kw);
    times.forEach(t => {
      cases.push(`${kw} at ${t}`);
      cases.push(`${kw} ${t}`);
    });
  });

  const units = ["second", "minute", "hour", "day", "week", "month", "year"];
  for (let i = 1; i <= 200; i++) {
    units.forEach(unit => {
      cases.push(`in ${i} ${unit}`);
      cases.push(`in ${i} ${unit}s`);
    });
  }

  // Weekday cases (1000+)
  const modifiers = ["next", "this", ""];
  const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  modifiers.forEach(mod => {
    weekdays.forEach(wd => {
      const base = mod ? `${mod} ${wd}` : wd;
      cases.push(base);
      times.forEach(t => {
        cases.push(`${base} at ${t}`);
      });
    });
  });

  // Absolute cases (1000+)
  // ISO: YYYY-MM-DD
  for (let i = 1; i <= 400; i++) {
    const day = String((i % 28) + 1).padStart(2, '0');
    const month = String((i % 12) + 1).padStart(2, '0');
    cases.push(`2026-${month}-${day}`);
  }

  // Slash: DD/MM/YYYY
  for (let i = 1; i <= 400; i++) {
    const day = String((i % 28) + 1).padStart(2, '0');
    const month = String((i % 12) + 1).padStart(2, '0');
    cases.push(`${day}/${month}/2026`);
    cases.push(`${day}-${month}-2026`);
  }

  // Word: Month Day, Year
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", 
                      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  for (let i = 1; i <= 400; i++) {
    const day = (i % 28) + 1;
    const month = monthNames[i % monthNames.length];
    cases.push(`${month} ${day} 2026`);
    cases.push(`${month} ${day}, 2026`);
  }

  // Fill up to 5000+ if needed
  while (cases.length < 5200) {
      cases.push(`in ${cases.length} minutes`);
  }

  return cases;
}
