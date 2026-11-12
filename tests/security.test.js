import test from "node:test";
import assert from "node:assert/strict";

import { state } from "../js/state.js";
import { TEMPLATES } from "../js/templates/templates.js";
import {
  contactRowsHTML,
  getInitials,
  getSocials,
  socialsHTML,
} from "../js/templates/helpers.js";
import {
  escapeHTML,
  normalizeFontFamily,
  normalizeHexColor,
  sanitizeExternalUrl,
} from "../js/utils/sanitize.js";
import { sanitizeSavedState } from "../js/storage.js";

function withState(overrides, callback) {
  const original = { ...state };
  Object.assign(state, overrides);

  try {
    return callback();
  } finally {
    Object.assign(state, original);
  }
}

test("escapeHTML encodes markup and attribute delimiters", () => {
  assert.equal(
    escapeHTML(`<img src=x onerror="alert('x')">&`),
    "&lt;img src=x onerror=&quot;alert(&#39;x&#39;)&quot;&gt;&amp;"
  );
});

test("theme values accept only six-digit hex colors and known fonts", () => {
  assert.equal(normalizeHexColor("#AABBCC"), "#aabbcc");
  assert.equal(normalizeHexColor("red; background:url(javascript:alert(1))"), "#ffffff");
  assert.equal(normalizeHexColor(null, "#123456"), "#123456");

  assert.equal(normalizeFontFamily("Playfair Display"), "Playfair Display");
  assert.equal(normalizeFontFamily("';background:url(javascript:alert(1))"), "Inter");
});

test("social URLs allow HTTP(S) and reject executable or credentialed URLs", () => {
  assert.equal(sanitizeExternalUrl("https://example.com/profile"), "https://example.com/profile");
  assert.equal(sanitizeExternalUrl("github.com/armanpreet-singh"), "https://github.com/armanpreet-singh");
  assert.equal(sanitizeExternalUrl("javascript:alert(1)"), "");
  assert.equal(sanitizeExternalUrl("data:text/html,<script>alert(1)</script>"), "");
  assert.equal(sanitizeExternalUrl("ftp://example.com/file"), "");
  assert.equal(sanitizeExternalUrl("https://user:pass@example.com"), "");
  assert.equal(sanitizeExternalUrl("https://example.com/\nmalicious"), "");
});

test("social helpers filter unsafe URLs and escape the rendered href", () => {
  withState({
    li: "javascript:alert(1)",
    x: "data:text/html,hello",
    gh: 'https://example.com/" onmouseover="alert(1)',
    ig: "",
  }, () => {
    const socials = getSocials();

    assert.equal(socials.length, 1);
    assert.equal(socials[0].href.startsWith("https://example.com/"), true);

    const html = socialsHTML("#111111", "#ffffff");
    assert.equal(html.includes('href="https://example.com/'), true);
    assert.doesNotMatch(html, /href="javascript:/i);
    assert.equal(html.includes('" onmouseover='), false);
  });
});

test("contact details and initials are rendered as text, not markup", () => {
  withState({
    name: "<script>alert(1)</script>",
    phone: "</span><img src=x onerror=alert(1)>",
    email: "<svg onload=alert(1)>",
    web: '"><img src=x onerror=alert(2)>',
  }, () => {
    const initials = getInitials();
    const contacts = contactRowsHTML("#111111", "#777777", "#333333");

    assert.match(initials, /&lt;/);
    assert.doesNotMatch(initials, /<script/i);
    assert.match(contacts, /&lt;img/);
    assert.match(contacts, /&lt;svg/);
    assert.doesNotMatch(contacts, /<img src=x/i);
    assert.doesNotMatch(contacts, /<svg onload/i);
  });
});

test("all 20 card templates escape user-controlled content and constrain CSS values", () => {
  withState({
    name: '<img src=x onerror="alert(1)">',
    title: "</div><script>alert(1)</script>",
    company: '"><svg onload="alert(2)">',
    tag: "& onmouseover=\"alert(3)\"",
    phone: "</span><img src=x onerror=alert(4)>",
    email: "<script>alert(5)</script>",
    web: '"><img src=x onerror="alert(6)">',
    li: "javascript:alert(7)",
    x: "data:text/html,<script>alert(8)</script>",
    gh: "https://example.com/profile",
    ig: "",
    accent: "red; background-image:url(javascript:alert(9))",
    bg: "url(javascript:alert(10))",
    font: "';background-image:url(javascript:alert(11))",
  }, () => {
    assert.equal(TEMPLATES.length, 20);

    for (const template of TEMPLATES) {
      const html = template.render();

      assert.match(html, /&lt;img src=x onerror=/, template.id);
      assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/, template.id);
      assert.doesNotMatch(html, /<script>alert\(1\)<\/script>/, template.id);
      assert.doesNotMatch(html, /<img src=x onerror=/, template.id);
      assert.doesNotMatch(html, /<svg onload=/, template.id);
      assert.doesNotMatch(html, /href="javascript:/i, template.id);
      assert.doesNotMatch(html, /background-image:url\(javascript:/i, template.id);
      assert.doesNotMatch(html, /font-family:';background/i, template.id);
    }
  });
});

test("saved state accepts only known fields and validates types and formats", () => {
  const maliciousSavedState = JSON.parse(`{
    "__proto__": { "polluted": true },
    "name": { "html": "<script>" },
    "title": "Safe title",
    "company": "<img src=x onerror=alert(1)>",
    "accent": "#AABBCC",
    "bg": "red; background:url(javascript:alert(1))",
    "font": "';background:url(javascript:alert(1))",
    "template": "../../unexpected",
    "dark": "true",
    "flipped": true,
    "unknownAdminFlag": true
  }`);

  const sanitized = sanitizeSavedState(maliciousSavedState);

  assert.equal(sanitized.name, undefined);
  assert.equal(sanitized.title, "Safe title");
  assert.equal(sanitized.company, "<img src=x onerror=alert(1)>");
  assert.equal(sanitized.accent, "#aabbcc");
  assert.equal(sanitized.bg, "#ffffff");
  assert.equal(sanitized.font, "Inter");
  assert.equal(sanitized.template, undefined);
  assert.equal(sanitized.dark, undefined);
  assert.equal(sanitized.flipped, false);
  assert.equal(Object.hasOwn(sanitized, "__proto__"), false);
  assert.equal(Object.hasOwn(sanitized, "unknownAdminFlag"), false);
  assert.equal({}.polluted, undefined);
});

test("saved text fields are length-limited and invalid JSON shapes are ignored", () => {
  const sanitized = sanitizeSavedState({
    name: "A".repeat(500),
    email: "e".repeat(300),
    phone: 12345,
  });

  assert.equal(sanitized.name.length, 120);
  assert.equal(sanitized.email.length, 254);
  assert.equal(sanitized.phone, undefined);
  assert.deepEqual(sanitizeSavedState(null), {});
  assert.deepEqual(sanitizeSavedState([]), {});
  assert.deepEqual(sanitizeSavedState("not an object"), {});
});
