import 'react-native-gesture-handler';
import Home from './src/Home';
import NoteAdd from './src/NoteAdd';
import Header from './src/Header';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen component={Home} name='Home'
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#2E92A9',            
              height: 80,
          
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,

            },
          }}
        />
        <Stack.Screen component={NoteAdd} name='NoteAdd'
          options={{
            title: 'Add Note',
            headerStyle: {
              backgroundColor: '#2E92A9',
              height: 80,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
              
            },
            
          }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

