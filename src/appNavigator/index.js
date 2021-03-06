import * as React from 'react';
import { View, Text } from 'react-native';
import type { Node } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainButton from './navigationButtons/mainButton';
import LogIn from '../screens/LogIn';
import PDFScreen from '../screens/PDFScreen';

import animationConfig from './navigationAnimateConfig';
import screensNames from './screensNames';

const RootStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const appNavigator = ({ signIn }) : Node => (
  <NavigationContainer>
    {signIn ? (
      <Tab.Navigator
        tabBarOptions={{
          style: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: 'absolute',
            height: 80,
          },
        }}
      >
        <Tab.Screen
          name={screensNames.TEST}
          component={Test}
          options={{
            tabBarLabel: ({ focused }) => focused ? <Text>Test</Text> : null,
            tabBarIcon: ({ focused }) => (
              <MainButton focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name={screensNames.TEST2}
          component={Test2}
          options={{
            tabBarLabel: ({ focused }) => focused ? <Text>Test2</Text> : null,
            tabBarIcon: ({ focused }) => (
              <MainButton focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name={screensNames.TEST3}
          component={Test3}
          options={{
            tabBarLabel: ({ focused }) => focused ? <Text>Test3</Text> : null,
            tabBarIcon: ({ focused }) => (
              <MainButton focused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    ) : (
      <RootStack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'vertical',
          headerShown: false,
          transitionSpec: {
            open: animationConfig,
            close: animationConfig,
          },
        }}
      >
        <RootStack.Screen name={screensNames.LOGIN} component={LogIn} />
        <RootStack.Screen name={screensNames.PDF} component={PDFScreen} />
      </RootStack.Navigator>
    )}
  </NavigationContainer>
);

const Test = () => (
  <View style={{ flex: 1, backgroundColor: 'red' }} />
);

const Test2 = () => (
  <View style={{ flex: 1, backgroundColor: 'green' }} />
);

const Test3 = () => (
  <View style={{ flex: 1, backgroundColor: 'yellow' }} />
);

function mapStateToProps(state: any) {
  const { authReducer: { logIn } } = state;
  return {
    signIn: logIn,
  };
}
export default connect(mapStateToProps, null)(appNavigator);
