import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { withNavigation } from "react-navigation";
import cookie from 'cross-cookie';
import styles from "../styles/DrawerStyles";
import Icon from "react-native-vector-icons/FontAwesome";

const userImage = require("../images/usericon.png");
class Header extends Component {
  constructor(props) {
    super(props);
  }
  _onPressLogout(){
      cookie.clearAll()
  .then(() => this.props.navigation.navigate('Login'));
  }
  
  render(){
    return (
      <View>
          <View style={styles.drawerStyle}>
            <View style={{flex: 0.9}}>
              <View style={styles.userprofile}>
                <Image source={userImage} />
              </View>
              <View style={styles.userprofiletext}>
                <Text style={styles.userprofilename}>User Name</Text>
              </View>
            </View>
            <View style={{flex: 0.1,marginTop: 20}}>
              <TouchableOpacity onPress={() => {this.props.navigation.toggleDrawer()}} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
                <Icon name='arrow-left' style={styles.iconSpacing} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.coloredborder}>
            <View style={{ flex: 1, backgroundColor: "#fab366", height: 9 }} />
          </View>
        <ScrollView>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("UserDetails")}
          >
            <View style={styles.listContainer}>
              <Icon name='user' style={styles.iconSpacing} />
                <Text style={styles.listText}>
                  User Details
                </Text>
            </View>
          </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("CardForm")}
            >
              <View style={styles.listContainer}>
                <Icon name="list" style={styles.iconSpacing} />
                <Text style={styles.listText}>
                  Card Form
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this._onPressLogout()}
            >
            <View style={styles.listContainer}>
              <Icon name="sign-out" style={styles.iconSpacing} />
              <Text style={styles.listText}>Sign Out</Text>
            </View>
          </TouchableOpacity>     
        </ScrollView>
      </View>
    )
  }
}

export default withNavigation(Header);

