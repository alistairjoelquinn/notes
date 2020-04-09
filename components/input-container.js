import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'; 

export default function InputContainer({ newItem, visible }) {
    const [item, setItem] = useState('');
    const itemHandler = inputValue => {
        setItem(inputValue);
    };
    const buttonTouch = () => {
        newItem(item);
        setItem('');
    }

    return (
        <Modal 
            visible={visible}
            animationType="slide"
        >
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder='Add to list...'
                    style={styles.inputText}
                    onChangeText={itemHandler}
                    value={item}
                />
                <Button 
                    title="CANCEL"
                    color="red"
                />
                <Button 
                    title='ADD' 
                    onPress={buttonTouch}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputText: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    }
});
