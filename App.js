import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import Item from './components/item';

export default function App() {
    const [item, setItem] = useState('');
    const [toDoList, setToDoList] = useState([]);
    const itemHandler = inputValue => {
        setItem(inputValue);
    };
    const newItem = () => {
        console.log('item: ', item);
        setToDoList(toDoList => [ ...toDoList, { key: Math.random().toString(), value: item } ]);
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
            <FlatList 
                data={toDoList} 
                renderItem={toDo => <Item content={toDo.item.value}/>}
            />
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
    }
});
