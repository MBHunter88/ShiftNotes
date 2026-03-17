import { ScreenCard } from "@/shared/components/ScreenCard";
import { BodyText } from "@/shared/components/BodyText";
import { SummarySectionListPlaceholder } from "@/features/summaries/components/SummarySectionListPlaceholder";

export function SummaryPreviewScreenPlaceholder() {
  return (
    <ScreenCard title="Summary Preview">
      <BodyText>
        Planned responsibilities: generate a structured summary, allow review before
        export, and support copy/share text as the primary MVP export flow.
      </BodyText>
      <SummarySectionListPlaceholder />
    </ScreenCard>
  );
}
