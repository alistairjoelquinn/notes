import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Item from './components/item';
import InputContainer from './components/input-container';

export default function App() {
    const [toDoList, setToDoList] = useState([]);
    const newItem = item => {
        console.log('item: ', item);
        setToDoList(toDoList => [ { key: Math.random().toString(), value: item }, ...toDoList ]);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.banner}>
                <Text>Alistair's To-Do List</Text>
            </View>
            <InputContainer 
                newItem={newItem}
            />
            <FlatList 
                data={toDoList} 
                renderItem={toDo => 
                    <Item 
                        content={toDo.item.value}
                        onDelete={() => console.log('working!!!')}
                    />
                }
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
    }
});
