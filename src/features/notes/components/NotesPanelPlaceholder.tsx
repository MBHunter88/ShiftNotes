import { View } from "react-native";

import { BodyText } from "@/shared/components/BodyText";
import { spacing } from "@/shared/theme/spacing";

export function NotesPanelPlaceholder() {
  return (
    <View style={{ gap: spacing.xs }}>
      <BodyText>
        Notes module placeholder: freeform observations, parent updates, and context
        that should appear in the end-of-shift summary.
      </BodyText>
    </View>
  );
}
