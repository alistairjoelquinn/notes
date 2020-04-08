import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 

export default function Item({ content }) {
    return (
    <View style={styles.listItem}>
        <Text>
            {content}
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