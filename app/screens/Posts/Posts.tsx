import React, {useEffect, useState} from 'react';
import {fetchPhotos, fetchPosts, fetchUsers} from "../../api/postsApi";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getPhotos, getPosts, getUsers} from "../../store/reducers/PostSlice";
import Post from "../../components/Post";
import {Item} from "../../../types";
import {Image, Pressable, Text, TextInput, View} from "react-native";

function randomInteger(min: number, max: number) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const Posts = () => {
    const {posts, users, photos} = useAppSelector(state => state.posts)
    const [loading, setLoading] = useState(true)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const numberOfItems = randomInteger(3, 5)
        const fetchData = async () => {
            const posts = await fetchPosts(numberOfItems)
            await dispatch(getPosts(posts))
            const users = await fetchUsers(numberOfItems)
            await dispatch(getUsers(users))
            const photos = await fetchPhotos(numberOfItems)
            await dispatch(getPhotos(photos))
        }
        fetchData().then(() => setLoading(false))
    }, [])


    if (loading) {
        return <h1>Loading...</h1>
    }

    let itemArr: Item[] = []
    posts.map(post => {
            let item = {} as Item
            let user = users.find(el => el.id === post.userId) || users[0]
            let photo = photos.find(el => el.albumId === post.userId) || photos[0]
            item.id = post.id
            item.title = post.title
            item.body = post.body
            item.username = user.name
            item.company = user.company
            item.photoUrl = photo.thumbnailUrl
            itemArr.push(item)
        }
    )

    return (
        <View >
            <Text>Posts</Text>
            {/*{itemArr.map(post => (*/}
            {/*    <Post key={post.id} post={post}/>*/}
            {/*))}*/}
        </View>
    );
};


export default Posts;
