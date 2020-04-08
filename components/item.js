import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

const Item = props => {
    return (
    <View style={styles.listItem}>
        <Text>
            {props.content}
        </Text>
    </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginTop: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default Item; 