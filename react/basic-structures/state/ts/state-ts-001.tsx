import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from '../TextInput/styles';

export default function Home() {

  const [participants, setParticipants] = useState(['Joao']);
  const [participantName, setParticipantName] = useState('');
  // const [participants, setParticipants] = useState<string[]>([]);
  // const [participantName, setParticipantName] = useState('');
  
  function handleParticipantAdd() {
    setParticipants(prevState => [...prevState, participantName]);
    // ['joao'] => ['joao', 'maria']

    // forma incorreta, sem o spread operator
    // setParticipants(prevState => [prevState, participantName]);
    // ['joao'] => [['joao'], 'maria']


    setParticipantName('');
  }

  return (
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
    </View>
  );
};
