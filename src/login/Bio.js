import { SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native'
import React from 'react'

const TextInputExample = ({ navigation }) => { // Receive navigation prop
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');

    const Bio = () => {
        return (
            <SafeAreaView>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Describe Yourself</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subheading}>What makes you special? Don’t think too hard, just have fun with it</Text>
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
                <View style={styles.buttonContainer}>
                    <Button
                        title="Next"
                        onPress={() => navigation.navigate('Tags')}
                    />
                </View>
            </SafeAreaView>
        )
    }

    return <Bio />;
}

const styles = StyleSheet.create({
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
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
})

export default TextInputExample;
