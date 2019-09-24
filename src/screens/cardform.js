import React from 'react';
import { Image,Text, View } from 'react-native';
import styles from "../styles/LoginStyle";
import cardstyle from "../styles/CardForm";
import {FormTextInput, CustomDropdown} from "../components/FormElement";
import CustomButtom from "../components/CustomButton";


const logourl = require("../images/logo.png"); 
const cities = [
    {label: "Bangalore", value: 1},
    {label: "Chandigarh", value: 2},
    {label: "Chennai", value: 3},
    {label: "Kolkata", value: 4},
    {label: "Jaipur", value: 5},
]
class CardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            // city: ""
        }
    }
    render() {
        return (
            <View style={styles.formInput}>
                <View style={styles.formSpacing}>
                    <FormTextInput
                        label="Card Number"
                        value={this.state.text}
                        onChangeText={text => this.setState({text})}
                    />
                </View>
                {/* <View style={cardstyle.gridView}>
                    <View style={[styles.formSpacing,{flex: 0.4}]}>
                        <FormTextInput
                            label="Expiry Date"
                            value={this.state.password}
                            secureTextEntry={true}
                            onChangeText={password => this.setState({password})}
                        />
                    </View>
                    <View style={[styles.formSpacing,{flex: 0.4}]}>
                        <FormTextInput
                            label="CVV"
                            value={this.state.password}
                            secureTextEntry={true}
                            onChangeText={password => this.setState({password})}
                        />
                    </View>
                </View> */}
                <View style={styles.formSpacing}>
                    <FormTextInput
                        label="Expiry Date"
                        value={this.state.password}
                        secureTextEntry={true}
                        onChangeText={password => this.setState({password})}
                    />
                </View>
                <View style={styles.formSpacing}>
                    <FormTextInput
                        label="CVV"
                        value={this.state.password}
                        secureTextEntry={true}
                        onChangeText={password => this.setState({password})}
                    />
                </View>
                <View style={styles.formSpacing}>
                    <FormTextInput
                        label="User Email"
                        value={this.state.password}
                        secureTextEntry={true}
                        onChangeText={password => this.setState({password})}
                    />
                </View>
                <View style={styles.formSpacing}>
                    <FormTextInput
                        label="User Mobile"
                        value={this.state.password}
                        secureTextEntry={true}
                        onChangeText={password => this.setState({password})}
                    />
                </View>
                <View style={styles.formSpacing}>
                    <CustomDropdown
                        selectedValue={this.state.city}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({city: itemValue})
                        }
                        listItems={cities}
                    />
                </View>
                <CustomButtom label="Submit"/>
            </View>
        );
    }
}
  
export default CardForm;