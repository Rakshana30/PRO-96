import React,{Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import ReminderScreen from '../screens/ReminderScreen';
import SideBarMenu from './SideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({

    Home:{
        screen:ReminderScreen
    },

},

{
    contentComponent:SideBarMenu
},

{
    initialRouteName:'Home'
}

)