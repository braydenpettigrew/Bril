// Example: Switch from One Screen to another using React Navigation //
// https://aboutreact.com/react-native-stack-navigation //

import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';

const FirstPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Brill Fitness - Home
          </Text>
        </View>
        <View style={styles.buttonStyle}>
        <Button
            onPress={() => navigation.navigate('SecondPage')}
            title="Create Workout"
          />
        <Button
            title="My Workout"
            onPress={() => navigation.navigate('ThirdPage')}
          />
        </View>
        
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
    buttonStyle: {
        flex: .1,
        backgroundColor: "dodgerblue",
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row', // Makes the buttons side by side
    }
})

export default FirstPage;