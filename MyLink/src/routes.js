import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home'
import MyLinks from './pages/MyLinks'

const Drawer = createDrawerNavigator();

function Routes() {
    return (
        <Drawer.Navigator>

            <Drawer.Screen
                name="Home"
                component={Home}
            />

            <Drawer.Screen
                name="MyLinks"
                component={MyLinks}
            />

        </Drawer.Navigator>
    )
}

export default Routes;