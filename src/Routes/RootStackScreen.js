import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screen/Login/Login';
import SignUp from '../Screen/SignUp/signUp';
import ForgotPassword from '../Screen/Login/ForgotPassword';
import LandingPage from '../Screen/LandingPage/landingPage';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import { Home, shop, bag, profile,Favorite } from '../assets';
import Splash from '../Screen/SplashScreen/Splash';
import MyProfile from '../Screen/MyProfile/MyProfile';
import MyOrder from '../Screen/MyProfile/MyOrder';
import OrderDetails from '../Screen/MyProfile/OrderDetails';
import Setting from '../Screen/Settings/Settings';
import Categories from '../Screen/Categories/Categories';
import Catalog from '../Screen/Categories/Catalog';
import ProductCard from '../Screen/Categories/ProductCard';
import MyBag from '../Screen/AddCard/MyBag';
import Favorites from '../Screen/Favorites/Favorites';
import RatingsandReview from '../Screen/Ratings/RatingsandReview';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Setting" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="Main" component={MainTabScreen} />
                <Stack.Screen name="Setting" component={Setting} />
                <Stack.Screen name="Catalog" component={Catalog} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ProductCard" component={ProductCard} />
                <Stack.Screen name="MyBag" component={MyBag} />
                <Stack.Screen name="Favorites" component={Favorites} />
                <Stack.Screen name="RatingsandReview" component={RatingsandReview} />
                <Stack.Screen name="MyOrder" component={MyOrder} />

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
                name="Categories"
                component={Categories}
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
                name="MyBag"
                component={MyBag}
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
            name="Favorites"
            component={Favorites}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={Favorite}
                        style={{ width: 40, height: 60, resizeMode: 'contain', tintColor: focused ? 'red' : 'grey' }}
                    />
                )
            }}
        />
            <Tab.Screen
                name="MyProfile"
                component={MyProfile}
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
            <ProfileStack.Screen name="OrderDetails" component={OrderDetails} />
            <ProfileStack.Screen name="Catalog" component={Catalog} />
        </ProfileStack.Navigator>
    );
}

export default App;

const styles = StyleSheet.create({
    // Add your styles here if needed
});
