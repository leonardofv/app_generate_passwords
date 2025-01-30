import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './pages/home';
import { Passwords } from './pages/passwords';

import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (

        <Tab.Navigator>
            <Tab.Screen 
                name="home" 
                component={Home} 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({color, focused, size}) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name="passwords" 
                component={Passwords} 
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon: ({color, focused, size}) => (
                        <Ionicons name={focused ? 'lock-closed' : 'lock-closed-outline'} color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
        
    )
}