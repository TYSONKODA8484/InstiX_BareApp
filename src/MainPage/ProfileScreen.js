import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <Image
              style={styles.profileImage}
              source={{ uri: 'https://your-profile-image-url.com' }}
            />
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>John Doe</Text>
              <Text style={styles.profileBio}>Bio: Passionate developer and tech enthusiast.</Text>
              <View style={styles.stats}>
                <View style={styles.statItem}>
                  <Text style={styles.statCount}>120</Text>
                  <Text style={styles.statLabel}>Posts</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statCount}>250</Text>
                  <Text style={styles.statLabel}>Followers</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statCount}>180</Text>
                  <Text style={styles.statLabel}>Following</Text>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={styles.tabs}>
            <TouchableOpacity style={styles.tab}>
              <Icon name="grid-outline" size={30} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Icon name="image-outline" size={30} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Icon name="bookmark-outline" size={30} color="gray" />
            </TouchableOpacity>
          </View>
          <View style={styles.posts}>
            {/* Example Post */}
            <View style={styles.post}>
              <Image
                style={styles.postImage}
                source={{ uri: 'https://your-post-image-url.com' }}
              />
            </View>
            {/* Add more posts here */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileInfo: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileDetails: {
    marginLeft: 20,
    flex: 1,
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileBio: {
    fontSize: 16,
    color: '#777',
    marginVertical: 5,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statCount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#777',
  },
  editProfileButton: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    alignItems: 'center',
  },
  editProfileText: {
    fontSize: 16,
    color: '#007AFF',
  },
  content: {
    padding: 10,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    alignItems: 'center',
  },
  posts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  post: {
    width: '48%',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 150,
  },
});

export default ProfileScreen;
