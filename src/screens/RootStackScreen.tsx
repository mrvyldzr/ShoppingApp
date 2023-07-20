import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import DetailScreen from '../screens/DetailScreen';


const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createStackNavigator<RootStackParamList>();

const HomeStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerStyle: {
                        borderBottomWidth: 0,
                    },
                    headerTitle: 'Shopping App',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('CartStack')}>
                            <Image
                                source={require('../assets/images/shopping-cart-2.png')}
                                style={{ marginRight: 25, width: 29, height: 29 }}
                            />
                        </TouchableOpacity>
                    ),

                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../assets/images/logout.png')}
                                style={{ marginLeft: 25, width: 20, height: 20 }}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    headerTitle: 'DETAIL',
                    headerBackTitle: '',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Image
                                source={require('../assets/images/back.png')}
                                style={{ marginLeft: 25, width: 20, height: 20 }}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

const CartStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerTitle: 'CART',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Image
                                source={require('../assets/images/back.png')}
                                style={{ marginLeft: 25, width: 20, height: 20 }}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

const RootStackScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/images/home.png')}
                            style={{ tintColor: color, width: size, height: size }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="CartStack"
                component={CartStack}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={require('../assets/images/shopping-cart-2.png')}
                            style={{ tintColor: color, width: size, height: size }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default RootStackScreen;