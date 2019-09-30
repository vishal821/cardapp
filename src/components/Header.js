import  React from 'react';
import { View, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import UsersDetails from "../screens/userdetails";
import CardsFrom from "../screens/cardform";
import globalstyle from '../styles/GlobalStyle';
import styles from '../styles/HeaderStyle';
import { withNavigation } from "react-navigation";
import Gallery from "../screens/Gallery";

 
const UserDetails = () => (
    <UsersDetails />
);
const UserDetailsDesc = () => (
    <Gallery/>
);
const CardFrom = () => (
    <CardsFrom />
);
const QrCode = () => (
    <View style={[styles.scene]} />
);
class TabViewHeader extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Details' },
      { key: 'second', title: 'Gallery' },
      { key: 'third', title: 'Form' },
      { key: 'fourth', title: 'QR Code' },      
    ],
  };
  render() {
    return (
        <TabView
            navigationState={this.state}
            renderScene={SceneMap({
                first: UserDetails,
                second: UserDetailsDesc,
                third: CardFrom,
                fourth: QrCode
            })}
            renderTabBar={(props) =>
                <TabBar
                    {...props}
                    style={styles.tabStyle}
                    labelStyle={[styles.tabLabel, globalstyle.font_family_gr_14]}
                    renderIcon={this.renderIcon}
                    indicatorStyle={styles.indicator}

                />
            }
            onIndexChange={index => this.setState({ index })}
        />
    );
  }
}
export default  withNavigation(TabViewHeader)
 
