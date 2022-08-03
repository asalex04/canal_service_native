import React, {FC} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {setIsAuth} from "../store/reducers/UserSlice";


const NavBar: FC = () => {
    const {isAuth} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const logout = () => {
        dispatch(setIsAuth(false))
        // navigate('/')
    }
    return (
        <View style={styles.navbar}>
                <Image style={{width: 70, height: 63, marginLeft: 15}}
                       source={require('../img/logo.png')}/>
                {isAuth &&
                <TouchableOpacity onPress={() => logout()}>
                    <Image style={styles.logo_exit}
                           source={require('../img/exit.png')}
                    />
                </TouchableOpacity>
                }
        </View>
    );
};

const styles = StyleSheet.create({
    navbar: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: '#E4B062',
        height: 120,
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 30,
    },
    logo_exit: {
        marginRight: 15
    }
})
export default NavBar;
