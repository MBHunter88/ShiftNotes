import { Shift, ShiftEvent, ShiftSummary } from "@/domain/models";

function countEvents(events: ShiftEvent[], type: ShiftEvent["type"]) {
  return events.filter((event) => event.type === type).length;
}

export function buildShiftSummaryPreview(shift: Shift, events: ShiftEvent[]): ShiftSummary {
  const feedCount = countEvents(events, "feed");
  const diaperCount = countEvents(events, "diaper");
  const sleepCount = countEvents(events, "sleep");

  const sections = [
    {
      id: "overview",
      title: "Overview",
      content: `Sample ${shift.type} shift preview with ${events.length} logged events.`
    },
    {
      id: "feeding",
      title: "Feeding",
      content: `${feedCount} feeding event(s) captured in the timeline.`
    },
    {
      id: "care",
      title: "Care",
      content: `${diaperCount} diaper event(s) and ${sleepCount} sleep event(s) captured.`
    }
  ];

  return {
    id: `preview-${shift.id}`,
    shiftId: shift.id,
    generatedAt: new Date().toISOString(),
    sections,
    plainText: sections.map((section) => `${section.title}: ${section.content}`).join("\n\n")
  };
}
