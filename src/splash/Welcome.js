// src/splash/Welcome.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions, Button,Image,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const numPages = 3;

  const handlePageChange = (event) => {
    const pageWidth = Dimensions.get('window').width;
    const currentPage = Math.round(event.nativeEvent.contentOffset.x / pageWidth);
    setCurrentPage(currentPage);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handlePageChange}
        scrollEventThrottle={16}
      >
        <View style={styles.page}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.textType}>We're glad that you are here</Text>
          <Image source={require('../../assets/welcome.png')} style={styles.image} />
        </View>
        <View style={styles.page}>
          <Image source={require('../../assets/create.png')} style={styles.image} />
          <Text style={styles.heading}>Discover Instizens in a whole new way</Text>
          <Text style={styles.subHead}>Join A Community</Text>
        </View>
        <View style={styles.page}>
        <Image source={require('../../assets/B1.png')} style={styles.image} />
          <Text style={styles.heading}>Discover Instizians in a whole new way</Text>
          <Text style={styles.subHead}>Connect and Navigate</Text>
          <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CreateAccount')}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
        </View>
      </ScrollView>
      <View style={styles.paginationContainer}>
        {[...Array(numPages)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentPage && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    color: 'black',
    fontSize: 64,
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    textAlign: 'center',
  },
  textType: {
    color: '#757575',
    fontSize: 24,
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    textAlign: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: '#333',
  },
  heading: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Inter-Regular',
    fontWeight: '700',
    textAlign: 'center',
    flexWrap: 'wrap',
    width: 324,
    height:102
  },
  subHead: {
    color: '#757575',
    fontSize: 24,
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    gap: 30
  },
  button: {
    width: 160,
    height: 60,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF', // Default white text color
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 24,
  },
});

export default Welcome;
