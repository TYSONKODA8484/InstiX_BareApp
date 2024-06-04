import { SafeAreaView, StyleSheet, Text, TextInput, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

// Mock database of tags
const tagsData = [
    "Clubs", "Football", "Basketball", "Music", "Art", "Technology", 
    "Gaming", "Cooking", "Travel", "Photography", "Reading", 
    "Writing", "Fitness", "Movies", "Theater", "Science"
];

const TextInputExample = ({ navigation }) => {
    const [inputText, setInputText] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    const toggleTag = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else if (selectedTags.length < 4) {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const isSelected = (tag) => selectedTags.includes(tag);

    const handleChangeText = (text) => {
        setInputText(text);
    };

    const Bio = () => {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Pick your Interest</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subheading}>You will find geeks and peeks of same interest and choice</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        value={inputText}
                        onChangeText={handleChangeText}
                        placeholder="Enter some text here"
                    />
                </View>
                <ScrollView contentContainerStyle={styles.tagsContainer}>
                    {tagsData.map((tag, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.tag, isSelected(tag) && styles.selectedTag]}
                            onPress={() => toggleTag(tag)}
                        >
                            <Text style={styles.tagText}>{tag}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Next"
                        onPress={() => navigation.navigate('Follow')}
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
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    tag: {
        backgroundColor: '#eee',
        padding: 10,
        margin: 5,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    selectedTag: {
        backgroundColor: '#007AFF',
    },
    tagText: {
        color: 'black',
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
});

export default TextInputExample;
