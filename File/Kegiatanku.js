import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Ionicons'

import { Ionicons } from "@expo/vector-icons";


const Kegiatanku = () => {

  const Tambahtugas = () => {
    console.log(`Halaman Tambah Tugas`);
  };
  
  const Done = () => {
    console.log(`Tugas Selesai`);
  };

  const Cancel = () => {
    console.log(`Tugas Dikerjakan Kembali`);
  };

  const Edittugas = () => {
    console.log(`Halaman Edit Tugas`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subtitle}>
        <Text style={styles.title}>Kegiatanku</Text>
      </View>
      <View style={styles.contInput}>
        <View style={styles.ContainerProses}>
          <Text style={styles.subtitleProgress}>Proses</Text>
          <TouchableOpacity style={styles.taskbox} onPress={Edittugas}>
            <View>
              <TouchableOpacity onPress={Done}>
                <View style={styles.radioButton}></View>
              </TouchableOpacity>
            </View>
            <View style={styles.tekstask}>
              <Text style={styles.teksProses}>Mengerjakan Tugas Mobile Programming</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.taskbox_2} onPress={Edittugas}>
            <View>
              <TouchableOpacity onPress={Done}>
                <View style={styles.radioButton}></View>
              </TouchableOpacity>
            </View>
            <View style={styles.tekstask}>
              <Text style={styles.teksProses}>Mengerjakan Tugas Multimedia</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.ContainerTugasSelesai}>
          <TouchableOpacity style={styles.showhiddenitem}>
            <View style={styles.iconContainer}>
              <Ionicons name="chevron-down" size={40} color="#1E90FF" style={styles.iconStyle} />
            </View>
            <View style={styles.textContainerSubmenu}>
              <Text style={styles.subtitleDone}>Selesai</Text>
              <Text style={styles.countText}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.donebox} onPress={Edittugas}>
            <View>
              <TouchableOpacity onPress={Cancel}>
              <View style={styles.radioButtonDone}>
                <Icon1 name="checkmark-circle" size={24} color="#1E90FF" />
              </View>
              </TouchableOpacity>
              <Text style={styles.teksDone}>Wireflow</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.donebox_2} onPress={Edittugas}>
            <View>
              <TouchableOpacity onPress={Cancel}>
              <View style={styles.radioButtonDone}>
                <Icon1 name="checkmark-circle" size={24} color="#1E90FF" />
              </View>
              </TouchableOpacity>
              <Text style={styles.teksDone}>Testing</Text>
            </View>
          </TouchableOpacity>
        </View>
          <TouchableOpacity  style={styles.posButton} onPress={Tambahtugas}>
            <View style={styles.button}></View>
            <Icon name="plus-circle" size={40} color="#FF00FF" />
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop: '20%'
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
  title:{
    fontSize: 40,
    textAlign: 'center',
    marginHorizontal: '13%',
    fontWeight: 'bold',
    color:'#23419B'
  },
  subtitleProgress:{
    fontSize : 20,
    fontWeight : 'bold',
    color: '#FF00FF',
    left: 15
  },
  subtitleDone:{
    fontSize : 20,
    fontWeight : 'bold',
    color: '#1E90FF',
    top: -1,
    marginRight: 50
  },
  taskbox:{
    position: 'absolute',
    width: '100%',
    height: 42,
    marginLeft: 15,
    marginTop: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
  },
  taskbox_2:{
    position: 'absolute',
    width: '100%',
    height: 42,
    marginLeft: 15,
    marginTop: 90,
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
  },
  tekstask:{
    top: 30,
    right: 36
  },
  donebox:{
    position: 'absolute',
    width: '100%',
    height: 42,
    marginLeft: 15,
    marginTop: 110,
    backgroundColor: '#C9C9C9',
    borderRadius: 7,
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
  },
  donebox_2:{
    position: 'absolute',
    width: '100%',
    height: 42,
    marginLeft: 15,
    marginTop: 160,
    backgroundColor: '#C9C9C9',
    borderRadius: 7,
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
  },
  contInput:{
    backgroundColor:'#FCD9FC',
    margin: 20,
    padding: 15,
    borderRadius: 15
  },
  posButton:{
    margin: 40,
    top: 50,
    left: '75%'
  },
  button:{
    borderRadius: 40,
    width: 35,
    height: 35,
    backgroundColor : '#fff', 
    top: 40,
    left: 2
  },
  ContainerProses:{
    marginRight: '10%',
    marginBottom: 80
  },
  ContainerTugasSelesai:{
    top: 70,
    marginRight: '10%',
    marginBottom: 80
  },
  teksProses: {
    fontWeight: 'bold',
    fontSize: 13,
    bottom: 19,
    marginLeft: 50,
  },
  teksDone: {
    fontWeight: 'bold',
    fontSize: 13,
    bottom: 19,
    marginLeft: 50,
    textDecorationLine: 'line-through'
  },
  radioButton: {
    width: 21,
    height: 21,
    borderWidth: 2,
    borderColor: '#FF00FF',
    borderRadius: 10,
    marginLeft: 15,
    marginTop: 10,
  },
  radioButtonDone: {
    marginLeft: 15,
    marginTop: 10,
  },
  showhiddenitem: {
    position: 'relative',
    width: '90%',
    height: 85,
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10
  },
  iconContainer: {
    marginLeft: 10,
  },
  textContainerSubmenu: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 18,
  },
  countText: {
    fontSize: 18,
    fontWeight: 'bold',
    right: 30,
    color: '#1E90FF',
  },
  iconStyle: {
    marginRight: -5,
  },
});

export default Kegiatanku;
