import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from '../File/Login';
import Daftar from '../File/Daftar';
import Kegiatanku from '../File/Kegiatanku';
import Direncanakan from '../File/Direncanakan';
import Tugas from '../File/Tugas';
import TambahTugas from '../File/TambahTugas';
import EditTugas from '../File/EditUpdateTugas';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Login" component={Login} screenOptions={{ headerShown: false }} />
        <Drawer.Screen name="Daftar" component={Daftar} screenOptions={{ headerShown: false }} />
        <Drawer.Screen name="Kegiatanku" component={Kegiatanku} />
        <Drawer.Screen name="Direncanakan" component={Direncanakan} />
        <Drawer.Screen name="Tugas" component={Tugas} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
