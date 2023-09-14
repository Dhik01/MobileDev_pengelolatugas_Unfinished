import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Ubahkatasandi = () => {

  const [currentpassword, setCurrentPassword] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const Profil = () => {
    console.log(`Halaman Profil`);
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navback} onPress={Profil}>
        <View style={styles.iconcontainer}>
          <Icon name="chevron-left" size={30} color="black" style={styles.iconStyle} />
        </View>
        <View style={styles.labeltextcontainer}>
          <Text style={styles.buttonlabeltext}>Ubah Kata Sandi</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.subtitle}>
        <Text style={styles.subtitle}>
          Kata Sandi Anda minimal harus mengandung enam karakter dan harus menyertakan kombinasi angka, huruf, dan karakter khusus (!$@%).
        </Text>
      </View>
      <View style={styles.contInput}>
        <Text style={styles.title}>Ganti Kata Sandi</Text>
        <View style={styles.posInput}>
          <TextInput 
            style={styles.input}
            placeholder="Masukkan Kata Sandi Anda Saat Ini"
            placeholderTextColor="#696969"
            color="#696969"
            onChangeText={setCurrentPassword}
            value={currentpassword} 
          />
        </View>
        <View style={styles.posInput}>
          <TextInput
          style={styles.input}
            placeholder="Masukkan Kata Sandi Baru Anda"
            placeholderTextColor="#696969"
            color="#696969"
            onChangeText={setNewPassword}
            value={newpassword}
          />
        </View>
        <View style={styles.posInput}>
          <TextInput
          style={styles.input}
            placeholder="Konfirmasi Kata Sandi Baru Anda"
            placeholderTextColor="#696969"
            color="#696969"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
        </View>
        <View style={styles.posButton}>
          <TouchableOpacity  style={styles.button} onPress={Profil}>
            <Text style={styles.textButton}>Simpan</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop: 30
  },
  navback: {
    position: 'relative',
    width: '90%',
    height: 85,
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  iconcontainer: {
    marginLeft: 5,
  },
  iconStyle: {
    marginLeft: 15,
  },
  labeltextcontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '28%',
  },
  buttonlabeltext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle:{
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: '8%',
    color: 'black',
    marginBottom: 10
  },
  title:{
    fontSize : 20,
    fontWeight : 'bold',
    color: '#23419B',
    marginBottom: 15
  },
  contInput:{
    backgroundColor:'#FCD9FC',
    margin: 20,
    padding: 15,
    borderRadius: 15
  },
  posInput:{
    marginLeft : 10,
    marginRight : 20,
    marginBottom : 10,
  },
  input:{
    height : 30,
    borderBottomWidth:1,
    borderBottomColor : '#ffffff',
    color:"black"
  },
  posButton:{
    margin: 20,
    alignItems:'center',
  },
  button:{
    borderRadius: 13,
    width: 130,
    height: 35,
    alignItems:'center',
    backgroundColor : '#23419B', 
    justifyContent : 'center'
  },
  textButton:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20
  },
});

export default Ubahkatasandi;
