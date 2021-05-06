import React, { FC } from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";

const Loading: FC = ({ }) => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator />
        </View>
    )
}

const styles = StyleSheet.create({
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Loading