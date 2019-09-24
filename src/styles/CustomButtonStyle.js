import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        height: 48,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonGray: {
        backgroundColor:"#212227",
        borderWidth:1,
        borderColor:"#212227",
    },
    buttonLabel:{
        fontSize: 16,
        color: "#ffffff",
        textTransform:'uppercase'
     }
});

export default styles;