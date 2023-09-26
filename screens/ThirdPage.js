// Example: Switch from One Screen to another using React Navigation //
// https://aboutreact.com/react-native-stack-navigation //
import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';

// const ThirdPage = ({ route, navigation }) => {
const ThirdPage = ({ navigation }) => {
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
            Brill Fitness - My Workouts
          </Text>
        </View>
        <View style={styles.buttonStyle}>
        <Button
            onPress={() => navigation.navigate('SecondPage')}
            title="Create Workout"
            color='black'
          />
        <Button
            title="My Workouts"
            onPress={() => navigation.navigate('ThirdPage')}
            color='black'
          />
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: .06,
    backgroundColor: "#FFCCCB",
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row', // Makes the buttons side by side
  }
})

export default ThirdPage;