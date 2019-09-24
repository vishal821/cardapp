import { StyleSheet } from "react-native";
import gstyle from "../styles/GlobalStyle";

const styles = StyleSheet.create({
    elementLabel: {
        color: "#333333",
        fontSize: gstyle.font_family_gr_16.fontSize
    },
    elementTextInput: {
        color: "rgba(65,65,65,0.65)",
        fontSize: gstyle.font_family_gr_16.fontSize,
        paddingTop: 3,
        paddingBottom:0,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#212227"
    },
    greyLabel: {
         color: "#333333",
        fontSize: gstyle.font_family_gr_16.fontSize
    },
});

export default styles;
