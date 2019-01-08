import React from "react";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import FeedScreen from "../Feed";
import SearchScreen from "../Search";
import MessagesScreen from "../Messages";
import NotificationsScreen from "../Notifications";
import ProfileScreen from "../Profile";
import PhotoScreen from "../Photo";
import SearchIcon from "../../components/Icons/SearchIcon";
import MessagesIcon from "../../components/Icons/MessagesIcon";
import NotificationsIcon from "../../components/Icons/NotificationsIcon";
import MenuIcon from "../../components/Icons/MenuIcon";
import NewsfeedIcon from "../../components/Icons/NewsfeedIcon";
import { GRAY, BLUE } from "../../constants/colors";

const createTab = (screen, Icon) => ({
  screen,
  navigationOptions: () => ({
    tabBarIcon: ({ tintColor }) => (
      <Icon color={tintColor} width={32} height={32} />
    )
  })
});

const Feed = createTab(FeedScreen, NewsfeedIcon);
const Search = createTab(SearchScreen, SearchIcon);
const Messages = createTab(MessagesScreen, MessagesIcon);
const Notifications = createTab(NotificationsScreen, NotificationsIcon);
const Profile = createTab(ProfileScreen, MenuIcon);

const BottomNavigation = createBottomTabNavigator(
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

const Main = createMaterialTopTabNavigator(
  {
    Photo: {
      screen: PhotoScreen
    },
    Base: {
      screen: BottomNavigation
    }
  },
  {
    initialRouteName: "Base",
    tabBarOptions: {
      style: {
        display: "none"
      }
    },
    swipeEnabled: ({ routes }) => {
      const MainRoute = routes.find(route => route.routeName === "Base");
      return MainRoute.index === 0;
    }
  }
);

export default Main;
