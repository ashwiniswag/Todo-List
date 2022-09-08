import React from "react";
import { Image, StyleSheet, View } from "react-native";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../../image/to-do-list.png')}
            />
        </View>
    );
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '90%',
        height: '50%',
        alignItems: 'stretch',
        justifyContent: 'center'
    }
})