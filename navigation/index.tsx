import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import LoginScreen from '../screens/LoginScreen';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { AuthProvider } from '../store/auth';
import { useAuth} from "../store/auth";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <TestNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

// Define multiple groups of screens in objects
const commonScreens = {
  NotFound: NotFoundScreen,
};

const authScreens = {
  Login: LoginScreen
};

const secureScreens = {
  Root: BottomTabNavigator
};

//Using like https://reactnavigation.org/docs/nesting-navigators/
function TestNavigator() {
  const {signed, loading} = useAuth();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {Object.entries({
        // Use the screens normally
        // Use some screens conditionally based on some condition
        ...(signed ? secureScreens : authScreens),
        ...commonScreens
      }).map(([name, component]) => (
        <Stack.Screen name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
}