import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  // Dummy data for posts
  const posts = [
    {
      id: 1,
      username: 'user1',
      image: require('../../assets/post1.jpg'),
      caption: 'IIT Bomby Dorne event, Location: gymkahan',
      likes: 10,
      comments: 5,
    },
    {
      id: 2,
      username: 'user2',
      image: require('../../assets/post2.jpg'),
      caption: 'Dance Competition, Location: OLD SAC IIT Bombay',
      likes: 15,
      comments: 3,
    },
    // Add more posts here
    {
      id: 3,
      username: 'user3',
      image: require('../../assets/post3.jpg'),
      caption: 'I want to sell my bicycle',
      likes: 20,
      comments: 7,
    },
    {
      id: 4,
      username: 'user4',
      image: require('../../assets/post4.jpg'),
      caption: 'Today is the last day to submit the intern form',
      likes: 8,
      comments: 2,
    },
    {
      id: 5,
      username: 'user5',
      image: require('../../assets/post5.jpg'),
      caption: 'Prom night in college',
      likes: 12,
      comments: 4,
    },
    {
      id: 6,
      username: 'user6',
      image: require('../../assets/post6.png'),
      caption: 'Hostel 2 celebration day',
      likes: 18,
      comments: 6,
    },
    {
      id: 7,
      username: 'user7',
      image: require('../../assets/post7.jpg'),
      caption: 'Hostel 6 won the Cultural Cup',
      likes: 25,
      comments: 10,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {posts.map(post => (
          <View key={post.id} style={styles.postContainer}>
            {/* Post Header */}
            <View style={styles.postHeader}>
              <Text style={styles.username}>{post.username}</Text>
            </View>

            {/* Post Image */}
            <Image source={post.image} style={styles.postImage} />

            {/* Post Footer */}
            <View style={styles.postFooter}>
              <TouchableOpacity style={styles.iconContainer}>
                <Icon name="heart" size={24} color="red" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainer}>
                <Icon name="comment" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconContainer}>
                <Icon name="share" size={24} color="black" />
              </TouchableOpacity>
            </View>

            {/* Post Details */}
            <View style={styles.postDetails}>
              <Text style={styles.caption}>{post.caption}</Text>
              <View style={styles.interaction}>
                <Text>{post.likes} likes</Text>
                <Text>{post.comments} comments</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postContainer: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  username: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  postImage: {
    width: '100%',
    height: 300,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postDetails: {
    padding: 10,
  },
  caption: {
    marginBottom: 5,
  },
  interaction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
