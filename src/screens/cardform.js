import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from "../styles/LoginStyle";
import gstyle from "../styles/GlobalStyle";
import cardstyle from "../styles/CardForm";
import {FormTextInput, CustomDropdown} from "../components/FormElement";
import CustomButtom from "../components/CustomButton";
import Icon from "react-native-vector-icons/FontAwesome";
import cookie from 'cross-cookie';
import DatePicker from 'react-native-datepicker';

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
            errors: {},
            fields: {},
            invalid: false,
            date: ""
        }
        this._checkuserStatus = this._checkusercardStatus.bind(this);
    }
    componentWillMount() {
        this._checkusercardStatus();
    }
    _checkusercardStatus() {
        let fielddata = this.state.fields;
        cookie.get('cardsaved')
          .then((value) => {
            let res = JSON.parse(value);
            fielddata.cardnumber = res.cardnumber
            fielddata.cvv = res.cvv,
            fielddata.email = res.email,
            fielddata.mobile = res.mobile,
            fielddata.city = res.city
            this.setState({
                date: res.date,
                fields: fielddata
            });
        });
    }
    submitForm() {
        if (this.state.errors.cardnumber == "" && this.state.date != "" && this.state.errors.cvv == "" && this.state.errors.email == "" && this.state.errors.mobile == "" && this.state.errors.city == "") {
            this.setState({
                invalid: false
            })
            cookie.set('cardsaved', {
                cardnumber: this.state.fields.cardnumber,
                date: this.state.date,
                cvv: this.state.fields.cvv,
                email: this.state.fields.email,
                mobile: this.state.fields.mobile,
                city: this.state.fields.city,
                iscardsaved: true,
                expires: 2
            }).then(() => this.props.navigation.navigate("UserDetails"));   
        } else {
            this.setState({
                invalid: true
            })
        }
    }
    validate(text,type) {
        let errors = this.state.errors;
        let field = this.state.fields;
        if(type === "cardnumber") {
            let matchreg = /^\d{16}$/;
            if (text != "" && matchreg.test(text)) {
                errors.cardnumber = '';
                field.cardnumber =  text;
            }
            else {
                errors.cardnumber = 'Invalid Card Number';
                field.cardnumber =  text;
            }
        }
        if (type == "email") {
            let matchreg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (text != "" && matchreg.test(text)) {
                errors.email = '';
                field.email = text;
            } else {
              errors.email = 'Invalid Email';
              field.email = text;
            }
          }
          if (type == 'mobile') {
            if(text.length <=10) {
                let matchreg = /^[6789]\d{9}$/;
                if (text != ""  && matchreg.test(text)) {
                    errors.mobile = '';
                    field.mobile =  text
                }
                else {
                  errors.mobile = 'Invalid Mobile Number';
                  field.mobile =  text
                }
            }
        }
        if (type == "cvv") {
            if(text == "") {
                errors.cvv = 'CVV Cannot be Blank';
                field.cvv =  text
            } else {
                errors.cvv = '';
                field.cvv =  text
            }
        }
        if (type == "city") {
            if (text == '') {
                errors.city = "city Cannot be empty";
              } else {
                errors.city = "";
                field.city = text;
              }
        }
        this.setState({
            errors: errors,
            fields: field
        });
      
    }
    render() {
        return (
            <View style={styles.formInput}>
                <View style={styles.formSpacing}>
                    <FormTextInput
                        label="Card Number"
                        keyboardType='numeric'
                        value={this.state.fields.cardnumber}
                        onChangeText={cardnumber => this.validate(cardnumber,"cardnumber")}
                    />
                    {this.state.errors.cardnumber ? (
                        <Text style={gstyle.errorstyle}>
                            {this.state.errors.cardnumber}
                        </Text>
                        ) : null
                    }
                </View>
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{flex: 0.4}}>
                        <DatePicker
                            date={this.state.date}
                            mode="date"
                            style={{width: 200,marginTop: 10}}
                            placeholder="Expiry Date"
                            format="YYYY-MM"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{dateInput:{borderTopWidth: 0,borderRightWidth: 0,borderLeftWidth: 0,borderBottomColor: "#333333"}}}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
                    </View>
                    <View style={{flex: 0.4}}>
                        <FormTextInput
                            label="CVV"
                            keyboardType='numeric'
                            value={this.state.fields.cvv}
                            onChangeText={cvv => this.validate(cvv, "cvv")}
                        />
                        {this.state.errors.cvv ? (
                            <Text style={gstyle.errorstyle}>
                                {this.state.errors.cvv}
                            </Text>
                            ) : null
                        }
                    </View>
                </View>
                <View style={styles.formSpacing}>
                    <FormTextInput
                        label="User Email"
                        value={this.state.fields.email}
                        onChangeText={email => this.validate(email,"email")}
                    />
                    {this.state.errors.email ? (
                        <Text style={gstyle.errorstyle}>
                            {this.state.errors.email}
                        </Text>
                        ) : null
                    }
                </View>
                <View style={styles.formSpacing}>
                    <FormTextInput
                        label="User Mobile"
                        keyboardType='numeric'
                        value={this.state.fields.mobile}
                        onChangeText={mobile => this.validate(mobile,"mobile")}
                    />
                    {this.state.errors.mobile ? (
                        <Text style={gstyle.errorstyle}>
                            {this.state.errors.mobile}
                        </Text>
                        ) : null
                    }
                </View>
                <View style={styles.formSpacing}>
                    <CustomDropdown
                        selectedValue={this.state.fields.city}
                        onChangeText={city => this.validateText(city, "city")}
                        onValueChange={(itemValue, itemIndex) =>
                            this.validate(itemValue, "city")
                        }
                        listItems={cities}
                    />
                </View>
                <View>
                    {this.state.invalid === true ? 
                        <Text style={gstyle.errorstyle}>
                            All Fields are Required
                        </Text>
                    :null}
                </View>
                <CustomButtom label="Submit" onPress={() => this.submitForm()}/>
            </View>
        );
    }
}
  
export default CardForm;