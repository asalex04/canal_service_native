import React, {FC} from 'react';
import {View, Image, TouchableOpacity} from 'react-native'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setIsAuth} from "../../store/reducers/UserSlice";
import {styles} from "./styles";


const NavBar: FC = () => {
    const {isAuth} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const logout = () => {
        dispatch(setIsAuth(false))
    }
    return (
        <View style={styles.navbar}>
                <Image style={styles.logo}
                       source={require('../../img/logo.png')}/>
                {isAuth &&
                <TouchableOpacity onPress={() => logout()}>
                    <Image style={styles.logo_exit}
                           source={require('../../img/exit.png')}
                    />
                </TouchableOpacity>
                }
        </View>
    );
};


export default NavBar;
