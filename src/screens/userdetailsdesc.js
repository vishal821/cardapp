import React from 'react';
import { TouchableOpacity,Image,Text, View } from 'react-native';
import styles from "../styles/LoginStyle";
import detailstyle from "../styles/UserDetailsStyle";
import CardView from 'react-native-cardview';
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";

  const icon = require("../images/usericon.png");
  class UserDetails extends React.Component {
      constructor(props) {
          super(props);
      }
      render() {
          return (
              <View style={styles.formInput}>
                  <View style={detailstyle.fieldSpacing}>
                      <View style={{flex: 0.1}}>
                          <TouchableOpacity onPress={() => {this.props.navigation.navigate("UserDetails")}} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
                              <Icon name='arrow-left' style={detailstyle.iconStyle}/>
                          </TouchableOpacity>
                      </View>
                      <View style={{flex: 0.9}}>
                          <Text style={detailstyle.heading}>
                              Users Details Description
                          </Text>
                      </View>
                  </View>
                  {this.props.userDetailsReducer.dataList.length > 0 && this.props.userDetailsReducer.dataList.map((u, i) => {
                        if(u.id === this.props.navigation.state.params.id) {
                            return (
                                <CardView key={i} cardElevation={5} cardMaxElevation={2} cornerRadius={8} style={detailstyle.cardStyle}>
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
                                    <View>
                                        <Text style={detailstyle.termsdesc}>
                                            {u.body}
                                        </Text>
                                    </View>
                                </CardView>
                                                      )
                        }

                  })}
              </View>
          );
      }
  }
  function mapStateToProps(state) {
      return {
        userDetailsReducer: state.userDetailsReducer,
      };
    }

    
    export default connect(
      mapStateToProps
    )(UserDetails);