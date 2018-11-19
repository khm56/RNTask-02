import { createStackNavigator } from "react-navigation";

//Components
import LoginPage from "../Components/Login";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";

const OurStack = createStackNavigator(
  {
    Login: LoginPage,
    List: CoffeeList,
    Detail: CoffeeDetail,
    Cart: CoffeeCart
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTextStyle: {
        fontWeight: "bold"
      }
    },
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    }
  }
);
export default OurStack;
