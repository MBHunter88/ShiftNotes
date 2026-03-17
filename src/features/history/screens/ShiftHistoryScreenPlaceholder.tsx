import { ScreenCard } from "@/shared/components/ScreenCard";
import { BodyText } from "@/shared/components/BodyText";

export function ShiftHistoryScreenPlaceholder() {
  return (
    <ScreenCard title="Shift History">
      <BodyText>
        Planned responsibilities: review past shifts, open saved summaries, and filter
        records by client and date.
      </BodyText>
    </ScreenCard>
  );
}
