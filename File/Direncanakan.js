import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/Ionicons';
import { dataRef } from './References';
import { Ionicons } from "@expo/vector-icons";

export default function Direncanakan({navigation, Route}){
  const [datatugas, setDatatugas] = useState([]);

  useEffect(() => {
    const dataFocus = navigation.addListener('focus', () => {
      const listener = dataRef.on('value', (snapshot) => {
        let data = snapshot.val();
        let datatugas = Object.values(data).filter((item) =>
          item.hasOwnProperty('key')
        );
        setDatatugas(datatugas);
      });
    });
  });

  const Tambahtugas = () => {
    navigation.navigate(`TambahTugas`);
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
        <Text style={styles.title}>Direncanakan</Text>
      </View>
      <View style={[styles.contInput, { height: 'auto' }]}>
        <View style={styles.ContainerProses}>
          <Text style={styles.subtitleProgress}>Proses</Text>
          <View style={styles.emptymessage}>
            <Text style={styles.textemptymessage}>Ayo Buat Tugas</Text>
            <Text style={styles.textemptymessage}>Dengan Mengklik Tombol</Text>
            <Icon name="plus-circle" size={20} color="#FF00FF" style={styles.iconemptymessage} />
          </View>
        </View>

        <View>
          <FlatList
            data={datatugas}
            keyExtractor={(item, index) => item.key}
            renderItem={({ item, index }) => {
              return (
                
                  <View style={{flexDirection:'row'}}>
                    <View>
                      <Text> {item.judul} </Text>
                    </View>
                    <View >
                      <Text> {item.deskripsi}</Text>
                    </View>
                  </View>
                
              );
            }}
          />
        </View>
        
        <View style={styles.ContainerTugasSelesai}>
          <TouchableOpacity style={styles.showhiddenitem}>
            <View style={styles.iconContainer}>
              <Ionicons name="chevron-down" size={40} color="#1E90FF" style={styles.iconStyle} />
            </View>
            <View style={styles.textContainerSubmenu}>
              <Text style={styles.subtitleDone}>Selesai</Text>
              <Text style={styles.countText}></Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.floatingButton} onPress={Tambahtugas}>
        <Icon name="plus-circle" size={40} color="#FF00FF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '20%',
  },
  emptymessage: {
    marginTop: 20,
    textAlign: 'center',
    alignItems: 'center',
  },
  textemptymessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    flexDirection: 'row',
  },
  iconemptymessage: {
    bottom: 22,
    left: 118,
  },
  navback: {
    position: 'relative',
    width: '90%',
    height: 85,
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconcontainer: {
    marginLeft: 5,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginHorizontal: '13%',
    fontWeight: 'bold',
    color: '#23419B',
  },
  subtitleProgress: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF00FF',
    left: 15,
  },
  subtitleDone: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E90FF',
    top: -1,
    marginRight: 50,
  },
  taskbox: {
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
  taskbox_2: {
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
  tekstask: {
    top: 30,
    right: 36,
  },
  donebox: {
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
  donebox_2: {
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
  contInput: {
    backgroundColor: '#FCD9FC',
    margin: 20,
    padding: 15,
    borderRadius: 15,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  ContainerProses: {
    marginRight: '10%',
    marginBottom: 10,
  },
  ContainerTugasSelesai: {
    top: 70,
    marginRight: '10%',
    marginBottom: 80,
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
    textDecorationLine: 'line-through',
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
    marginBottom: 10,
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