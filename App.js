import React, { Component } from 'react';
import { Button, Text, View, ScrollView, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LifeCycle from './LifeCycle';
import TapGestureTutorial from './TapGestureTutorial';

const Stack = createStackNavigator();

class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LifeCycle"
            component={LifeCycle}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="TapGestureTutorial" component={TapGestureTutorial} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default App;
