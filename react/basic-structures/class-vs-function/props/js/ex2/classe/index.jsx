import React, { Component } from "react";
import { Alert, FlatList, View } from "react-native";

import { Participant } from "./Participant";

import { styles } from "./style";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participants: []
    };
  }

  handleParticipantRemove = (name) => {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => this.setState(prevState => ({ participants: prevState.participants.filter(participant => participant !== name) }))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.participants}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Participant 
              key={item} 
              name={item} 
              onRemove={() => this.handleParticipantRemove(item)} 
            />
          )}
        />
      </View>
    )
  }
}

export default Home;