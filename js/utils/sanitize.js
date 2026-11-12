const FONT_FAMILIES = new Set([
  "Inter",
  "Playfair Display",
  "Cormorant Garamond",
  "DM Serif Display",
  "Space Mono",
]);

const HEX_COLOR_PATTERN = /^#[0-9a-f]{6}$/i;

export function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

export function normalizeHexColor(value, fallback = "#ffffff") {
  return typeof value === "string" && HEX_COLOR_PATTERN.test(value)
    ? value.toLowerCase()
    : fallback;
}

export function normalizeFontFamily(value, fallback = "Inter") {
  return typeof value === "string" && FONT_FAMILIES.has(value)
    ? value
    : fallback;
}

export function sanitizeExternalUrl(value) {
  if (typeof value !== "string") return "";

  const candidate = value.trim();
  if (!candidate || /[\u0000-\u001f\u007f]/.test(candidate)) return "";

  const hasScheme = /^[a-z][a-z\d+.-]*:/i.test(candidate);
  const candidateWithScheme = hasScheme ? candidate : `https://${candidate}`;

  try {
    const parsed = new URL(candidateWithScheme);
    if (
      (parsed.protocol !== "https:" && parsed.protocol !== "http:") ||
      !parsed.hostname ||
      parsed.username ||
      parsed.password
    ) {
      return "";
    }

    return parsed.href;
  } catch {
    return "";
  }
}

export { FONT_FAMILIES };
