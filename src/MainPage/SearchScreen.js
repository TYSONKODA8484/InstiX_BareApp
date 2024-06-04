// src/MainPage/SearchScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const searchData = [
  { id: 1, name: 'InstiZ Connect', icon: 'globe-outline' },
  { id: 2, name: 'InstiZ Widget', icon: 'code-working-outline' },
  { id: 3, name: 'Insti Exchange', icon: 'swap-horizontal-outline' },
  { id: 4, name: 'Insti Shops & Canteen', icon: 'fast-food-outline' },
  { id: 5, name: 'Event Feed', icon: 'calendar-outline' },
  { id: 6, name: 'Insti Quora', icon: 'logo-quora' },
  { id: 7, name: 'Internship Blog', icon: 'newspaper-outline' },
  { id: 8, name: 'POR Holder', icon: 'person-circle-outline' },
  { id: 9, name: 'Hierarchy Tree', icon: 'git-network-outline' },
  { id: 10, name: 'Live Updates', icon: 'notifications-outline' },
  { id: 11, name: 'Alumni Community', icon: 'people-outline' },
];

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(searchData);

  const handleChangeText = (text) => {
    setSearchTerm(text);
    const filteredResults = searchData.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Icon name={item.icon} size={24} color="black" style={styles.icon} />
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchTerm}
        onChangeText={handleChangeText}
      />
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  list: {
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  icon: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 16,
  },
});

export default SearchScreen;
