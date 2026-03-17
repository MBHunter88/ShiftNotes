import { ScreenCard } from "@/shared/components/ScreenCard";
import { BodyText } from "@/shared/components/BodyText";
import { EventComposerPlaceholder } from "@/features/events/components/EventComposerPlaceholder";
import { NotesPanelPlaceholder } from "@/features/notes/components/NotesPanelPlaceholder";

export function ActiveShiftScreenPlaceholder() {
  return (
    <ScreenCard title="Active Shift">
      <BodyText>
        Planned responsibilities: start or resume a shift, surface quick-add actions,
        edit timeline items, and capture notes while care is in progress.
      </BodyText>
      <EventComposerPlaceholder />
      <NotesPanelPlaceholder />
    </ScreenCard>
  );
}
