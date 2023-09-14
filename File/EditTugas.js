import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Switch } from 'react-native';
import IconCalendar from 'react-native-vector-icons/AntDesign'
import IconRepeat from 'react-native-vector-icons/Feather'
import IconBell from 'react-native-vector-icons/Fontisto'
import Iconcategory from 'react-native-vector-icons/MaterialIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';

const EditTugas = () => {
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const [categoryselectedValue, setCategorySelectedValue] = useState(null);
  const [repeatselectedValue, setRepeatSelectedValue] = useState("Harian");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  const Profil = () => {
    console.log(`Halaman (Kategori Pengelola Tugas)`);
  };

  const calendar = () => {
    console.log(`Buka Pop up calendar`);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navback} onPress={Profil}>
        <View style={styles.iconcontainer}>
          <Icon2 name="chevron-left" size={30} color="black" style={styles.iconStyle} />
        </View>
        <View style={styles.labeltextcontainer}>
          <Text style={styles.buttonlabeltext}>Tambah Tugas Baru</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.contInput}>
        <Text style={styles.title}>Judul</Text>
        <View style={styles.posInput}>
          <TextInput 
            style={styles.inputjudul}
            placeholder="MEETING WITH TEAM"
            placeholderTextColor="#696969"
            onChangeText={setJudul}
            value={judul} 
          />
        </View>
        <View style={styles.line}></View>
        <Text style={styles.title}>Deskripsi</Text>
        <View style={styles.posInput}>
          <TextInput
            style={styles.inputdeskripsi}
            placeholder="Take notes. In addition to noting the facts,Passwords and instructions you are given, also jot down of the names of the people you meet."
            placeholderTextColor="#696969"
            onChangeText={setDeskripsi}
            value={deskripsi}
            multiline={true}
            textAlignVertical="bottom" 
          />
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.boxContainerJadwal}>
        <TouchableOpacity style={styles.boxJadwal} onPress={calendar}>
          <IconCalendar name="calendar" size={22} color="white" style={styles.iconboxjadwal} />
          <Text style={styles.textBox}>14 Juli, 2023</Text>
        </TouchableOpacity>
        <View style={styles.boxJadwal}>
          <IconRepeat name="repeat" size={22} color="white" style={styles.iconboxjadwal} />
          <Picker
              selectedValue={repeatselectedValue}
              style={styles.boxpicker}
              onValueChange={(itemValue, itemIndex) => setRepeatSelectedValue(itemValue)}
            >
            <Picker.Item label="Harian" value="Harian" />
            <Picker.Item label="Mingguan" value="Mingguan" />
            <Picker.Item label="Bulanan" value="Bulanan" />
          </Picker>
        </View>
      </View>
      <View style={styles.boxIngat}>
        <IconBell name="bell-alt" size={22} color="white" style={styles.iconsinglebox} />
        <Text style={styles.textBox}>Ingatkan Saya</Text>
        <Switch
          style={styles.boxswitcher}
          trackColor={{false: '#5B5B5B', true: '#A3A3A3'}}
          thumbColor={isEnabled ? '#ffff' : '#ffff'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View style={styles.boxIngat}>
        <Iconcategory name="category" size={22} color="white" style={styles.iconsinglebox} />
        <Picker
            selectedValue={categoryselectedValue}
            style={styles.boxpickercategory}
            dropdownIconColor='white'
            onValueChange={(itemValue, itemIndex) => setCategorySelectedValue(itemValue)}
          >
          <Picker.Item label="Simpan Di Kategori" value={null} enabled={false} />
          <Picker.Item label="Kegiatanku" value="Kegiatanku" />
          <Picker.Item label="Direncanakan" value="Direncanakan" />
          <Picker.Item label="Tugas" value="Tugas" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.buttonboxbuat} onPress={Profil}>
        <Text style={styles.textbuttonboxbuat}>Buat Tugas</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: '15%'
  },
  navback: {
    position: 'relative',
    width: '90%',
    height: 85,
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  iconcontainer: {
    marginLeft: 0,
  },
  iconStyle: {
    marginLeft: 15,
  },
  title:{
    fontSize : 17,
    fontWeight : 'bold',
    color: '#23419B',
    marginBottom: 15,
    textAlign: 'left',
  },
  contInput:{
    marginHorizontal: '20%'
  },
  posInput:{
    textAlign: 'left',
  },
  inputjudul:{
    fontSize: 30,
    fontWeight: 'bold',
    height : 30,
    color:'black'
  },
  boxContainerJadwal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  boxJadwal: {
    width: 140,
    height: 50,
    backgroundColor: '#502E7E',
    borderRadius: 9,
    marginHorizontal: 10,
    marginLeft: 10,
    flexDirection: 'row',
  },
  textBox: {
    fontSize: 14,
    marginLeft: 15,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 17
  },
  boxIngat: {
    width: 300,
    height: 54,
    backgroundColor: '#502E7E',
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 9,
    flexDirection: 'row',
  },
  iconsinglebox:{
    marginLeft: 20, 
    marginTop: 15
  },
  boxswitcher:{
    left: 120
  },
  boxpicker: {
    height: 50,
    width: 180,
    borderWidth: 0, 
    borderColor: "transparent",
    color: 'white',
  },
  boxpickercategory: {
    height: 50,
    width: 260,
    borderWidth: 0, 
    borderColor: "transparent",
    color: 'white',
  },
  inputdeskripsi:{
    fontSize: 13,
    height : 40,
    textAlignVertical: 'bottom',
  },
  labeltextcontainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: '24%',
  },
  buttonlabeltext: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconboxjadwal:{
    marginLeft: 17, 
    marginTop: 13,
  },
  boxulang:{
    marginLeft: 17, 
    marginTop: 13,
  },
  textbuttonboxbuat_Tugas_Baru: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#23419B',
    marginTop: -100,
  },
  textJudul: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#23419B',
    marginTop: 100,
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
  textMeeting: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor : '#E9E9E9',
    width: 300,
    marginBottom: '10%'
  },
  boxset:{
    flex: 1,
    flexDirection: 'row',
  },
  textDeskripsi: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#23419B',
    textAlign: 'left',
    justifyContent: 'flex-start',
    marginTop: 40,
  },
  buttonboxbuat: {
    width: 300,
    height: 50,
    backgroundColor: '#23419B',
    marginTop: 20,
    borderRadius: 20,
  },
  textbuttonboxbuat: {
    fontSize: 20,
    marginLeft: '37%',
    fontWeight: 'bold',
    color: 'white',
    marginTop: 13,
  },
});
export default EditTugas;