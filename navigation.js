import React from 'react';
import Login from "./src/screens/login";
import CardForm from "./src/screens/cardform"
import { createSwitchNavigator,createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";

const StackNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
},{headerMode: "none" });


const AppStackNavigator = createDrawerNavigator(
  {
    CardForm: {
      screen: CardForm
    }
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    InitialRoute: Login,
    Auth: StackNavigator,
    App: AppStackNavigator
  },
  {
    initialRouteName: 'InitialRoute',
  }
);

const Navigation = createAppContainer(SwitchNavigator);
export default Navigation;
