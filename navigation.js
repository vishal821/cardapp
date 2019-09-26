import React from 'react';
import Login from "./src/screens/login";
import Welcome from "./src/screens/welcome";
import CardForm from "./src/screens/cardform";
import UserDetails from "./src/screens/userdetails";
import { createSwitchNavigator,createAppContainer } from "react-navigation";
import Header from './src/components/DrawerHeader';
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

const StackNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
},{headerMode: "none" });


const AppStackNavigator = createDrawerNavigator(
  {
    UserDetails: {
      screen: UserDetails
    },
    CardForm: {
      screen: CardForm
    }
  },
  {
    drawerWidth: 230,
    contentComponent: props => <Header {...props} />,
    contentOptions: {
      marginRight: 0,
    }
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    InitialRoute: Welcome,
    Auth: StackNavigator,
    App: AppStackNavigator
  },
  {
    initialRouteName: 'InitialRoute',
  }
);

const Navigation = createAppContainer(SwitchNavigator);
export default Navigation;
