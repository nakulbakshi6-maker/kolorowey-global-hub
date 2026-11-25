import { describe, expect, it } from "vitest";
import { CAREERS_EMAIL, careerRoles, getApplicationHref } from "@/lib/careers";

describe("Careers listings", () => {
  it("contains exactly the three openings in the brief", () => {
    expect(careerRoles).toHaveLength(3);
  });

  it("sends every application to the approved Careers email address", () => {
    expect(CAREERS_EMAIL).toBe("people@kolorowey.com");
    expect(careerRoles.every((role) => getApplicationHref(role).startsWith("mailto:people@kolorowey.com?"))).toBe(true);
  });

  it("keeps the requested role-specific email subjects", () => {
    expect(careerRoles.map((role) => role.applySubject)).toEqual([
      "Application – Ad Operations Specialist – Supply Side",
      "Application – Bookkeeper",
      "Application – Legal Counsel",
    ]);
    expect(careerRoles.map((role) => new URL(getApplicationHref(role)).searchParams.get("subject"))).toEqual([
      "Application – Ad Operations Specialist – Supply Side",
      "Application – Bookkeeper",
      "Application – Legal Counsel",
    ]);
  });
});