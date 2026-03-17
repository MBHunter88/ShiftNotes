import { ScrollView, StyleSheet, View } from "react-native";

import { ScreenCard } from "@/shared/components/ScreenCard";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { APP_COPY } from "@/shared/constants/appCopy";
import { colors } from "@/shared/theme/colors";
import { spacing } from "@/shared/theme/spacing";
import { BodyText } from "@/shared/components/BodyText";
import { ClientListScreenPlaceholder } from "@/features/clients/screens/ClientListScreenPlaceholder";
import { ActiveShiftScreenPlaceholder } from "@/features/shifts/screens/ActiveShiftScreenPlaceholder";
import { SummaryPreviewScreenPlaceholder } from "@/features/summaries/screens/SummaryPreviewScreenPlaceholder";
import { ShiftHistoryScreenPlaceholder } from "@/features/history/screens/ShiftHistoryScreenPlaceholder";

export function AppShell() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <SectionHeading title={APP_COPY.appName} subtitle={APP_COPY.tagline} />
        <BodyText>
          This Stage 3 build focuses on architecture only. Screens are placeholders
          that define the feature boundaries for later implementation.
        </BodyText>
      </View>

      <ScreenCard title="Primary Workflow">
        <BodyText>{APP_COPY.workflow}</BodyText>
      </ScreenCard>

      <ClientListScreenPlaceholder />
      <ActiveShiftScreenPlaceholder />
      <SummaryPreviewScreenPlaceholder />
      <ShiftHistoryScreenPlaceholder />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
    gap: spacing.lg,
    backgroundColor: colors.background
  },
  header: {
    gap: spacing.sm
  }
});
