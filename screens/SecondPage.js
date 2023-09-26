// Example: Switch from One Screen to another using React Navigation //
// https://aboutreact.com/react-native-stack-navigation //
import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';


const SecondPage = ({ navigation }) => {
  const [message, setMessage] = React.useState('');
  
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
            Brill Fitness - Create a Workout
          </Text>
          
          <TextInput
            style={styles.input}
            value = {message}
            onChangeText={(text) => setMessage(text)}
            placeholder='Name workout...'
          />
          <Text style = {styles.text}>
            Message: {'\n'}{message}
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
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10
  }
})

export default SecondPage;
{/* <Button
  title="Go to Third Page"
  onPress={() => navigation.navigate('ThirdPage', { someParam: 'I came here from the second page!' })}
/> */}