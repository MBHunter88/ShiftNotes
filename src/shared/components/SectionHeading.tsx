import { StyleSheet, Text, View } from "react-native";

import { colors } from "@/shared/theme/colors";
import { spacing } from "@/shared/theme/spacing";
import { typography } from "@/shared/theme/typography";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs
  },
  title: {
    color: colors.textPrimary,
    fontSize: typography.heading.fontSize,
    lineHeight: typography.heading.lineHeight,
    fontWeight: "700"
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight
  }
});
