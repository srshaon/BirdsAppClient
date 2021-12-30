import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavigator from './src/Components/Navigation/BottomNavigator';
import StackNavigator from './src/Components/Navigation/StackNavigator';





export default function App() {
  return (
    <View>

      <StatusBar backgroundColor='white' />
      <View style={styles.main} >

        <NavigationContainer>

          <StackNavigator />

        </NavigationContainer>
      </View>
    </View>
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
