import AddAccountScreen from "./src/screens/AddAccountScreen";
import AccountListScreen from "./src/screens/AccountListScreen";
import AccountScreen from "./src/screens/AccountScreen";

const AppNavigator = createStackNavigator(
  {
    AddAccountScreen: AddAccountScreen,
    AccountListScreen: AccountListScreen,
    AccountScreen: AccountScreen
  },
  {
    initialRouteName: 'AccountScreen'
  }
);

export default createAppContainer(AppNavigator);