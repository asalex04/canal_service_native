import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setIsAuth} from "../../store/reducers/UserSlice";
import {Image, Pressable, Text, TextInput, View} from "react-native";
import {styles} from "./styles";

const Login = () => {
    // const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const {login: l, password: p} = useAppSelector(state => state.user.admin)
    const dispatch = useAppDispatch()

    const auth = async () => {
        if (login === l && password === p) {
            dispatch(setIsAuth(true))
            console.log('BOOM')
            // navigate('/posts')
        } else {
            alert('Wrong login or password')
        }
    }

    return (
        <View style={styles.auth}>
            <Pressable style={styles.title} onPress={() => auth()}>
                <Image source={require('../../img/auth.png')}/>
            </Pressable>
            <View>
                <Text style={styles.text}>login</Text>
                <TextInput
                    value={login}
                    style={styles.input}
                    onChangeText={setLogin}
                />
            </View>
            <View>
                <Text style={styles.text}>password</Text>
                <TextInput
                    value={password}
                    style={styles.input}
                    onChangeText={setPassword}
                />
            </View>
        </View>
    );
};


export default Login;
