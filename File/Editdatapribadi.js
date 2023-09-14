import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Editdatapribadi = () => {

  const [newemail, setNewEmail] = useState('');
  const [confirmnewemail, setConfirmNewEmail] = useState('');

  const Profil = () => {
    console.log(`Halaman Profil`);
  };
  
  const Gantipoto = () => {
    console.log(`Buka pop up ganti poto`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navback} onPress={Profil}>
        <View style={styles.iconcontainer}>
          <Icon name="chevron-left" size={30} color="black" style={styles.iconStyle} />
        </View>
        <View style={styles.labeltextcontainer}>
          <Text style={styles.buttonlabeltext}>Edit Data Pribadi</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.subtitle}>
        <Text style={styles.subtitle}>
        Foto profil yang diupload ukurannya tidak boleh lebih dari 1 MB. Isikan alamat email Anda dengan tepat dan benar.
        </Text>
      </View>
      <View style={styles.contInput}>
        <Text style={styles.title}>Edit Data Pribadi</Text>
        <View style={styles.imageInput}>
          <Image style={styles.image} source={require('../assets/jon.png')} />
          <TouchableOpacity style={styles.iconContainer} onPress={Gantipoto}>
            <View style={styles.iconBackground}>
              <Icon name="plus-circle" size={20} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.posInput}>
          <TextInput 
            style={styles.input}
            placeholder="Masukkan Alamat Email Baru Anda"
            placeholderTextColor="#696969"
            color="#696969"
            onChangeText={setNewEmail}
            value={newemail} 
          />
        </View>
        <View style={styles.posInput}>
          <TextInput
          style={styles.input}
            placeholder="Konfirmasi Alamat Email Baru Anda"
            placeholderTextColor="#696969"
            color="#696969"
            onChangeText={setConfirmNewEmail}
            value={confirmnewemail}
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
    marginBottom: 20
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
  imageInput:{
    alignItems: 'center',
    marginBottom: 20
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 75,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 110,
    zIndex: 1,
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

export default Editdatapribadi;
