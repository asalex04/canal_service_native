import React from 'react';
import {Item} from "../../types";
import {Text, View} from "react-native";
import {styles} from "./styles";


const Post = (props: { post: Item }) => {
    const {title, username, company} = props.post
    return (
        <View style={styles.post}>
            <Text style={styles.text}>
                Author: {username}
            </Text>
            <Text style={styles.text}>
                Company: {company.name}
            </Text>
            <Text style={styles.text}>
                Title: {title}
            </Text>
        </View>
    );
};

export default Post;
