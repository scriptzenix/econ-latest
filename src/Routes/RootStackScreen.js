import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screen/Login/Login';
import SignUp from '../Screen/SignUp/SignUp';
import ForgotPassword from '../Screen/Login/ForgotPassword';
import landingPage from '../Screen/LandingPage/LandingPage';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Image, StyleSheet } from 'react-native';
import { Home, shop, bag, profile } from '../assets';
import Splash from "../Screen/SplashScreen/Splash";
import MyProfile from '../Screen/MyProfile/MyProfile';
import MyOrders from '../Screen/MyProfile/MyOrders';
import OrderDetails from '../Screen/MyProfile/OrderDetails';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="MyOrders" component={MyOrders} />
            <Stack.Screen name="OrderDetails" component={OrderDetails} />
            <Stack.Screen name="Main" component={MainTabScreen} />

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
                // backgroundColor:"red",
                height:60
            }
        }}
            initialRouteName="landingPage"
            // tabBarOptions={{ showLabel: false}}         
        >
            <Tab.Screen
                name="landingPage"
                component={landingPage}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={focused ? Home : Home}
                            style={{ width: 32, height: 45,resizeMode:"contain" ,tintColor:!focused?"grey":"red"}}
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
                            source={focused ? shop : shop}
                            style={{ width: 32, height: 45,resizeMode:"contain" ,tintColor:!focused?"grey":"red"}}

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
                            source={focused ? bag : bag}
                            style={{ width: 32, height: 45,resizeMode:"contain" ,tintColor:!focused?"grey":"red"}}

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
                        source={focused ? profile : profile}
                        style={{ width: 32, height: 45,resizeMode:"contain" ,tintColor:!focused?"grey":"red"}}
                    />
                )
            }}
        />
        </Tab.Navigator>
    );
}

export default App;

const styles = StyleSheet.create({
   
});
