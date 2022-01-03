import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function CounterButton({btnText,onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text>{btnText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        height:45,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        width:100
    }
})
