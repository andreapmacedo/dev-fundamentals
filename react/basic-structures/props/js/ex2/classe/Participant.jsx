import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./style";

class Participant extends Component {
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