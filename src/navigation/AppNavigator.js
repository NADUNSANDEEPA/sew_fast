import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FlashScreen from '../pages/FlashScreen';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Login from '../pages/Login';

import TeamsView from '../pages/production_team/TeamsView';
import TeamsAdd from '../pages/production_team/TeamsAdd';
import TeamsEdit from '../pages/production_team/TeamsEdit';

import NotFound from '../ErrorPages/NotFound';
import ServerError from '../ErrorPages/ServerError';
import MainLayout from '../components/MainLayout';

const Stack = createStackNavigator();
const NAVIGATION_STATE_KEY = 'NAVIGATION_STATE';

const AppNavigator = () => {
    const [isReady, setIsReady] = useState(false);
    const [initialState, setInitialState] = useState();

    useEffect(() => {
        const restoreState = async () => {
            try {
                const savedState = await AsyncStorage.getItem(NAVIGATION_STATE_KEY);
                if (savedState) {
                    setInitialState(JSON.parse(savedState));
                }
            } catch (e) {
                console.error('Failed to load navigation state', e);
            } finally {
                setIsReady(true);
            }
        };

        restoreState();
    }, []);

    if (!isReady) {
        return null;
    }

    const routeNames = [
        'FlashScreen', 
        'Dashboard', 
        'Profile', 
        'Settings',
        'Login',
        'TeamsView',
        'TeamsAdd',
        'TeamsEdit',
        'NotFound',
        'ServerError'
    ];

    const renderScreen = (screenName, component) => {
        if (routeNames.includes(screenName)) {
            return (
                <Stack.Screen name={screenName}>
                    {({ navigation }) => (
                        <MainLayout>
                            {React.createElement(component, { navigation })}
                        </MainLayout>
                    )}
                </Stack.Screen>
            );
        }
        return (
            <Stack.Screen name="NotFound" component={NotFound} />
        );
    };

    return (
        <NavigationContainer
            initialState={initialState}
            onStateChange={async (state) => {
                try {
                    await AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state));
                } catch (e) {
                    console.error('Failed to save navigation state', e);
                }
            }}
        >
            <Stack.Navigator initialRouteName="FlashScreen">
                {renderScreen("FlashScreen", FlashScreen)}
                {renderScreen("Dashboard", Dashboard)}
                {renderScreen("Profile", Profile)}
                {renderScreen("Settings", Settings)}
                {renderScreen("Login", Login)}
                {renderScreen("TeamsView", TeamsView)}
                {renderScreen("TeamsAdd", TeamsAdd)}
                {renderScreen("TeamsEdit", TeamsEdit)}
                <Stack.Screen name="ServerError" component={ServerError} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
