import React from 'react';
import { TouchableOpacity,Image,Text, View, Modal, Alert, ScrollView } from 'react-native';
import styles from "../styles/LoginStyle";
import detailstyle from "../styles/UserDetailsStyle";
import CardView from 'react-native-cardview';
import CustomButtom from "../components/CustomButton";
import cookie from 'cross-cookie';
import Icon from "react-native-vector-icons/FontAwesome";
import { getdetailslist } from "../actions/userDetailsAction";
import { connect } from "react-redux";

const icon = require("../images/usericon.png");
class UserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            // city: "",
            details: [],
            modalVisible: false
        }
    }
    componentWillMount() {
        cookie.get('agreed_status')
        .then((value) => {
          this.props.navigation.navigate(value ? this.setState({
            modalVisible: false
          }) : this.setState({
            modalVisible: true
          })
          );
        });
    }
    componentDidMount() {
        this.props.fetchData();
    }
    componentDidUpdate(nextProps) {
        if(this.props.userDetailsReducer && this.props.userDetailsReducer.dataList != nextProps.userDetailsReducer.dataList && this.props.userDetailsReducer.dataListSuccess === true) {
          if(this.props.userDetailsReducer.dataList.length > 0) {
            this.setState({
                details: this.props.userDetailsReducer.dataList
            })
          }
        }
    }
    showModal() {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }
    agreedTerms() {
        cookie.set('agreed_status', {
            isagreed: true,
            expires: 2
        }).then(() => this.showModal());   
    }
    disagreedTerms() {
        cookie.clearAll()
        .then(() => this.props.navigation.navigate('Login'));
    }
    getDetails(id) {
        this.props.navigation.navigate('UserDetailsDesc', {
            id: id
        });
    }
    render() {
        return (
            <View style={styles.formInput}>
                <ScrollView>
                {this.state.details.length > 0 && this.state.details.map((u, i) => {
                    return (
                        <TouchableOpacity key={i}>
                            <CardView cardElevation={5} cardMaxElevation={2} cornerRadius={8} style={detailstyle.cardStyle}>
                                <View style={detailstyle.cardinsidestyle}>
                                    <View style={{flex: 1.3}}> 
                                        <Image source={icon}/>
                                    </View>
                                    <View style={{flex: 8.7}}>
                                        <Text style={detailstyle.termsheading}>
                                            {u.title}
                                        </Text>
                                    </View>
                                </View>
                            </CardView>
                        </TouchableOpacity>
                    )
                })}
                </ScrollView>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text style={detailstyle.heading}>
                                Agree Terms & Conditions to Proceed Further
                            </Text>
                        </View>
                        <View>
                        <ScrollView>
                            <View style={{marginBottom: 40}}>
                                <Text style={detailstyle.termsheading}>1. YOUR AGREEMENT</Text>
                                <Text style={detailstyle.termsdesc}>By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.</Text>
                                <Text style={detailstyle.termsheading}>2. PRIVACY</Text>
                                <Text style={detailstyle.termsdesc}>Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.</Text>
                                <Text style={detailstyle.termsheading}>3. LINKED SITES</Text>
                                <Text style={detailstyle.termsdesc}>This Site may contain links to other independent third-party Web sites ("Linked Sites”).</Text>
                                <Text style={detailstyle.termsheading}>4. FORWARD LOOKING STATEMENTS</Text>
                                <Text style={detailstyle.termsdesc}>All materials reproduced on this site speak as of the original date of publication or filing.</Text>
                                <Text style={detailstyle.termsheading}>5. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY</Text>
                                    <Text style={detailstyle.termsdesc}>i. THIS SITE MAY CONTAIN INACCURACIES AND TYPOGRAPHICAL ERRORS.</Text>
                                    <Text style={detailstyle.termsdesc}>ii. YOU UNDERSTAND AND AGREE THAT UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, ANY OF OUR SITES OR MATERIALS OR FUNCTIONS ON ANY SUCH SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</Text>
                                <Text style={detailstyle.termsheading}>6. EXCLUSIONS AND LIMITATIONS</Text>

                                <Text style={detailstyle.termsdesc}>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, OUR LIABILITY IN SUCH JURISDICTION SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.</Text>
                                <Text style={detailstyle.termsheading}>7. LINKED SITES</Text>
                                <Text style={detailstyle.termsdesc}>This Site may contain links to other independent third-party Web sites ("Linked Sites”).</Text>
                                <Text style={detailstyle.termsheading}>8. FORWARD LOOKING STATEMENTS</Text>
                                <Text style={detailstyle.termsdesc}>All materials reproduced on this site speak as of the original date of publication or filing.</Text>
                                <Text style={detailstyle.termsheading}>9. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY</Text>
                                    <Text style={detailstyle.termsdesc}>i. THIS SITE MAY CONTAIN INACCURACIES AND TYPOGRAPHICAL ERRORS.</Text>
                                    <Text style={detailstyle.termsdesc}>ii. YOU UNDERSTAND AND AGREE THAT UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, ANY OF OUR SITES OR MATERIALS OR FUNCTIONS ON ANY SUCH SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</Text>
                                <Text style={detailstyle.termsheading}>10. EXCLUSIONS AND LIMITATIONS</Text>

                                <Text style={detailstyle.termsdesc}>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, OUR LIABILITY IN SUCH JURISDICTION SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.</Text>
                                <View style={detailstyle.buttonView}>
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
function mapStateToProps(state) {
    return {
      userDetailsReducer: state.userDetailsReducer,
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      fetchData: () => dispatch(getdetailslist()),
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserDetails);