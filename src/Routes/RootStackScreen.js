import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import login from '../Screen/Login/Login';
import signUp from '../Screen/signUp/signUp';
import ForgotPassword from '../Screen/Login/ForgotPassword';
import landingPage from '../Screen/LandingPage/landingPage';
const Stack = createStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='landingPage' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="signUp" component={signUp} />
                <Stack.Screen name="login" component={login} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                <Stack.Screen name="landingPage" component={landingPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App; 