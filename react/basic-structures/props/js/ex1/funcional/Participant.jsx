import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./style";



export function Participant(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {props.name}
      </Text>
    </View>
  )
}

// ou, com desestruturação 
export function Participant() {
  const { name } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>
    </View>
  )
}

// ou, com desestruturação 
export function Participant({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {name}
      </Text>
    </View>
  )
}