import React, { Fragment } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../styles/CustomButtonStyle";

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        {this.props.disabled ? (
          <View style={[styles.buttonGray, styles.button]}>
            <Text style={styles.buttonLabel}>{this.props.label}</Text>
          </View>
        ) : (
          <TouchableOpacity
            style={[
              this.props.orange
                ? styles.buttonOrange
                : this.props.pink
                ? styles.buttonPink
                : styles.buttonGray,
              styles.button
            ]}
            onPress={this.props.onPress}
          >
            <Text style={styles.buttonLabel}>{this.props.label}</Text>
          </TouchableOpacity>
        )}
      </Fragment>
    );
  }
}
export default CustomButton;
