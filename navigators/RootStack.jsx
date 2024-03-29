import React from 'react';

import { Colors } from '../components/styles';
const{primary, tertiary,} = Colors;

//React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
import GameList from '../screens/GameList';
import Memo from '../screens/Memo';
import TicTac from '../screens/TicTac';
import Flappy from '../screens/Flappy';
import Number from '../screens/Number';

const Stack = createNativeStackNavigator();

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyled: {
                        backgroundColor: 'transparent',
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }
                }}
                initialRouteName='Login'
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="GameList" component={GameList} />
                <Stack.Screen name="Memo" component={Memo} />
                <Stack.Screen name="TicTac" component={TicTac} />
                <Stack.Screen name="Flappy" component={Flappy} />
                <Stack.Screen name="Number" component={Number} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;