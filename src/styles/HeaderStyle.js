import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      tabLabel: {
        color: "#ffffff",
        textTransform:'capitalize', 
        fontSize: 16, 
        textAlign:'center' 
      },
      tabStyle : { 
          backgroundColor: "#333333"
        },
        indicator: {
            borderBottomColor: "#f78027",
            borderBottomWidth :3
        },
        buttonContainer : {
            paddingLeft: 15,
            paddingRight: 15
        },
        cardContainer : {
            padding: 8
        },
        fieldSpacing : {
            marginTop: '0%'
        }
});

export default styles;