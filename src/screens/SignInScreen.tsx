import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      if (email && password) {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        if (userCredential.user) {
          navigation.navigate('Root');
        }
      } else {
        console.log('Lütfen e-posta ve şifre giriniz.');
      }
    } catch (error) {
      console.log('Giriş başarısız. Hata:', error.message);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/bg-3.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>Shopping App</Text>
      <TextInput
        style={styles.input}
        value={email}
        placeholder="E-posta adresinizi girin"
        onChangeText={(text) => setEmail(text.toLowerCase())}
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Şifrenizi girin"
      />
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  signInButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SignInScreen;
