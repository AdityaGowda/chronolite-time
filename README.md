# chronolite-time 

[![npm version](https://img.shields.io/npm/v/chronolite-time.svg?style=flat-square)](https://www.npmjs.com/package/chronolite-time)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

**chronolite-time** is a high-performance, zero-dependency JavaScript library designed to bridge the gap between human speech and machine-readable data. It converts natural language time expressions into precise Unix timestamps, ISO strings, and millisecond durations.

Stop wrestling with complex Regex or heavy legacy libraries. chronolite-time is the lightweight, modern alternative for Node.js and Browser environments.


## 🎮 Try it Out
Want to see it in action? Visit the [Live Interactive Playground](https://adityagowda.github.io/chronolite-time/) to test your custom time strings.
* **[Live Interactive Demo](https://adityagowda.github.io/chronolite-time/)** — Test your expressions in real-time.


## 🔗 Resources
* **[GitHub Repository](https://github.com/AdityaGowda/chronolite-time)** — Star us to show support!



## ✨ Why chronolite-time? 
Most date parsers are either too heavy or too complex. chronolite-time offers a lightweight, pattern-based approach to parsing human-readable time expressions with a tiny, zero-dependency footprint.

| Feature | chronolite-time | Native Date() |
| :--- | :--- | :--- |
| "tomorrow at 5pm" | ✅ Supported | ❌ Invalid |
| "3 hours and 20 mins" | ✅ Returns ms | ❌ Invalid |
| Strict Validation | ✅ Prevents Feb 31st | ❌ Rolls over to March |
| Bundle Size | 🚀 Ultra-light | N/A |
| Dependencies | 📦 Zero | N/A |


## 🚀 Quick Start

### Installation

```bash
npm install chronolite-time
```

### Usage (ES Modules)

```javascript
import { parseTime } from "chronolite-time";

// 1. Parse relative natural language
const event = parseTime("tomorrow at 5pm");
console.log(event.iso); // e.g., "2026-02-17T17:00:00.000Z"

// 2. Calculate durations for timeouts/intervals
const delay = parseTime("1 hour and 30 minutes");
console.log(delay.milliseconds); // 5400000

// 3. Strict absolute dates
const deadline = parseTime("2026-03-15");
console.log(deadline.unix); // 1773532800000
```

## 📦 Return Format

chronolite-time-time returns different objects depending on the input type:

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


### 🎮 Explore All Keywords

chronolite-time supports combinations of units, abbreviations, and relative terms.

👉 [Check out the Live Demo to see the full list of supported keywords](https://adityagowda.github.io/chronolite-time/) > [!IMPORTANT]

> **Anti-Error Logic**: Invalid dates are strictly rejected (e.g., `31/02/2026` or `2026-02-31`) return null instead of "rolling over" the date.


## 💻 Compatibility

- **Browsers**: Chrome, Firefox, Safari, Edge (ES6+)
- **Environments**: Node.js (14.x+), Deno, Bun
- **Frameworks**: React, Vue, Svelte, Next.js


## 🛠 Use Cases

- **Chatbots & AI**: Convert user input like "remind me in 2 hours" into a database timestamp.
- **SaaS Dashboards**: Filter data using "this week" or "next month".
- **Automation**: Set expiration times for API tokens or temporary links.
- **CLI Tools**: Lightweight time input for developer tools without adding bloat.

## 🤝 Contributing & Support

If you find this library helpful, please give it a ⭐ on GitHub!

1. Fork it
2. Create your feature branch (`git checkout -b feature/NewParser`)
3. Commit (`git commit -m 'Add support for milliseconds'`)
4. Push (`git push origin feature/NewParser`)
5. Open a Pull Request

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

Developed by [Adithya Gowda](https://github.com/AdityaGowda)
