import { StyleSheet } from 'react-native';
import global from "../styles/GlobalStyle";

const styles = StyleSheet.create({
    drawerStyle: {
        display: "flex",
        flexDirection: "row"
    },  
    listContainer:{
        flexDirection:'row',
        justifyContent: "flex-start",
        alignItems:'center',
        marginTop: 15,
        marginLeft: 15
      },
      listText: {
        color: "#rgba(65,65,65,0.65)",
        fontWeight: "bold",
        marginLeft: 5
      },
      iconSpacing: {
        color: "#FFB900",
        fontSize: global.font_family_gr_16.fontSize
      },    
      userprofile: {
        margin: 20,
        flexDirection:'row',
        justifyContent: "center",
        alignItems:'center',
      },
      userprofiletext: {
        flexDirection:'row',
        justifyContent: "center"
      },
      userprofilename: {
        fontSize: global.font_family_gr_18.fontSize,
        color: "#414141"
      },
      coloredborder: {
        display: "flex",
        flex:1,
        flexDirection:'row',
        marginTop: 20,
        marginBottom: 40
      }
});

export default styles;
