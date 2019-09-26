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
        textAlign: "center",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8
    },
    termsheading: {
        color: "#rgba(65,65,65,0.65)",
        fontWeight: "bold",
        fontSize: gstyle.font_family_gr_16.fontSize,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8
    },
    termsdesc: {
        color: "#rgba(65,65,65,0.65)",
        fontSize: gstyle.font_family_gr_14.fontSize,
        textTransform: "capitalize",
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 8,
        paddingRight: 8
    },
    buttonView: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 40
    },
    cardStyle: {
        marginTop: 10,
        marginBottom: 10
    },
    cardinsidestyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 8,
        paddingRight: 8,
        paddingBottom: 8,
        paddingLeft: 8,
    },
    fieldSpacing: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },
    iconStyle: {
        color: "#FFB900",
        fontSize: gstyle.font_family_gr_16.fontSize
    }
})

export default styles;