import { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // flash engeli

  const login = (username) => setUser({ username });
  const logout = () => setUser(null);

  // 1) App start: user yükle
  useEffect(() => {
    AsyncStorage.getItem('user').then((stored) => {
      if (stored) setUser(JSON.parse(stored));
      setLoading(false);
    });
  }, []);

  // 2) user değişince kaydet/sil
  useEffect(() => {
    if (loading) return; // ilk load sırasında yazma
    if (user) {
      AsyncStorage.setItem('user', JSON.stringify(user));
    } else {
      AsyncStorage.removeItem('user');
    }
  }, [user, loading]);

  if (loading) return null; // veya loading ekranı basabilirsin

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}
