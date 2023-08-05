import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Home() {

  const [participants, setParticipants] = useState([]);
  const [participantName, setParticipantName] = useState('');
  // const [participants, setParticipants] = useState<string[]>([]);
  // const [participantName, setParticipantName] = useState('');
  
  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    }

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  return (
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName} // sempre que o conteúdo do input mudar, o valor será atualizado no estado
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
