import React , { FC } from "react";
import { View , Text } from "react-native";
import { Card } from 'galio-framework';
interface PostProp{
    post : any
}

const Post : FC<PostProp> = ({post}) => {
    return (
        <View>
            <Text>{post.title}</Text>
        </View>
    )
}

export default Post