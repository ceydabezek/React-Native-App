import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './screens/SearchScreen';
import ResultsShowScreen from './screens/ResultsShowScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { 
        backgroundColor: '#ff6f3c',},
        headerTintColor: 'white',
        headerTitleStyle: { fontWeight: 'bold',},
        headerTitle: 'Feastify (İstanbul)'}}>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ResultShow" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//şş