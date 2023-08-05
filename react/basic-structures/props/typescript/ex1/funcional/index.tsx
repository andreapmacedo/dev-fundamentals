
import { View } from "react-native";

import { Participant } from "./Participant";

import { styles } from "./style";

export function Home() {

  return (
    <View style={styles.container}>
      <Participant name={"andre"}/>
      <Participant name={"joao"}/>
      <Participant name={"diego"}/>
    </View>
  )
}