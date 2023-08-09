import { Text, View } from 'react-native';


interface ExampleProps {
  text: string;
  children?: string; // optional
}

const Example = ({children, text}: ExampleProps) => {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();


  
  const handleChangeName = () => {
    setName('new name');
  };
  
  const handleChangeLastName = () => {
    setLastName('new last name');
  };

  return (
    <View>
      <Button onClick={handleChangeName}>Name</Button>
      <Button onClick={handleChangeLastName}>LastName</Button>

    </View>
  );
}

export default Example;