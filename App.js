import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, SafeAreaView, Button } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';


export default function App() {
// handlePress is a function that writes to the console when the text is pressed.
const handlePress = () => console.log("Text Pressed")
const imagePress = () => console.log("Lifting man image pressed")
const buttonPress = () => console.log("Button pressed")

  return (

    <WelcomeScreen />
    //<ViewImageScreen></ViewImageScreen>

    /*
    // SafeAreaView creates a buffer around the screen so that nothing gets cut off.
    // numberOfLines will truncate the text if it is too long for the specified number of lines.
    // When we use the require function react native packager will include this file in our bundle. Increases size of our app.
    // The image component is self-closing syntax.
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text numberOfLines={2} onPress={handlePress}>
        Brill 3.0 - A really really long text. Now I want to make this even longer and see what happens.
      </Text>
      
      <TouchableOpacity onPress = {imagePress}>
        <Image 
          style = {styles.liftingman} // Set the style of the lifting man image
          source = {require('./assets/liftingman.png')}
        />
      </TouchableOpacity>

      <Button 
        color = "red"
        title = "Click Me!"
        onPress = {() => Alert.alert('Title', 'you pressed the button', [{text: "Yes", onPress: () => console.log("Yes")}, {text: "No", onPress: () => console.log("No")}, {text: "Maybe", onPress: () => console.log("Maybe")}])}
      />

      <StatusBar style="auto" />
    </SafeAreaView>
    */
  );
}

const containerStyle = { backgroundColor: "orange"}

const styles = StyleSheet.create({ // styles is an object with a property called container which is an object itself.
  container: {
    flex: 1, // View is flexible.
    backgroundColor: '#5BBA66', // Background color is green.
    alignItems: 'center',
    justifyContent: 'center',
  },
  liftingman: { // This is style of the lifting man image.
    width: 100, 
    height: 100,
  }
});
