import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

import { colors } from "@/shared/theme/colors";
import { typography } from "@/shared/theme/typography";

export function BodyText({ children }: PropsWithChildren) {
  return <Text style={styles.body}>{children}</Text>;
}

const styles = StyleSheet.create({
  body: {
    color: colors.textPrimary,
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight
  }
});
