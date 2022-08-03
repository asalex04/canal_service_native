import React from "react";
import {LogBox} from 'react-native';
import {store} from './app/store/store'
import {Provider} from "react-redux"
import NavBar from "./app/components/NavBar/NavBar";
import Navigation from "./app/navigation/Navigation";

export default function App() {
    return (
        <Provider store={store}>
            <NavBar />
            <Navigation />
        </Provider>
    );
}

LogBox.ignoreAllLogs()
