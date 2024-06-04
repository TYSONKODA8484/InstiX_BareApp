import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const clubsData = [
    "Techfest", "Moodi", "Exofly", "H6 Cultural", "H2 Cultural", "Abhuday", "E-Cell", "AUV", 
    "Robocon", "Formula Student", "BAJA SAE", "SAE Aero Design", "Racing Car Club", 
    "Coding Club", "Literary Club", "Dance Club", "Music Club"
];

const TextInputExample = ({ navigation }) => {
    const [text, onChangeText] = useState('Useless Text');
    const [number, onChangeNumber] = useState('');
    const [followedClubs, setFollowedClubs] = useState([]);

    const toggleFollow = (club) => {
        if (followedClubs.includes(club)) {
            setFollowedClubs(followedClubs.filter(c => c !== club));
        } else {
            setFollowedClubs([...followedClubs, club]);
        }
    };

    const isFollowing = (club) => followedClubs.includes(club);

    const Bio = () => {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Don’t miss out</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subheading}>When you follow someone, you’ll see their updates in your log, no more insta stories</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="useless placeholder"
                        keyboardType="numeric"
                    />
                </View>
                <ScrollView contentContainerStyle={styles.clubsContainer}>
                    {clubsData.map((club, index) => (
                        <View key={index} style={styles.clubRow}>
                            <Text style={styles.clubName}>{club}</Text>
                            <TouchableOpacity
                                style={isFollowing(club) ? styles.followingButton : styles.followButton}
                                onPress={() => toggleFollow(club)}
                            >
                                <Text style={styles.buttonText}>{isFollowing(club) ? "Following" : "Follow"}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Next"
                        onPress={() => navigation.navigate('AddDetails')}
                    />
                </View>
            </SafeAreaView>
        );
    };

    return <Bio />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    headingContainer: {
        marginTop: 50,
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textContainer: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    subheading: {
        textAlign: 'center',
        fontSize: 16,
    },
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
    },
    clubsContainer: {
        marginVertical: 20,
    },
    clubRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    clubName: {
        fontSize: 18,
    },
    followButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
    },
    followingButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});

export default TextInputExample;
