import { SafeAreaView, Text, View } from 'react-native';

import Example from './example';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Example 
          text="Hello, world!"
        />
        <Example 
          text="another example"
        />
        <Example text="">Hello world</Example>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
}