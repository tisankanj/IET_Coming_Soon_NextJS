import "server-only";

import { randomInt } from "node:crypto";

// A person cannot fill any of these forms in under three seconds; most bots can.
const MIN_FILL_TIME_MS = 3000;

const RATE_WINDOW_MS = 10 * 60 * 1000;
const MAX_SUBMISSIONS_PER_WINDOW = 5;
const recentSubmissions = new Map<string, number[]>();

export function looksAutomated(formData: FormData) {
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return true;
  }
  const startedAt = Number(formData.get("startedAt"));
  return !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_TIME_MS;
}

// Best effort only: this memory lives in one server instance. Before submissions are stored or
// emailed, replace it with a shared limiter (for example a Cloudflare rate-limiting rule).
export function isRateLimited(clientKey: string) {
  const now = Date.now();
  const recent = (recentSubmissions.get(clientKey) ?? []).filter((time) => now - time < RATE_WINDOW_MS);

  if (recent.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    recentSubmissions.set(clientKey, recent);
    return true;
  }

  recent.push(now);
  recentSubmissions.set(clientKey, recent);

  if (recentSubmissions.size > 1000) {
    for (const [key, times] of recentSubmissions) {
      if (times.every((time) => now - time >= RATE_WINDOW_MS)) {
        recentSubmissions.delete(key);
      }
    }
  }
  return false;
}

// Letters that cannot be confused when read over the phone (no 0/O or 1/I).
const REFERENCE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function createReference(prefix: "B" | "P" | "R") {
  const date = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Colombo",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  })
    .format(new Date())
    .replaceAll("-", "");

  let code = "";
  for (let index = 0; index < 4; index++) {
    code += REFERENCE_ALPHABET[randomInt(REFERENCE_ALPHABET.length)];
  }
  return `IET-${prefix}-${date}-${code}`;
}
