import React from 'react';
import { StyleSheet,View, ActivityIndicator } from 'react-native';
import cookie from 'cross-cookie';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
        }
    }
    componentWillMount() {
        this._checkuserStatus();
    }
    _checkuserStatus = async () => {
          await cookie.get('userlogin')
          .then((value) => {
            this.props.navigation.navigate(value ? 'App' : 'Auth');
          });
        };
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#ee6e18" />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        justifyContent: "center"
    }
  })
  
export default Welcome;