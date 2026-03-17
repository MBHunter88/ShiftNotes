import { View } from "react-native";

import { buildShiftSummaryPreview } from "@/features/summaries/summaryBuilder";
import { sampleEvents, sampleShift } from "@/domain/sampleData";
import { BodyText } from "@/shared/components/BodyText";
import { spacing } from "@/shared/theme/spacing";

export function SummarySectionListPlaceholder() {
  const preview = buildShiftSummaryPreview(sampleShift, sampleEvents);

  return (
    <View style={{ gap: spacing.xs }}>
      {preview.sections.map((section) => (
        <BodyText key={section.id}>
          {section.title}: {section.content}
        </BodyText>
      ))}
    </View>
  );
}
