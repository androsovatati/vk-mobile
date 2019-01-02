import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import FeedScreen from "../Feed";
import SearchScreen from "../Search";
import MessagesScreen from "../Messages";
import NotificationsScreen from "../Notifications";
import ProfileScreen from "../Profile";
import Icon from "react-native-vector-icons/FontAwesome5";
import { GRAY, BLUE } from "../../constants/colors";

const createTab = (screen, iconName) => ({
  screen,
  navigationOptions: () => ({
    tabBarIcon: ({ tintColor }) => (
      <Icon name={iconName} size={30} color={tintColor} regular />
    )
  })
});

const Feed = createTab(FeedScreen, "square");
const Search = createTab(SearchScreen, "search");
const Messages = createTab(MessagesScreen, "comment");
const Notifications = createTab(NotificationsScreen, "bell");
const Profile = createTab(ProfileScreen, "bars");

const Main = createBottomTabNavigator(
  {
    Feed,
    Search,
    Messages,
    Notifications,
    Profile
  },
  {
    initialRouteName: "Feed",
    tabBarOptions: {
      showLabel: false,
      activeTintColor: BLUE,
      inactiveTintColor: GRAY
    }
  }
);

export default Main;
