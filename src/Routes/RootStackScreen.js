import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screen/Login/Login';
import SignUp from '../Screen/SignUp/SignUp';
import ForgotPassword from '../Screen/Login/ForgotPassword';
import LandingPage from '../Screen/LandingPage/LandingPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import { Home, shop, bag, profile } from '../assets';
import Splash from '../Screen/SplashScreen/Splash';
import MyProfile from '../Screen/MyProfile/MyProfile';
import MyOrders from '../Screen/MyProfile/MyOrders';
import OrderDetails from '../Screen/MyProfile/OrderDetails';
import Setting from '../Screen/Settings/Settings';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="Main" component={MainTabScreen} />
                <Stack.Screen name="Setting" component={Setting} />
                
            </Stack.Navigator>
        </NavigationContainer> 
    );
}

function MainTabScreen() {
    return (
        <Tab.Navigator 
            screenOptions={{ 
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    display: 'flex',
                    height: 60
                }
            }}
            initialRouteName="LandingPage"
        >
            <Tab.Screen
                name="LandingPage"
                component={LandingPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={Home}
                            style={{ width: 32, height: 45, resizeMode: 'contain', tintColor: focused ? 'red' : 'grey' }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={shop}
                            style={{ width: 32, height: 45, resizeMode: 'contain', tintColor: focused ? 'red' : 'grey' }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={bag}
                            style={{ width: 32, height: 45, resizeMode: 'contain', tintColor: focused ? 'red' : 'grey' }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="MyProfileStack"
                component={ProfileStackScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={profile}
                            style={{ width: 32, height: 45, resizeMode: 'contain', tintColor: focused ? 'red' : 'grey' }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}

function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
            <ProfileStack.Screen name="MyProfile" component={MyProfile} />
            <ProfileStack.Screen name="MyOrders" component={MyOrders} />
            <ProfileStack.Screen name="OrderDetails" component={OrderDetails} />
        </ProfileStack.Navigator>
    );
}

export default App;

const styles = StyleSheet.create({
    // Add your styles here if needed
});
