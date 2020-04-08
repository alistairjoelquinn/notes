import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native'; 

const InputContainer = ({ itemHandler, newItem, item }) => {
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
                onPress={newItem}
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


export default InputContainer;