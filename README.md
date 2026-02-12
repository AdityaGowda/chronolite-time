# chronolite-time — Natural Language Time Parser

[![npm version](https://img.shields.io/npm/v/chronolite-time.svg)](https://www.npmjs.com/package/chronolite-time)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**chronolite-time** is a lightweight JavaScript library that converts **human-readable time expressions** into machine-friendly objects and timestamps.

It supports:

- ⏳ **Durations** (`3 hours`, `1.5 days`)
- 🗓 **Relative dates** (`tomorrow`, `in 2 hours`, `next monday`)
- 📅 **Absolute dates** (`2026-03-15`, `Feb 20 2026`, `15/03/2026`)

Built for schedulers, reminders, bots, dashboards, and automation systems.

---

All supported keywords and formats are already included in the playground sidebar and examples. Use the demo to explore every currently supported input.
## 🔗 Quick Links

- **[Live Demo](https://github.com/AdityaGowda/chronolite-time)** — Try it in your browser!

---

## ✨ Features

- **Natural language duration parsing**
- **Relative time calculation** based on current system time
- **Absolute calendar date parsing**
- **Strict validation** (blocks invalid dates like `31/02/2026`)
- **Supports mixed units** (`1 hour and 30 minutes`)
- **Handles time fragments** (`at 5pm`, `10:30am`)
- **Returns Unix timestamps and ISO strings**
- **Zero dependencies**
- **ES Modules support**

---

## 🚀 Installation

```bash
npm install chronolite-time
```

---

## 📖 Usage

### Basic Example

```javascript
import { parseTime } from "chronolite-time";

// Duration parsing
const duration = parseTime("3 hours");
console.log(duration);

// Relative time parsing
const relative = parseTime("tomorrow at 5pm");
console.log(relative);

// Absolute date parsing
const absolute = parseTime("2026-03-15");
console.log(absolute);
```

### CommonJS

If using CommonJS:

```javascript
const { parseTime } = await import("chronolite-time");
```

---

## 📦 Return Format

chronolite-time returns different objects depending on the input type:

### Duration
```javascript
{
  type: "duration",
  milliseconds: number
}
```

### Relative / Absolute
```javascript
{
  type: "relative" | "absolute",
  unix: number,
  iso: string
}
```

### Ranges
Ranges like `this week` or `next month` return:
```javascript
{
  type: "relative-range",
  start: string,
  end: string
}
```

---

## 🧪 Examples

### Duration
```javascript
parseTime("1 hour and 30 minutes");
```
**Output:**
```json
{
  "type": "duration",
  "milliseconds": 5400000
}
```

### Relative
```javascript
parseTime("in 2 hours");
```
**Output (example):**
```json
{
  "type": "relative",
  "unix": 1707678000000,
  "iso": "2026-02-11T19:00:00.000Z"
}
```

### Absolute
```javascript
parseTime("Feb 20 2026");
```
**Output:**
```json
{
  "type": "absolute",
  "unix": 1771545600000,
  "iso": "2026-02-20T00:00:00.000Z"
}
```

---

## 🧠 Supported Formats

### Durations
- `3h`, `3 hours`
- `2 hours`
- `1.5 days`
- `1 hour and 30 minutes`

### Relative
- `today`, `tomorrow`, `yesterday`
- `in 3 hours`
- `next monday`
- `this week`
- `next month`
- `tomorrow at 5pm`

### Absolute
- `2026-03-15`
- `15/03/2026`
- `Feb 20 2026`

> [!NOTE]
> Invalid dates are strictly rejected (e.g., `31/02/2026` or `2026-02-31`).

---

## ✅ Validation & Quality

ChronoLite-time is tested against **9000+ human-readable use cases** to ensure reliability and coverage.

---

## 🛠 Typical Use Cases

- **Reminder apps**
- **Scheduling systems**
- **Chatbots / AI assistants**
- **Automation tools**
- **DevOps scripts**
- **Analytics dashboards**

chronolite-time translates human time into timestamps your software can understand.

---

## 🗺 Roadmap

Planned features:
- [ ] `ago` support (`3 hours ago`)
- [ ] `last week` / `last month`
- [ ] Short weekdays (`mon`, `tue`)
- [ ] Timezone parsing
- [ ] Recurring schedules (`every 3 hours`)

---

## 🤝 Contributing

Contributions are welcome! If you have a feature request or found a bug, please open an issue.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

Developed by [Adithya Gowda](https://github.com/AdityaGowda)
