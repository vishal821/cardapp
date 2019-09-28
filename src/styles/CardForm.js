import { StyleSheet } from 'react-native';
import gstyle from "../styles/GlobalStyle";

const styles = StyleSheet.create({
    iconStyle: {
        color: "#FFB900",
        fontSize: gstyle.font_family_gr_16.fontSize
    },
    fieldSpacing: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },
    heading: {
        color: "#rgba(65,65,65,0.65)",
        fontWeight: "bold",
        fontSize: gstyle.font_family_gr_18.fontSize,
        textAlign: "center",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8
    },
})

export default styles;