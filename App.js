import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import uuid from 'react-uuid';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './src/styles/main';
import Header from './src/components/Header';
import Tasks from './src/components/Tasks';
import Form from './src/components/Form';

const Tab = createBottomTabNavigator();

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description: "Walk the cat",
      isDone: true
    },
    {
      id: uuid(),
      description: "Polish the car",
      isDone: false
    },
    {
      id: uuid(),
      description: "Finish the study",
      isDone: false
    },
    {
      id: uuid(),
      description: "Buy the milk",
      isDone: true
    }
  ]);
    
  const handleAddTask = (description, isDone) => {
    setTasks([...tasks, { id: uuid(), description, isDone: isDone }]);
  }

  const handleStatusChange = (id) => {
    const changedTasks = tasks.map(task => {
      task.isDone = task.id === id ? !task.isDone : task.isDone;
      return task;
    });
    setTasks(changedTasks);
  }

  const handleTaskRemoval = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const getPendingTaskCount = () => tasks.filter(task => !task.isDone).length;

  return (
    <SafeAreaProvider>
    <SafeAreaView>
      <View style={styles.container}>
        <NavigationContainer>
          
          <Header/>

          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name='List' 
              options={{ tabBarBadge: getPendingTaskCount(), tabBarIcon: ({color})=> (<FontAwesome5 name="list" size={15} color={color}/>) }}>
                { props => (<Tasks {...props} tasks={tasks} onStatusChange={handleStatusChange} onTaskRemoval={handleTaskRemoval}/>) }
            </Tab.Screen>
            <Tab.Screen name='Add'
              options={{ tabBarIcon: ({color})=> (<FontAwesome5 name="plus-square" size={15} color={color}/>) }}>
                { props => (<Form {...props} onAddTask={handleAddTask}/>) }
            </Tab.Screen>
          </Tab.Navigator>    
      
        </NavigationContainer>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

