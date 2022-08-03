import React, {FC} from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Login from '../screens/Login/Login'
import Posts from "../screens/Posts/Posts";
import {useAppSelector} from "../hooks/redux";

const Stack = createNativeStackNavigator()

const Navigation: FC = () => {
    const {isAuth} = useAppSelector(state => state.user)
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {isAuth ? (
                    <>
                        <Stack.Screen name='posts' component={Posts} />
                    </>
                ) : (
                    <Stack.Screen name='login' component={Login} />)}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation
