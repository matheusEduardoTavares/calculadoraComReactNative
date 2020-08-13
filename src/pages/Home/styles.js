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

    subTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 40
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
        color: 'black',
        backgroundColor: 'white',
        padding: 10,
        margin: 5
    },

    button: {
        width: 250,
        marginTop: 30,
        height: 30,
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    lightButton: {
        color: 'black',
        backgroundColor: '#e1e1e1',
        borderWidth: 2,
        borderColor: 'black'
    },

    darkButton: {
        color: 'black',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'gray'
    },

    paragraph: {
        fontSize: 20
    }
})

export default styles