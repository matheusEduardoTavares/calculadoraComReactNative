import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles.js'

export default function Index() {
    return (
        <View style={styles.space}>
            <Text style={styles.title}>Calculadora</Text>
            <Text>Texto</Text>
        </View>
    )
}