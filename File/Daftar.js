import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {auth} from './References'; 

export default function Daftar({navigation, Route}){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleDaftar = () => {
    console.log(email, password)
    if(email==''||password==''){
        Alert.alert("Email dan password harus diisi!")
    }else{
      auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Register berhasil")
        navigation.navigate("Login")
      })
      .catch(()=>{
        console.log("Register gagal")
      })
    }
  };

  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>Buat Akun</Text>
        <Text style={styles.subtitle}>Isikan Formulir berikut {'\n'}Dengan Data Yang Benar</Text>
        <Text style={styles.label}>Alamat Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan Alamat Email Anda"
          placeholderTextColor="#9FADBC"
          onChangeText={(value)=>setEmail(value)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
        />
        <Text style={styles.label}>Kata Sandi</Text>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.input}
            placeholder="******************"
            placeholderTextColor="#9FADBC"
            onChangeText={(value)=>setPassword(value)}
            value={password}
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
            autoCompleteType="password"
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordVisibilityIcon}>
            <Ionicons
              name={isPasswordVisible ? 'eye-off' : 'eye'}
              size={24}
              color="#9FADBC"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>handleDaftar(email, password)}>
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '5%',
  },
  contentContainer: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#23419B',
    fontWeight: 'bold',
    marginRight: '50%',
    bottom: '5%'
  },
  subtitle: {
    color: '#1C1E21',
    fontSize: 14,
    marginRight: '38%',
    bottom: '5%'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'stretch',
    marginLeft: 55,
    marginTop: 20,
    color: '#1C1E21',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginLeft: 65
  },
  passwordVisibilityIcon: {
    marginLeft: -25,
    zIndex: 1,
    top: 5,
    right: 20
  },
  input: {
    width: '80%',
    height: 50,
    padding: 10,
    paddingLeft: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#23419B',
    marginBottom: -15,
    color: 'black'
  },
  button: {
    width: '80%',
    backgroundColor: '#23419B',
    height: 50,
    padding: 13,
    borderRadius: 20,
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
