import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MylistScreen from './screens/MylistScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import {
  HOME_ROUTE,
  MYLIST_ROUTE,
  PROFILE_ROUTE,
  SEARCH_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
} from './utils/consts';

export const authRoutes = [
  {
    path: HOME_ROUTE,
    Component: HomeScreen,
  },
  {
    path: PROFILE_ROUTE,
    Component: ProfileScreen,
  },
  {
    path: SEARCH_ROUTE,
    Component: SearchScreen,
  },
  {
    path: MYLIST_ROUTE,
    Component: MylistScreen,
  },
];

export const publicRoutes = [
  {
    path: HOME_ROUTE,
    Component: LoginScreen,
  },
  {
    path: SIGNUP_ROUTE,
    Component: LoginScreen,
  },
  {
    path: SIGNIN_ROUTE,
    Component: LoginScreen,
  },
];
