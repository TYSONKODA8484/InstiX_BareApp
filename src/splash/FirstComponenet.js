import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const App = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>InstiX</Text>
      <Button 
        title="Get Started"
        onPress={() => 
          navigation.navigate('Welcome', {name: 'Jane'})
        }/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
