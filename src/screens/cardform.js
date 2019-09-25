import React from 'react';
import { TextInput,Image,Text, View, Modal, Alert, ScrollView } from 'react-native';
import styles from "../styles/LoginStyle";
import cardstyle from "../styles/CardForm";
import {FormTextInput, CustomDropdown} from "../components/FormElement";
import CustomButtom from "../components/CustomButton";

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
            // city: "",
            modalVisible: false
        }
    }
    componentWillMount() {
        this.showModal();
    }
    showModal() {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }
    agreedTerms() {
        this.showModal();
    }
    disagreedTerms() {
        this.props.navigation.navigate("Login");
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
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text style={cardstyle.heading}>
                                Agree Terms & Conditions to Proceed Further
                            </Text>
                        </View>
                        <View>
                        <ScrollView>
                            <View style={{marginBottom: 40}}>
                                <Text style={cardstyle.termsheading}>1. YOUR AGREEMENT</Text>
                                <Text style={cardstyle.termsdesc}>By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.</Text>
                                <Text style={cardstyle.termsheading}>2. PRIVACY</Text>
                                <Text style={cardstyle.termsdesc}>Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.</Text>
                                <Text style={cardstyle.termsheading}>3. LINKED SITES</Text>
                                <Text style={cardstyle.termsdesc}>This Site may contain links to other independent third-party Web sites ("Linked Sites”).</Text>
                                <Text style={cardstyle.termsheading}>4. FORWARD LOOKING STATEMENTS</Text>
                                <Text style={cardstyle.termsdesc}>All materials reproduced on this site speak as of the original date of publication or filing.</Text>
                                <Text style={cardstyle.termsheading}>5. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY</Text>
                                    <Text style={cardstyle.termsdesc}>i. THIS SITE MAY CONTAIN INACCURACIES AND TYPOGRAPHICAL ERRORS.</Text>
                                    <Text style={cardstyle.termsdesc}>ii. YOU UNDERSTAND AND AGREE THAT UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, ANY OF OUR SITES OR MATERIALS OR FUNCTIONS ON ANY SUCH SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</Text>
                                <Text style={cardstyle.termsheading}>6. EXCLUSIONS AND LIMITATIONS</Text>

                                <Text style={cardstyle.termsdesc}>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, OUR LIABILITY IN SUCH JURISDICTION SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.</Text>
                                <Text style={cardstyle.termsheading}>7. LINKED SITES</Text>
                                <Text style={cardstyle.termsdesc}>This Site may contain links to other independent third-party Web sites ("Linked Sites”).</Text>
                                <Text style={cardstyle.termsheading}>8. FORWARD LOOKING STATEMENTS</Text>
                                <Text style={cardstyle.termsdesc}>All materials reproduced on this site speak as of the original date of publication or filing.</Text>
                                <Text style={cardstyle.termsheading}>9. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY</Text>
                                    <Text style={cardstyle.termsdesc}>i. THIS SITE MAY CONTAIN INACCURACIES AND TYPOGRAPHICAL ERRORS.</Text>
                                    <Text style={cardstyle.termsdesc}>ii. YOU UNDERSTAND AND AGREE THAT UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, ANY OF OUR SITES OR MATERIALS OR FUNCTIONS ON ANY SUCH SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</Text>
                                <Text style={cardstyle.termsheading}>10. EXCLUSIONS AND LIMITATIONS</Text>

                                <Text style={cardstyle.termsdesc}>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, OUR LIABILITY IN SUCH JURISDICTION SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.</Text>
                                <View style={cardstyle.buttonView}>
                                    <View style={{flex: 0.4}}>
                                        <CustomButtom label="Agree" onPress={() => this.agreedTerms()}/>
                                    </View>
                                    <View style={{flex: 0.4}}>
                                        <CustomButtom label="Disagree" onPress={() => this.disagreedTerms()}/>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                        </View>
                    </View>
                    </Modal>

            </View>
        );
    }
}
  
export default CardForm;