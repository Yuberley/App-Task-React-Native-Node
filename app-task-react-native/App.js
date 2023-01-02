import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={({navigation}) => ({
            title: 'Tasks App',
            headerStyle: {backgroundColor: '#222f3e'},
            headerTitleStyle: { backgroundColor: '#222f3e', color: '#fff' },
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('TaskForm')}>
                <Text style={{color: '#fff', marginRight: 20}}>New</Text>
              </TouchableOpacity>
              )
            })
          }
        />
        <Stack.Screen 
          name="TaskForm" 
          component={TaskFormScreen}
          options={{
            title: 'New Task',
            headerStyle: {backgroundColor: '#222f3e'},
            headerTitleStyle: { backgroundColor: '#222f3e', color: '#fff' },
            headerTintColor: '#fff'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
