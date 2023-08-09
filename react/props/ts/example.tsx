import { Text, View } from 'react-native';


interface ExampleProps {
  text: string;
  children?: string; // optional
}

// const Example = ({children, text}: ExampleProps) => {
const Example = (props: ExampleProps) => {
  const { text } = props; // destructuring
  const children = props.children; // same as above
  const { text: textProps } = props; // can rename if needed


  return (
    <View>
      <Text>{props.text}</Text>
      <Text>{props.children}</Text>
      <Text>{children}</Text>
      <Text>{text}</Text>
      <Text>{textProps}</Text>
    </View>
  );
}

export default Example;