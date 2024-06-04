// CommunityPage.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Dummy data for messages
const dummyMessages = [
  { id: 1, text: "Just realized why they call it IPL - It's Probably Late! Waiting for my team's comeback like waiting for my code to compile on a Monday morning! 😂 #IPL #AppDevStruggles", reactions: { like: 5, love: 2 }, comments: [{ id: 1, text: 'Nice!' }] },
  { id: 2, text: "Breaking news: IPL team hires software developer to fix their 'bugs' on the field. Rumor has it they're adding a 'run-time exception' feature to their next match! 🏏💻 #IPL #CricketCode", reactions: { like: 3, angry: 1 }, comments: [] },
  // Add more dummy messages here
];

const CommunityPage = () => {
  const [activeTab, setActiveTab] = useState('Quora'); // State for active tab
  const [messages, setMessages] = useState(dummyMessages); // State for messages

  // Function to render individual message item
  const renderMessageItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Text>{item.text}</Text>
      {/* Render reactions */}
      <View style={styles.reactionsContainer}>
        {Object.entries(item.reactions).map(([reaction, count]) => (
          <Text key={reaction}>{`${reaction}: ${count}`}</Text>
        ))}
      </View>
      {/* Render comments */}
      <FlatList
        data={item.comments}
        renderItem={({ item }) => <Text style={styles.comment}>{item.text}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Tab navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Quora' && styles.activeTab]}
          onPress={() => setActiveTab('Quora')}
        >
          <Text>Quora</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Confession' && styles.activeTab]}
          onPress={() => setActiveTab('Confession')}
        >
          <Text>Confession</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'CustomName' && styles.activeTab]}
          onPress={() => setActiveTab('CustomName')}
        >
          <Text>CustomName</Text>
        </TouchableOpacity>
      </View>
      
      {/* Messages */}
      <FlatList
        data={messages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
  activeTab: {
    backgroundColor: 'lightgray',
  },
  messageContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
  },
  reactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  comment: {
    marginLeft: 10,
    marginTop: 5,
    fontStyle: 'italic',
    color: 'gray',
  },
});

export default CommunityPage;
