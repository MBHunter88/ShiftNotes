import { View } from "react-native";

import { BodyText } from "@/shared/components/BodyText";
import { spacing } from "@/shared/theme/spacing";

export function EventComposerPlaceholder() {
  return (
    <View style={{ gap: spacing.xs }}>
      <BodyText>Quick-add events:</BodyText>
      <BodyText>- Feed</BodyText>
      <BodyText>- Diaper</BodyText>
      <BodyText>- Sleep start/end</BodyText>
      <BodyText>- Soothing / education / custom event</BodyText>
    </View>
  );
}
