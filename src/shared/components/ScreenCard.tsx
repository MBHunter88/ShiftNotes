import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

import { BodyText } from "@/shared/components/BodyText";
import { colors } from "@/shared/theme/colors";
import { radii } from "@/shared/theme/radii";
import { spacing } from "@/shared/theme/spacing";

interface ScreenCardProps extends PropsWithChildren {
  title: string;
}

export function ScreenCard({ children, title }: ScreenCardProps) {
  return (
    <View style={styles.card}>
      <BodyText>{title}</BodyText>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.sm,
    padding: spacing.md,
    borderRadius: radii.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border
  },
  content: {
    gap: spacing.sm
  }
});
