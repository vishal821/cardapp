import Login from "./src/screens/login";
import Welcome from "./src/screens/welcome";
import CardForm from "./src/screens/cardform"
import { createSwitchNavigator,createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import cookie from 'cross-cookie';

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
