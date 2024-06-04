import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './src/splash/Welcome';
import FirstComponenet from './src/splash/FirstComponenet';
import Signup from './src/login/Signup';
import CreateAccount from './src/login/CreateAccount';
import OtpVerificationSign from './src/login/OtpVerificationSignup';
import OtpVerificationCreate from './src/login/OtpVerificationCreate';
import AddImage from './src/login/AddImage'; // Import AddImage
import Bio from './src/login/Bio';
import Tags from './src/login/Tags';
import Follow from './src/login/Follow';
import AddDetails from './src/login/AddDetails';
import ButtomTabNavigation from './navigation/BottomTabNavigator'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FirstComponent">
        <Stack.Screen 
          name="Home" 
          component={FirstComponenet} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Signup" 
          component={Signup} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="CreateAccount" 
          component={CreateAccount} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="OtpVerificationSign"
          component={OtpVerificationSign}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="OtpVerificationCreate"
          component={OtpVerificationCreate}
          options={{ headerShown: false }} 
        />
        <Stack.Screen // Add AddImage screen
          name="AddImage"
          component={AddImage}
          options={{ headerShown: false }} 
        />
        <Stack.Screen // Add AddImage screen
          name="Bio"
          component={Bio}
          options={{ headerShown: false }} 
        />
        <Stack.Screen // Add AddImage screen
          name="Tags"
          component={Tags}
          options={{ headerShown: false }} 
        />
        <Stack.Screen // Add AddImage screen
          name="Follow"
          component={Follow}
          options={{ headerShown: false }} 
        />
        <Stack.Screen // Add AddImage screen
          name="AddDetails"
          component={AddDetails}
          options={{ headerShown: false }} 
        />
         <Stack.Screen // Add AddImage screen
          name="Main"
          component={ButtomTabNavigation}
          options={{ headerShown: false }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
