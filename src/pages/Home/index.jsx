import React, { useState, createContext } from 'react'
import { Text, View, CheckBox } from 'react-native'
import styles from './styles.js'
import { StatusBar } from 'expo-status-bar';

export default function Index() {
    const [theme, setTheme] = useState(false)

    return (
        <>
            <View style={[styles.top, theme ? styles.darkBackground : styles.lightBackground]}>
                <Text style={theme ? styles.dark : styles.light}>Tema: Darkmode / Lightmode</Text>
                <CheckBox value={theme} onChange={() => setTheme(!theme)} />
            </View>
            <View style={[styles.space, theme ? styles.darkBackground : styles.lightBackground]}>
                <Text style={[styles.title, theme ? styles.dark : styles.light]}>Calculadora</Text>
                <Text style={theme ? styles.dark : styles.light}>Texto</Text>
            </View>
            <StatusBar style={theme ? 'light' : 'dark'} />
        </>
    )
}