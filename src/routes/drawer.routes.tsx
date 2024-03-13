import   {createDrawerNavigator} from '@react-navigation/drawer';
import {Feather} from '@expo/vector-icons';

import TabRoutes from './tab.routes';
import StackRoutes from './stack.routes';
import Calendario from '../screens/Calendario';
import Profile from '../screens/Profile';
const drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <drawer.Navigator screenOptions={{ title:'Cresça comigo'}}>
            <drawer.Screen 
            name="home" 
            component={TabRoutes}
            options={{
                drawerIcon: ({color,size}) =>  <Feather name ="home" color={color} size={size}/>,
                drawerLabel: 'Início'
            }}
            />
            
             <drawer.Screen 
            name="Profile" 
            component={Profile}
            options={{
                drawerIcon: ({color,size}) =>  <Feather name ="user" color={color} size={size}/>,
                drawerLabel: 'Meu perfil'
            }}
            />
                 <drawer.Screen 
            name="Calendario" 
            component={Calendario}
            options={{
                drawerIcon: ({color,size}) =>  <Feather name ="user" color={color} size={size}/>,
                drawerLabel: 'Calendario'
            }}
            />



             </drawer.Navigator>
    )
}


