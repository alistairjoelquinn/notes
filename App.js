import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder='Add to list...'
                style={styles.inputText}
            />
            <Button title='ADD' />
        </View>
        <View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    inputText: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
});
