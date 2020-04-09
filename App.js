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
        setModalVisible(false);
    };
    const removeItem = itemId => {
        setToDoList(toDoList => {
            return toDoList.filter(item => {
                console.log('item.id, itemId: ', item.id, itemId);
                return item.id !== itemId;
            });
        });
    };
    const cancelItemInput = () => {
        setModalVisible(false);
    }

    return (
        <View style={styles.screen}>
            <View style={styles.banner}>
                <Text style={styles.text}>notes...</Text>
            </View>
            <View style={styles.button}>
                <Button 
                    color='#c192ff'
                    title="Add Something New..."
                    onPress={() => setModalVisible(true)}
                />
            </View>
            <InputContainer 
                newItem={newItem}
                visible={modalVisible}
                cancelItemInput={cancelItemInput}
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
        padding: 50,
        backgroundColor: '#1c1c1c',
        height: '100%'
    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 10,
        paddingTop: 20,
        borderBottomColor: '#d2d2d2',
        borderBottomWidth: 3,
        marginBottom: 20,
    },
    text: {
        fontSize: 40,
        color: '#d2d2d2'
    },
    button: {
        borderRadius: 20
    }
});
