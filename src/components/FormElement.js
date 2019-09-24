import React, { Component, Fragment } from 'react';
import { TextInput, Text, View, Picker } from "react-native";
import styles from "../styles/FormElementStyle";

class FormTextInput extends Component {
  
 render() {
    return (
      <Fragment>
        <Text style={styles.elementLabel}>{this.props.label}</Text>
        <TextInput style={styles.elementTextInput} {...this.props} />
      </Fragment>
    );
  }
}
class CustomDropdown extends Component {
   constructor(props){
     super(props);
   }
   render() {
     return(
       <Picker
         selectedValue={this.props.selectedValue}
         onValueChange={this.props.onValueChange}
         style={styles.greyLabel}
       >
         {this.props.listItems.map((u, i) => {
           return (
             <Picker.Item label={u.label} value={u.value} key={i} />
           )
         })}
       </Picker>
     )
   }
 }
export { FormTextInput, CustomDropdown };
