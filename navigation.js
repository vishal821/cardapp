import React from 'react';
import Login from "./src/screens/login";
import Welcome from "./src/screens/welcome";
import Header from "./src/components/Header";
import CardForm from "./src/screens/cardform";
import UserDetails from "./src/screens/userdetails";
import UserDetailsDesc from "./src/screens/userdetailsdesc"; 
import { createSwitchNavigator,createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const StackNavigator = createStackNavigator({
  Login: {
    screen: Login
  }
},{headerMode: "none" });


const AppStackNavigator = createStackNavigator(
  {
    Header: {
      screen: Header
    },
    UserDetails: {
      screen: UserDetails
    },
    UserDetailsDesc: {
      screen: UserDetailsDesc
    },
    CardForm: {
      screen: CardForm
    }
  },{headerMode: "none" }
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
