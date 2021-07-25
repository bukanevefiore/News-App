import { StyleSheet, Dimensions } from "react-native";


const height=Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
    },
    image:{
        height: height/4,
        width: width,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        
    },
    description: {
        marginTop: 3,
    },
    inner_container: {
        padding: 5,
    },
    author: {
        textAlign: 'right',
        fontWeight: 'bold',
        color: 'gray',
        fontStyle: 'italic'
    }
})