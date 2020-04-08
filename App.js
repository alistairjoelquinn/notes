import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Item from './components/item';
import InputContainer from './components/input-container';

export default function App() {
    const [toDoList, setToDoList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const newItem = item => {
        console.log('item: ', item);
        setToDoList(toDoList => [ 
            { id: Math.random().toString(), value: item }, 
            ...toDoList 
        ]);
    };
    const removeItem = itemId => {
        setToDoList(toDoList => {
            return toDoList.filter(item => {
                console.log('item.id, itemId: ', item.id, itemId);
                return item.id !== itemId;
            });
        });
    };

    return (
        <View style={styles.screen}>
            <View style={styles.banner}>
                <Text>Alistair's To-Do List</Text>
            </View>
            <Button 
                title="Add Something New..."
                onPress={() => setModalVisible(true)}
            />
            <InputContainer 
                newItem={newItem}
                visible={modalVisible}
            />
            <FlatList 
                data={toDoList} 
                renderItem={toDo => 
                    <Item 
                        onDelete={() => {
                            removeItem(toDo.item.id);
                        }}
                        content={toDo.item.value}
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
