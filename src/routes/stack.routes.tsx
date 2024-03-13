import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import Calendario from '../screens/Calendario';


const Stack = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen 
            name="home" 
            component={Profile}
            />
            
            <Stack.Screen 
            name="calendario" 
            component={Calendario}
            />
       
                </Stack.Navigator>

                
    )
}


