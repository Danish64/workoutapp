import { ColorSchemeName } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Entypo } from '@expo/vector-icons'; 
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import WorkoutDetailsScreen from "../screens/WorkoutDetails";


export default function Navigation({colorScheme}: {colorScheme: ColorSchemeName}){
    return (
        <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <RootNavigator />
         </NavigationContainer>
    )
    
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
    return (
        <Stack.Navigator>
                <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="WorkoutDetail" component={WorkoutDetailsScreen} options={{title: "Workout Details"}} />
        </Stack.Navigator>
    );
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator(){
    return(
        <BottomTab.Navigator initialRouteName="Home">
            <BottomTab.Screen 
                name="Home" 
                component={HomeScreen}
                options={{ 
                    tabBarIcon: ({color, size}) => <FontAwesome name="home" size={size} color={ color } />
                }}
                 />
            <BottomTab.Screen 
                
                name="Planner" 
                component={PlannerScreen}
                options={{ 
                    unmountOnBlur: true,
                    tabBarIcon: ({color, size}) => <Entypo name="add-to-list" size={size} color={color} />
                }}
                 />
        </BottomTab.Navigator>
    )
}