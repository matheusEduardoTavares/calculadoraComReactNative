import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    top: {
        height: '20%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    space: {
        height: '80%',
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    title: {
        fontSize: 50,
        fontWeight: 'bold'
    },

    dark: {
        color: '#e1e1e1',
    },

    light: {
        color: 'black',
    },

    darkBackground: {
        backgroundColor: 'black'
    },

    lightBackground: {
        backgroundColor: '#e1e1e1'
    },

    darkInput: {
        color: 'white',
        borderColor: '#e1e1e1',
        borderWidth: 2,
        width: 120,
        padding: 10,
        margin: 5
    },

    lightInput: {
        color: 'black',
        borderColor: 'black',
        borderWidth: 2,
        width: 120,
        padding: 10,
        margin: 5
    },

    inline: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    picker: {
        height: 50,
        width: 160
    },

    lightPicker: {
        color: 'black',
        padding: 10,
        margin: 5
    },

    darkPicker: {
        color: 'white',
        backgroundColor: 'gray',
        padding: 10,
        margin: 5
    },
})

export default styles