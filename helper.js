
export function buildDate(date, timeMatch) {
  const d = new Date(date);
  if (timeMatch) {
    let hour = Number(timeMatch[1]);
    const minute = Number(timeMatch[2] || 0);
    const meridian = timeMatch[3];

    if (meridian === "pm" && hour < 12) hour += 12;
    if (meridian === "am" && hour === 12) hour = 0;

    d.setHours(hour, minute, 0, 0);
  }

  return {
    type: "relative",
    iso: d.toISOString(),
    unix: d.getTime()
  };
}

export function buildSafeDate(year, month, day) {
  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day)
  )
    return null;

  const d = new Date(year, month, day);

  // 🚨 reject JS rollover
  if (
    d.getFullYear() !== year ||
    d.getMonth() !== month ||
    d.getDate() !== day
  ) {
    return null;
  }

  return buildAbsolute(d);
}


export function buildWeekRange(now, offset) {
  const d = new Date(now);
  d.setDate(d.getDate() + offset * 7);

  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;

  const start = new Date(d);
  start.setDate(d.getDate() + diff);
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  end.setHours(23, 59, 59, 999);

  return {
    type: "relative-range",
    start: start.toISOString(),
    end: end.toISOString()
  };
}

export function buildMonthRange(now, offset) {
  const start = new Date(now.getFullYear(), now.getMonth() + offset, 1);
  const end = new Date(start.getFullYear(), start.getMonth() + 1, 0);
  end.setHours(23, 59, 59, 999);

  return {
    type: "relative-range",
    start: start.toISOString(),
    end: end.toISOString()
  };
}

export function buildYearRange(now, offset) {
  const year = now.getFullYear() + offset;

  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);
  end.setHours(23, 59, 59, 999);

  return {
    type: "relative-range",
    start: start.toISOString(),
    end: end.toISOString()
  };
}

export function buildAbsolute(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);

  return {
    type: "absolute",
    iso: d.toISOString(),
    unix: d.getTime()
  };
}

export function monthIndex(m) {
  if (!m) return undefined;
  return {
    jan: 0, january: 0,
    feb: 1, february: 1,
    mar: 2, march: 2,
    apr: 3, april: 3,
    may: 4,
    jun: 5, june: 5,
    jul: 6, july: 6,
    aug: 7, august: 7,
    sep: 8, september: 8,
    oct: 9, october: 9,
    nov: 10, november: 10,
    dec: 11, december: 11
  }[m.toLowerCase()];
}
