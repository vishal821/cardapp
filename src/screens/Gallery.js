import React from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
import styles from "../styles/LoginStyle";
import { getgallerylist } from "../actions/userDetailsAction";
import { connect } from "react-redux";


class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            details: [],
        }
    }
    componentDidMount() {
        this.props.fetchData();
    }
    componentDidUpdate(nextProps) {
        if(this.props.userDetailsReducer && this.props.userDetailsReducer.galleryList != nextProps.userDetailsReducer.galleryList && this.props.userDetailsReducer.galleryListSuccess === true) {
          if(this.props.userDetailsReducer.galleryList.length > 0) {
            this.setState({
                details: this.props.userDetailsReducer.galleryList
            })
          }
        }
    }
    render() {
        return (
            <View style={styles.formInput}>
                <ScrollView>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
                        {this.state.details.length > 0 && this.state.details.map((u, i) => {
                            return (
                                <View key={i}> 
                                    <View style={{margin: 5}}>
                                        <Image source={{ uri: u.thumbnailUrl }}  style={{width: 100,height: 100}} />
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
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
      fetchData: () => dispatch(getgallerylist()),
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Gallery);