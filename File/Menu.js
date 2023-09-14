import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/FontAwesome5';

const Menu = () => {

  const Profil = () => {
    console.log(`Halaman profil`);
  };

  const Kegiatanku = () => {
    console.log(`Halaman Kegiatanku`);
  };

  const Direncanakan = () => {
    console.log(`Halaman Direncanakan`);
  };

  const Tugas = () => {
    console.log(`Halaman Tugas`);
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navprofil} onPress={Profil}>
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
      </TouchableOpacity>
      <TouchableOpacity style={styles.navkegiatanku} onPress={Kegiatanku}>
        <View style={styles.imageContainer}>
          <Ionicons name="sunny-outline" size={45} color="black" style={styles.iconStyle} />
        </View>
        <View style={styles.textContainerSubmenu}>
          <Text style={styles.nameText}>Kegiatanku</Text>
          <Text style={styles.countText}>3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navdirencanakan} onPress={Direncanakan}>
        <View style={styles.imageContainer}>
          <Ionicons name="calendar" size={45} color="black" style={styles.iconStyle} />
        </View>
        <View style={styles.textContainerSubmenu}>
          <Text style={styles.nameText}>Direncanakan</Text>
          <Text style={styles.countText}>3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navtugas} onPress={Tugas}>
        <View style={styles.imageContainer}>
          <Icon name="tasks" size={45} color="black" style={styles.iconStyle} />
        </View>
        <View style={styles.textContainerSubmenu}>
          <Text style={styles.nameText}>Tugas</Text>
          <Text style={styles.countText}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '10%',
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
  navkegiatanku: {
    position: 'relative',
    width: '90%',
    height: 85,
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  navdirencanakan: {
    position: 'relative',
    width: '90%',
    height: 85,
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  navtugas: {
    position: 'relative',
    width: '90%',
    height: 85,
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
  textContainerSubmenu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 28,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 14,
    marginTop: 5,
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 10,
  },
  iconStyle: {
    marginLeft: 15,
  },
});

export default Menu;
