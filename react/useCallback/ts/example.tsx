import { Text, View } from 'react-native';

const Example = () => {
  const [name, setName] = useState('name');
  const [lastName, setLastName] = useState('last name');
  
  // useCallback is used to prevent the function from being recreated every time the component is rendered.
  
  // É imprescindível que o array de dependências seja passado como segundo parâmetro para o useCallback, caso contrário, se o lastName for anteriormente modificado essa mudança não será refletida no callback.
  // const handleChangeName = useCallback (() => {
  //   setName(`new name ${lastName}`);
  // }, []);

  const handleChangeName = useCallback (() => {
    setName(`new name ${lastName}`);
  }, [lastName]);
  
  const handleChangeLastName = () => {
    setLastName('new last name');
  };

  return (
    <div>
      <button onClick={handleChangeName}>Name</button>
      <button onClick={handleChangeLastName}>LastName</button>

    </div>
  );
}

export default Example;