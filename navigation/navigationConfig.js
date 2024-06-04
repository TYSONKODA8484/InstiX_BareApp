navigationConfig.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstComponenet from '../src/splash/FirstComponenet';
import Welcome from '../src/splash/Welcome';
import Signup from '../src/login/Signup';
import CreateAccount from '../src/login/CreateAccount';
import OtpVerificationSign from '../src/login/OtpVerificationSignup';
import OtpVerificationCreate from '../src/login/OtpVerificationCreate';
import AddImage from '../src/login/AddImage';
import Bio from '../src/login/Bio';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
i

const Stack = createNativeStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={FirstComponenet} options={{ headerShown: false }} />
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
      <Stack.Screen name="OtpVerificationSign" component={OtpVerificationSign} options={{ headerShown: false }} />
      <Stack.Screen name="OtpVerificationCreate" component={OtpVerificationCreate} options={{ headerShown: false }} />
      <Stack.Screen name="AddImage" component={AddImage} options={{ headerShown: false }} />
      <Stack.Screen name="Bio" component={Bio} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
