import { View, Text } from 'react-native';

export default function HomeScreen({ route }) {
  const { username } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome, {username}</Text>
    </View>
  );
}
