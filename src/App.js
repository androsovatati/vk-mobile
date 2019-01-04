import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Initial from "./screens/Initial";
import Login from "./screens/Login";
import Main from "./screens/Main";

const AppNavigator = createSwitchNavigator(
  {
    Initial,
    Login,
    Main
  },
  {
    initialRouteName: "Initial"
  }
);

const App = createAppContainer(AppNavigator);
export default App;
