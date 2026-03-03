# ChronoLite: Natural Language Time Parser

[![npm version](https://img.shields.io/npm/v/chronolite-time.svg)](https://www.npmjs.com/package/chronolite-time)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Bundle Size](https://img.shields.io/bundlephobia/min/chronolite-time)](https://bundlephobia.com/package/chronolite-time)

**ChronoLite** is a high-performance, zero-dependency JavaScript library designed to bridge the gap between human thoughts and machine-readable time. It converts natural language expressions into Unix timestamps, ISO strings, and duration objects with surgical precision.

Built for schedulers, reminders, bots, and automation systems where reliability and speed are paramount.

---

## 🔗 Quick Links

- **[Live Playground](https://adityagowda.github.io/chronolite-time/)** — Try your time expressions in real-time.
- **[NPM Package](https://www.npmjs.com/package/chronolite-time)** — View on Registry.

---

## ✨ Features

- 🚀 **Zero Dependencies**: Pure, modern JavaScript with no external bloat.
- ⚡ **Lightweight & Fast**: Extremely small footprint, optimized for performance.
- 🛡️ **Strict Validation**: Rejects invalid dates (e.g., `Feb 31`) instead of rolling over.
- 🗓️ **Comprehensive Parsing**: Supports Durations, Relative Dates, Ranges, and Absolute Formats.
- 📦 **ESM First**: Built for the modern web with ES Modules support.
- 🧪 **Battle Tested**: Verified against 5,000+ generated test cases.

---

## 🚀 Installation

```bash
npm install chronolite-time
```

---

## 📖 Quick Start

### Basic Usage (ESM)

```javascript
import { parseTime } from "chronolite-time";

// 1. Duration
parseTime("1 hour and 30 minutes"); 
// Returns: { type: "duration", milliseconds: 5400000 }

// 2. Relative Date
parseTime("tomorrow at 5pm"); 
// Returns: { type: "relative", unix: 1771545600000, iso: "..." }

// 3. Absolute Date
parseTime("2026-03-15"); 
// Returns: { type: "absolute", unix: ..., iso: "..." }

// 4. Relative Range
parseTime("next week"); 
// Returns: { type: "relative-range", start: "...", end: "..." }
```

### CommonJS Environment

```javascript
const { parseTime } = await import("chronolite-time");
```

---

## 🧠 Supported Formats

ChronoLite understands a wide variety of human-readable expressions.

### ⏳ Durations
- **Short:** `5h`, `10m`, `30s`, `1y`, `2mo`, `1w`
- **Full:** `3 hours`, `15 minutes`, `2 days`, `1.5 years`
- **Mixed:** `1 hour and 30 minutes`, `2d 5h`

### 🗓️ Relative Time
- **Keywords:** `now`, `today`, `tomorrow`, `yesterday`, `day after tomorrow`
- **Expressions:** `in 2 hours`, `in 3 days`, `in 15 minutes`
- **Weekday Modifiers:** `next monday`, `this friday`, `friday at 5pm`

### 📅 Absolute Dates
- **ISO:** `2026-03-15`
- **Slash/Dash:** `15/03/2026`, `15-03-2026`
- **Word Formats:** `Feb 20 2026`, `March 15, 2026`, `Jan 5`

### ⏱️ Time Fragments
- `at 5pm`, `at 10:30am`, `22:00`, `5:30 PM`
- Can be combined: `tomorrow at 10am`, `next monday 5pm`

### 📆 Date Ranges
- `this week`, `next week`
- `this month`, `next month`
- `this year`, `next year`

---

## 📦 Return Object Specification

The library returns a typed object based on the input:

### Duration
Returned when the input describes a length of time.
```typescript
{
  type: "duration",
  milliseconds: number
}
```

### Relative / Absolute
Returned for specific points in time.
```typescript
{
  type: "relative" | "absolute",
  unix: number, // Unix Timestamp (ms)
  iso: string   // ISO 8601 String
}
```

### Ranges
Returned for expressions spanning a period.
```typescript
{
  type: "relative-range",
  start: string, // ISO 8601 String
  end: string    // ISO 8601 String
}
```

---

## 🛡️ Strict Validation

Unlike standard JavaScript `Date` parsing, ChronoLite strictly rejects impossible dates.

```javascript
parseTime("2026-02-31"); // Returns null (rejected)
parseTime("31/04/2026"); // Returns null (rejected)
```
*Standard JS would normally roll "Feb 31" over to "March 3". ChronoLite ensures data integrity by returning `null` for these cases.*

---

## 🛠️ Comparison: Why ChronoLite?

| Feature | ChronoLite | Native JS | Moment.js |
| :--- | :---: | :---: | :---: |
| **Natural Language** | ✅ | ❌ | ⚠️ (Requires plugins) |
| **Zero Dependencies** | ✅ | ✅ | ❌ |
| **Strict Rollover** | ✅ (Rejects) | ❌ (Rolls over) | ❌ (Rolls over) |
| **Duration Parsing** | ✅ | ❌ | ⚠️ |
| **Relative Ranges** | ✅ | ❌ | ❌ |
| **Bundle Size** | ~2KB | - | ~70KB |

---

## 🧪 Development

To run the internal test suite:

1. Clone the repository.
2. Run the test script using Node:
   ```bash
   node test.js
   ```

---

## 🤝 Contributing

Highly appreciated! 
1. Fork the repo. 
2. Create your feature branch.
3. If adding a format, update `test/use-cases.test.js`.
4. Submit a PR.

---

## ⚖️ License

Distributed under the MIT License. Developed by [Adithya Gowda](https://github.com/AdityaGowda).