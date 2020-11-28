import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps179413Navigator from '../features/Maps179413/navigator';
import Settings179391Navigator from '../features/Settings179391/navigator';
import Settings179376Navigator from '../features/Settings179376/navigator';
import NotificationList179375Navigator from '../features/NotificationList179375/navigator';
import Maps179374Navigator from '../features/Maps179374/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps179413: { screen: Maps179413Navigator },
Settings179391: { screen: Settings179391Navigator },
Settings179376: { screen: Settings179376Navigator },
NotificationList179375: { screen: NotificationList179375Navigator },
Maps179374: { screen: Maps179374Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
