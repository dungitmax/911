import React, {Component} from 'react'
import {
    Image, StyleSheet
} from 'react-native'
import {
    StackNavigator, TabNavigator, DrawerNavigator
} from 'react-navigation'
import Detail from './screens/Detail'
import CreateShedule from './screens/CreateShedule'
import HistoryShedule from './screens/HistoryShedule'
import MyShedule from './screens/MyShedule'
import  InfoProfile from './screens/InfoProfile';
import Images from './Images'
import Profile from './screens/Profile'

export const MySheduleStack = StackNavigator({
    MyShedule_Activity: {
        screen: MyShedule,
        navigationOptions: {
            title: 'My Shedule'
        }
    }
});
export const CreateSheduleStack = StackNavigator({
    CreateShedule_Activity: {
        screen: CreateShedule,
        navigationOptions: {
            title: 'Create Shedule'
        }
    }
});
export const HistorySheduleStack = StackNavigator({
    HistoryShedule_Activity: {
        screen: HistoryShedule,
        navigationOptions: {
            title: 'History Shedule'
        }
    }
});
export const InfoProfileStack=StackNavigator({
    InfoProfile_Activity:{
        screen:InfoProfile,
        navigationOptions:{
            title:'Info Profile'
        }
    }
})
export const Tabs = TabNavigator({
        MyShedule: {
            screen: MySheduleStack,
            navigationOptions: {
                tabBarLabel: 'My Shedule',
                title: 'My Shedule',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={Images.iconList}
                        style={[styles.icons, {tintColor: tintColor}]}
                    />
                ),
            }
        },
        CreateShedule: {
            screen: CreateSheduleStack,
            navigationOptions: {
                tabBarLabel: 'Create Shedule',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={Images.iconList}
                        style={[styles.icons, {tintColor: tintColor}]}
                    />
                ),
            }
        },
        HistoryShedule: {
            screen: HistorySheduleStack,
            navigationOptions: {
                tabBarLabel: 'History Shedule',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={Images.iconList}
                        style={[styles.icons, {tintColor: tintColor}]}
                    />
                ),
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            style:{
              backgroundColor:'transparent'
            },
            labelStyle: {
                fontSize: 9,
                margin: 0,
                padding: 0,
            },
            activeTintColor: 'red',
            inactiveTintColor: 'black',
            showIcon: true
        }
    })
const styles = StyleSheet.create({
    icons: {
        marginBottom:7
    },
})
export const SideMenu = DrawerNavigator({
        Tabbar: {
            screen: Tabs
        },

    },
    {

        drawerWidth: 300,
        drawerPosition: 'left',
        contentComponent: props => <Profile {...props} />,

    });