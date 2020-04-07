import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{
        padding: 50
    }}>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <TextInput 
                placeholder='Add to list...'
                style={{
                    width: '80%',
                    borderColor: 'black',
                    borderWidth: 1,
                    padding: 10
                }}
            />
            <Button title='ADD' />
        </View>
        <View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
