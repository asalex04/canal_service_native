import React from "react";
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {store} from './app/store/store'
import {Provider} from "react-redux"
import NavBar from "./app/components/NavBar";
import Login from "./app/screens/Login/Login";

export default function App() {
    return (
        <Provider store={store}>
            <NavBar />
            <View style={styles.container}>
                <Login />
                <StatusBar style="auto"/>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
