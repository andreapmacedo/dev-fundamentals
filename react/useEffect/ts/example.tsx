import { Text, View } from 'react-native';


interface ExampleProps {
  text: string;
  children?: string; // optional
}

const Example = ({children, text}: ExampleProps) => {
  const [newText, setNewText] = useState(); // [state, setState

  // const newText= undefined
  const handleOnPress = () => {
    setNewText('new text');
  };

  return (
    <View>
      <Text>{children}</Text>
      <Text>{newText || text}</Text> 

      <Button 
        title="Press me"
        onPress={handleOnPress}
      />
    </View>
  );
}

export default Example;