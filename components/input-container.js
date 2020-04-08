import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native'; 

export default function InputContainer({ newItem }) {
    const [item, setItem] = useState('');
    const itemHandler = inputValue => {
        setItem(inputValue);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder='Add to list...'
                style={styles.inputText}
                onChangeText={itemHandler}
                value={item}
            />
            <Button 
                title='ADD' 
                onPress={() => newItem(item)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
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
