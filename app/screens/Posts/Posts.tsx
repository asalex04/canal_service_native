import React, {useEffect, useState} from 'react';
import {fetchPosts, fetchUsers} from "../../api/postsApi";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getPosts, getUsers} from "../../store/reducers/PostSlice";
import Post from "../../components/Post/Post";
import {Item} from "../../types";
import {ActivityIndicator, ScrollView, View} from "react-native";
import {styles} from "./styles";

function randomInteger(min: number, max: number) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const Posts = () => {
    const {posts, users} = useAppSelector(state => state.posts)
    const [loading, setLoading] = useState(true)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const numberOfItems = randomInteger(5, 15)
        const fetchData = async () => {
            const posts = await fetchPosts(numberOfItems)
            await dispatch(getPosts(posts))
            const users = await fetchUsers(numberOfItems)
            await dispatch(getUsers(users))
        }
        fetchData().then(() => setLoading(false))
    }, [])


    if (loading) {
        return (
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#00ff00"/>
            </View>
        )
    }

    let itemArr: Item[] = []
    posts.map(post => {
            let item = {} as Item
            let user = users.find(el => el.id === post.userId) || users[0]
            item.id = post.id
            item.title = post.title
            item.username = user.name
            item.company = user.company
            itemArr.push(item)
        }
    )

    return (
        <ScrollView style={styles.scrollView}>
            <View>
                {itemArr.map(post => (
                    <Post key={post.id} post={post}/>
                ))}
            </View>
        </ScrollView>
    );
};


export default Posts;
