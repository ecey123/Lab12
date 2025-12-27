import { View, Text, Pressable } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 }}>
      <Text style={{ fontSize: 18 }}>Theme: {theme}</Text>

      <Pressable
        onPress={toggleTheme}
        style={{
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 10,
          borderWidth: 1,
        }}
      >
        <Text>Toggle Theme</Text>
      </Pressable>

      <View
        style={{
          marginTop: 16,
          width: 240,
          height: 120,
          borderRadius: 14,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: isDark ? '#111' : '#fff',
        }}
      >
        <Text style={{ color: isDark ? '#fff' : '#111' }}>Preview</Text>
      </View>
    </View>
  );
}
