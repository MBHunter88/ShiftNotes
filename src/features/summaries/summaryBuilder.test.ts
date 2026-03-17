import { sampleEvents, sampleShift } from "@/domain/sampleData";
import { buildShiftSummaryPreview } from "@/features/summaries/summaryBuilder";

describe("buildShiftSummaryPreview", () => {
  it("creates stable sections from the current shift and timeline", () => {
    const summary = buildShiftSummaryPreview(sampleShift, sampleEvents);

    expect(summary.id).toBe(`preview-${sampleShift.id}`);
    expect(summary.shiftId).toBe(sampleShift.id);
    expect(summary.sections).toHaveLength(3);
    expect(summary.sections[0]?.content).toContain("2 logged events");
    expect(summary.sections[1]?.content).toContain("1 feeding event");
    expect(summary.sections[2]?.content).toContain("1 diaper event");
    expect(summary.plainText).toContain("Overview:");
    expect(summary.plainText).toContain("Feeding:");
    expect(summary.plainText).toContain("Care:");
  });

  it("keeps counts accurate when additional events are present", () => {
    const extendedEvents = [
      ...sampleEvents,
      {
        id: "event-3",
        shiftId: sampleShift.id,
        type: "sleep" as const,
        timestamp: "2026-03-16T05:00:00.000Z",
        details: {
          infantId: "infant-1",
          action: "start" as const
        },
        createdAt: "2026-03-16T05:00:00.000Z",
        updatedAt: "2026-03-16T05:00:00.000Z"
      }
    ];

    const summary = buildShiftSummaryPreview(sampleShift, extendedEvents);

    expect(summary.sections[0]?.content).toContain("3 logged events");
    expect(summary.sections[2]?.content).toContain("1 diaper event");
    expect(summary.sections[2]?.content).toContain("1 sleep event");
  });
});
