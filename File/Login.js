import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {auth} from './References';

export default function Login({navigation}){
  const [email, setEmail] = useState('');
  const [katasandi, setKatasandi] = useState('');
  const [isKatasandiVisible, setKatasandiVisible] = useState(false);

  const toggleKatasandiVisibility = () => {
    setKatasandiVisible(!isKatasandiVisible);
  };

  const handleLogin = () => {
      if(email =="" || katasandi=="" ){
        Alert.alert("Username dan Kata sandi harus diisi!")
      }
      else{
        auth.signInWithEmailAndPassword(email, katasandi)
      .then(() => {
        console.log("Login berhasil")
        navigation.navigate("Direncanakan")
      })
      .catch(()=>{
        Alert.alert('Email atau password salah!');
        console.log("Daftar gagal")
      })
    }
  };

  const Daftar = () => {
    navigation.navigate("Daftar")
  };

  const lupaKatasandi = () => {
    navigation.navigate("Direncanakan")
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>Ayo Login!</Text>
        <Text style={styles.subtitle}>Login Untuk Masuk Ke TaskMe</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/otof.png')}
            resizeMode="contain"
          />
          <Text style={styles.logoText}>TaskMe</Text>
        </View>
        <Text style={styles.label}>Alamat Email</Text>
        <View style={styles.userInputContainer}>
          <Icon name="user-alt" size={20} color="#1C1E21BF" style={styles.UserIcon} />
          <TextInput
            style={styles.input}
            placeholder="Masukkan Alamat Email Anda"
            placeholderTextColor="#9FADBC"
            onChangeText={(value)=>setEmail(value)}
            value={email}
            keyboardType="default"
            autoCapitalize="none"
            autoCompleteType="email"
          />
        </View>
        <Text style={styles.label}>Kata Sandi</Text>
        <View style={styles.katasandiInputContainer}>
          <Icon name="lock" size={20} color="#1C1E21BF" style={styles.lockIcon} />
          <TextInput
            style={styles.input2}
            placeholder="******************"
            placeholderTextColor="#9FADBC"
            onChangeText={(value)=>setKatasandi(value)}
            value={katasandi}
            secureTextEntry={!isKatasandiVisible}
            autoCapitalize="none"
            autoCompleteType="katasandi"
          />
          <TouchableOpacity onPress={toggleKatasandiVisibility} style={styles.katasandiVisibilityIcon}>
            <Ionicons
              name={isKatasandiVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#9FADBC"
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
        <Text style={styles.footerText}>Belum Punya Akun?</Text>
        <TouchableOpacity onPress={Daftar}>
          <Text style={[styles.footerText, styles.daftarText]}>Daftar</Text>
        </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '5%',
    marginBottom: '10%',
    marginTop: '15%',
  },
  contentContainer: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    color: '#23419B',
    fontWeight: 'bold',
    marginRight: '45%',
  },
  subtitle: {
    color: '#1C1E21',
    fontSize: 14,
    marginRight: '23%',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  imageContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  logo: {
    width: 270,
    height: 150,
  },
  logoText: {
    fontSize: 20,
    color: '#23419B',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'stretch',
    marginLeft: 50,
    color: '#1C1E21',
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    paddingLeft: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#23419B',
    borderWidth: 2,
    marginBottom: 10,
    color: 'black',
  },
  input2: {
    flex: 1,
    height: 50,
    padding: 10,
    paddingLeft: 50,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#23419B',
    marginBottom: -15,
    color: 'black',
  },
  katasandiInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
  },
  userInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 3,
    marginLeft: 65,
  },
  katasandiVisibilityIcon: {
    marginLeft: -25,
    zIndex: 1,
    top: 5,
    right: 20,
  },
  lockIcon: {
    position: 'absolute',
    left: 20,
    top: 10,
    zIndex: 1,
  },
  UserIcon: {
    position: 'absolute',
    left: 20,
    top: 10,
    zIndex: 1,
  },
  lupaKatasandiButton: {
    alignSelf: 'flex-end',
    marginRight: 50,
    marginTop: 10,
  },
  lupaKatasandiButtonText: {
    color: '#304DE5',
  },
  loginButton: {
    width: '80%',
    backgroundColor: '#23419B',
    height: 50,
    padding: 13,
    borderRadius: 20,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    fontSize: 32,
    marginLeft: '5%',
    top: '2%'
  },
  footerText: {
    color: '#738599',
  },
  daftarText: {
    color: '#304DE5',
    marginLeft: 5,
  },
});


