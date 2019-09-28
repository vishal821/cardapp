import React from 'react';
import { Image,Text, View } from 'react-native';
import styles from "../styles/LoginStyle";
import gstyle from "../styles/GlobalStyle";
import {FormTextInput} from "../components/FormElement";
import CustomButtom from "../components/CustomButton";
import cookie from 'cross-cookie';

const logourl = require("../images/logo.png");
const userdetails = {
    email: "admin@gmail.com",
    password: "Admin@123"
}
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            errors: {},
            fields: {},
            invalid: false
        }
    }
    validateText(text, type) {
        let errors = this.state.errors;
        let field = this.state.fields;
        if (type == 'email') {
            const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (text == "") {
              errors.email = "Email cannot be empty";
            } else if (text.length > 0 && !reg.test(text)) {
              errors.email = "Invalid email";
            } else {
              errors.email = '';
              field.email = text;
            }
        }
        if (type == "password") {
          const alph = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
          if (text == '') {
            errors.password = "Password Cannot be empty";
          } else if (text.length > 0 && !alph.test(text)) {
            errors.password = "invalid Password";
          } else {
            errors.password = "";
            field.password = text;
          }
        }
        this.setState({
          errors: errors,
          fields: field
        });
    }
    submitForm() {
        if (this.state.errors.email == "" && this.state.errors.password == "" && this.state.fields.email === userdetails.email && this.state.fields.password === userdetails.password) {
            this.setState({
                invalid: false
            });
            cookie.set('userlogin', {
                isuserloggedin: true,
                expires: 2
            }).then(() => this.props.navigation.navigate("UserDetails"));   
        }
        else {
            this.setState({
                invalid: true
            })
        }
    }
    render() {
        return (
            <View style={styles.formContainer}>
                <View style={styles.formInput}>
                    <Image source={logourl} style={styles.logoimg}/>
                    <View style={styles.formSpacing}>
                        <FormTextInput
                            label="User Email"
                            value={this.state.text}
                            onChangeText={text => this.validateText(text, "email")}
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
                            label="User Password"
                            value={this.state.password}
                            secureTextEntry={true}
                            onChangeText={password => this.validateText(password, "password")}
                        />
                        {this.state.errors.password ? (
                            <Text style={gstyle.errorstyle}>
                                {this.state.errors.password}
                            </Text>
                            ) : null
                        }
                    </View>
                    {this.state.invalid === true ?
                        <View>
                            <Text style={gstyle.errorstyle}>
                                Please Enter Valid User Name or Password
                            </Text>
                        </View>
                    :null
                    }
                    <CustomButtom label="Submit" onPress={() => this.submitForm()}/>
                </View>
            </View>
        );
    }
}
  
export default Login;