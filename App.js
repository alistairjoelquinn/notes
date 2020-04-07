import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
    const [item, setItem] = useState('');
    const [toDoList, setToDoList] = useState([]);
    const itemHandler = inputValue => {
        setItem(inputValue);
    };
    const newItem = () => {
        console.log('item: ', item);
        setToDoList(toDoList => [ ...toDoList, item ]);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.banner}>
                <Text>Alistair's To-Do List</Text>
            </View>
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
            <ScrollView>
                {toDoList.map(toDo => 
                    <View key={toDo} style={styles.listItem}>
                        <Text>
                            {toDo}
                        </Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 10,
        paddingTop: 20,
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        marginBottom: 20,
        fontSize: 30
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
    },
    listItem: {
        padding: 10,
        marginTop: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});
