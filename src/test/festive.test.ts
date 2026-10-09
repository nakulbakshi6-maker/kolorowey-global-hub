import { describe, it, expect } from "vitest";
import { isFestiveSeasonActive } from "@/lib/festive";

describe("festive auto-rollback", () => {
  it("is active on 30 November 2026 (IST evening)", () => {
    expect(isFestiveSeasonActive(new Date("2026-11-30T20:00:00+05:30"))).toBe(true);
  });
  it("is off from 1 December 2026 (IST)", () => {
    expect(isFestiveSeasonActive(new Date("2026-12-01T00:00:01+05:30"))).toBe(false);
  });
});
