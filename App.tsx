import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Auth Screens
import Onboarding from './src/auth/Onboarding';
import Login from './src/auth/Login';
import SignUp from './src/auth/SignUp';
// App Screens
import Home from './src/home/Home';
import Brew from './src/brew/Brew';
import BrewDetails from './src/brew/BrewDetails';
import Account from './src/account/Account';

const MainStack = createStackNavigator();

const isSignedIn = true;

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none">
        {isSignedIn ? (
          <>
            <MainStack.Screen name="home" component={Home} />
            <MainStack.Screen name="brew" component={Brew} />
            <MainStack.Screen name="brew-details" component={BrewDetails} />
            <MainStack.Screen name="account" component={Account} />
          </>
        ) : (
          <>
            <MainStack.Screen name="onboarding" component={Onboarding} />
            <MainStack.Screen name="login" component={Login} />
            <MainStack.Screen name="sign-up" component={SignUp} />
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
