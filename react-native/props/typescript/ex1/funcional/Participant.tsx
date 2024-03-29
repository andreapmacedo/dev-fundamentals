import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./style";

type Props = {
  name: string;
}

export function Participant({ name }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>
    </View>
  )
}