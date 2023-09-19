import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style = {styles.background}
            //source = {require('../assets/splash.png')}
        >
            <View style = {styles.logoContainer}>
                <Image style = {styles.logo} source = {require('../assets/liftingman.png')}></Image>
                <Text>
                    Brill - Track your workouts effortlessly.
                </Text>
            </View>
            < View style = {styles.loginButton}></View>
            < View style = {styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 90,
        backgroundColor: "dodgerblue",
    },
    registerButton: {
        width: '100%',
        height: 90,
        backgroundColor: "blue",
    },
    logo: {
        width: 125,
        height: 125,
    },
    logoContainer: {
        position: 'absolute',
        top: 150,
        alignItems: "center",
    },
})

export default WelcomeScreen;