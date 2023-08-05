import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./style";

interface Props {
  name: string;
  onRemove: () => void;
}

class Participant extends Component<Props> {
  render() {
    const { name, onRemove } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.name}>
          {name}
        </Text>

        <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Participant;