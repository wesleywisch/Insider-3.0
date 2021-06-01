import React from 'react';
import { View, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';

export default function Home() {
    return (
        <LinearGradient
            colors={['#1ddbb9', '#132742']}
            style={{ flex: 1, justifyContent: 'center' }}
        >

            <StatusBarPage
                barStyle="light-content"
                backgroundColor="#1ddbb9"
            />

            <Menu/>

            <Text>Página Home</Text>
        </LinearGradient>
    )
}