import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Profil = () => {

  const handleLogout = () => {
    console.log(`Halaman Login`);
  };

  const Menu = () => {
    console.log(`Halaman Menu`);
  };

  const Ubahkatasandi = () => {
    console.log(`Halaman Ubah Kata Sandi`);
  };

  const Ubahdatapribadi = () => {
    console.log(`Halaman Ubah Data Pribadi`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navprofil}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.tinyLogo2}
            source={require('../assets/jon.png')}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>John Pragos</Text>
          <Text style={styles.emailText}>johnpragos@gmail.com</Text>
        </View>
      </View>
      <View style={styles.boxcontent}>
        <TouchableOpacity style={styles.boxsubcontent_1} onPress={Ubahdatapribadi}>
          <View style={styles.boxicon_1}>
            <Icon name="user-alt" size={20} color="#9932CC" style={styles.UserIcon} />
          </View>
            <Icon name="chevron-right" size={30} color="#000000" style={styles.buttonaction} />
          <Text style={styles.texcontent_1}>Ubah Data Pribadi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxsubcontent_2} onPress={Ubahkatasandi}>
          <View style={styles.boxicon_2}>
            <Icon name="lock" size={20} color="#FF0000" style={styles.lockIcon} />
          </View>
              <Icon name="chevron-right" size={30} color="#000000" style={styles.buttonaction} />
          <Text style={styles.texcontent_2}>Ubah Kata Sandi</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '20%',
  },
  navprofil: {
    position: 'relative',
    width: '90%',
    height: 85,
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  imageContainer: {
    marginLeft: 5,
  },
  tinyLogo2: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  textContainer: {
    marginLeft: 10,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 14,
    marginTop: 5,
  },
  boxcontent: {
    width: '90%',
    height: '50%',
    backgroundColor: '#FCD9FC',
    borderRadius: 20,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  boxsubcontent_1: {
    position: 'relative',
    width: '90%',
    height: '20%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 35,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  boxsubcontent_2: {
    position: 'relative',
    width: '90%',
    height: '20%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  texcontent_1:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    bottom: 68,
    marginLeft: 80
  },
  boxicon_1: {
    width: '15%',
    height: '60%',
    backgroundColor: '#ffccff',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 20,
    bottom: 8
  },
  boxicon_3: {
    width: '15%',
    height: '95%',
    borderWidth: 30,
    borderColor:'#000000',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: '85%',
    bottom: 73
  },
  texcontent_2:{
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    bottom: 68,
    marginLeft: 80
  },
  boxicon_2: {
    width: '15%',
    height: '60%',
    backgroundColor: '#ffcccc',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 20,
    bottom: 8
  },
  UserIcon: {
    left: 12,
    top: 5,
  },
  lockIcon: {
    left: 12,
    top: 5,
  },
  logoutButton: {
    width: '35%',
    backgroundColor: '#23419B',
    height: 50,
    padding: 13,
    borderRadius: 20,
    bottom: 80
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonaction: {
    marginLeft: '90%',
    bottom: 40,
  },
});

export default Profil;