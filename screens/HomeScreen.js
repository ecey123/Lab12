import { View, Text, Pressable } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 }}>
      <Text>Welcome, {user?.username}</Text>

      <Pressable onPress={() => navigation.navigate('Settings')}>
        <Text style={{ textDecorationLine: 'underline' }}>Go to Settings</Text>
      </Pressable>

      <Pressable onPress={() => { logout(); navigation.replace('Login'); }}>
        <Text style={{ color: 'crimson' }}>Logout</Text>
      </Pressable>
    </View>
  );
}
