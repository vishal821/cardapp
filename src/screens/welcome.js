import React from 'react';
import { Text, View } from 'react-native';
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
            <View>
                <Text>
                    Welcome
                </Text>
            </View>
        );
    }
}
  
export default Welcome;