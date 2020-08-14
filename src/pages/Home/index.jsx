import React, { useState } from 'react'
import { Text, View, CheckBox, TextInput, Picker, TouchableOpacity, Alert } from 'react-native'
import styles from './styles.js'
import { StatusBar } from 'expo-status-bar';

export default function Index() {
    const [theme, setTheme] = useState(false)
    const [valueOne, setValueOne] = useState('')
    const [valueTwo, setValueTwo] = useState('')
    const [result, setResult] = useState('')
    const [operation, setOperation] = useState('soma')

    const operate = {
        soma(a, b) {
            return Number(a) + Number(b)
        },

        subtracao(a, b){
            return Number(a) - Number(b)
        },

        divisao(a, b){
            if (Number(b) === 0) {
                Alert.alert('Não é possível dividir por 0')
                return 'Calcular'
            }
            return Number(a) / Number(b)
        },

        multiplicacao(a, b) {
            return Number(a) * Number(b)
        }
    }

    function handleCalculate() {
        if (isNaN(valueOne) || isNaN(valueTwo) || valueOne.length === 0 || valueTwo.length === 0) {
            Alert.alert('Por favor, digite apenas números')
            setResult('Resultado')
        }
        else {
            let res = operate[operation](valueOne, valueTwo)
            setResult(res)
        }
    }

    return (
        <>
            <View style={[styles.top, theme ? styles.darkBackground : styles.lightBackground]}>
                <Text style={theme ? styles.dark : styles.light}>Tema: Darkmode / Lightmode</Text>
                <CheckBox value={theme} onChange={() => setTheme(!theme)} />
            </View>
            <View style={[styles.space, theme ? styles.darkBackground : styles.lightBackground]}>
                <Text style={[styles.title, theme ? styles.dark : styles.light]}>Calculadora</Text>
                <View style={styles.inline}>
                <Text style={theme ? styles.dark : styles.light}>Operação: </Text>
                    <Picker
                        selectedValue={operation}
                        style={[styles.picker, theme ? styles.darkPicker : styles.lightPicker]}
                        onValueChange={(itemValue) => setOperation(itemValue)}
                    >
                        <Picker.Item label="Soma" value="soma" />
                        <Picker.Item label="Subtração" value="subtracao" />
                        <Picker.Item label="Multiplicação" value="multiplicacao" />
                        <Picker.Item label="Divisão" value="divisao" />
                    </Picker>
                </View>
                <View style={styles.inline}>
                    <TextInput style={theme ? styles.darkInput : styles.lightInput} placeholder={valueOne.length === 0 ? 'Valor 1' : valueOne} placeholderTextColor={theme ? "white" : "black"} onChangeText={val => setValueOne(val)} />
                    <TextInput style={theme ? styles.darkInput : styles.lightInput} placeholder={valueTwo.length === 0 ? 'Valor 2' : valueTwo} placeholderTextColor={theme ? "white" : "black"} onChangeText={val => setValueTwo(val)} />
                </View>
                <TouchableOpacity title="Calcular" onPress={handleCalculate} style={[styles.button, theme ? styles.darkButton : styles.lightButton]}>
                    <Text style={styles.paragraph}>Calcular</Text>
                </TouchableOpacity>
                <View><Text style={[styles.subTitle, theme ? styles.dark : styles.light]}>{result}</Text></View>
            </View>
            <StatusBar style={theme ? 'light' : 'dark'} />
        </>
    )
}