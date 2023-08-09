import { SafeAreaView, Text, View } from 'react-native';

import Example from './example';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Example />
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
}