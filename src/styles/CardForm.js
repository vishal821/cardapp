import { StyleSheet } from 'react-native';
import gstyle from "../styles/GlobalStyle";

const styles = StyleSheet.create({
    gridView: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    heading: {
        color: "#rgba(65,65,65,0.65)",
        fontWeight: "bold",
        fontSize: gstyle.font_family_gr_18.fontSize,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 8,
        paddingRight: 8
    },
    termsheading: {
        color: "#rgba(65,65,65,0.65)",
        fontSize: gstyle.font_family_gr_16.fontSize,
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 8,
        paddingRight: 8
    },
    termsdesc: {
        color: "#rgba(65,65,65,0.65)",
        fontSize: gstyle.font_family_gr_14.fontSize,
        textTransform: "capitalize",
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 8,
        paddingRight: 8
    },
    buttonView: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 40
    }
})

export default styles;