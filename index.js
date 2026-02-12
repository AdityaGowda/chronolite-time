import { parseTime } from "./src/index.js";

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  const button = document.querySelector("button");

  button.disabled = true;

  // Enable/disable button based on input
  input.addEventListener("input", () => {
    button.disabled = !input.value.trim();
  });

  async function handleParse() {
    const value = input.value.trim();

    if (!value) {
      output.style.color = "#ef4444";
      output.textContent = "Please enter a time expression.";
      return;
    }

    try {
      output.style.color = "#9ca3af";
      output.textContent = "Parsing...";

      // Future-proof if parseTime becomes async
      const result = await parseTime(value);

      output.style.color = "#22c55e";
      output.textContent = JSON.stringify(result, null, 2);
    } catch (e) {
      output.style.color = "#ef4444";
      output.textContent = e?.message || "Invalid time expression.";
    }
  }

  // Button click
  button.addEventListener("click", handleParse);

  // Press Enter to parse
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleParse();
    }
  });

  // Example click handling
  document.querySelectorAll(".example").forEach((el) => {
    el.addEventListener("click", () => {
      input.value = el.textContent.trim();
      button.disabled = false;
      handleParse();
    });
  });
});
