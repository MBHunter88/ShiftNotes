import { formatLocalTime } from "@/shared/utils/time";

describe("formatLocalTime", () => {
  it("returns a human-readable local time string", () => {
    const formatted = formatLocalTime("2026-03-16T04:30:00.000Z");

    expect(typeof formatted).toBe("string");
    expect(formatted).toMatch(/:/);
  });
});
