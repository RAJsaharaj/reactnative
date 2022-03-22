import React from "react";
import { Text , StyleSheet, View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Course from "./src/screens/Course";
import About from "./src/screens/About"
import UserData from "./src/screens/UserData";
import Contact from "./src/screens/Contact";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/*home screen*/}
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} softwareName={"CODIKSHA"} />}
        </Stack.Screen>

        {/* Course Screen */}
        <Stack.Screen
          name="Course"
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Course",
            headerTitleAlign: "center",
          }}
          component={Course}
        />

        {/* Course Screen */}
        <Stack.Screen
          name="Student"
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Students",
            headerTitleAlign: "center",
          }}
          component={UserData}
        />

        {/* Course Screen */}
        <Stack.Screen
          name="About"
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "About",
            headerTitleAlign: "center",
          }}
          component={About}
        />

        {/* Course Screen */}
        <Stack.Screen
          name="Contact"
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: "Contact",
            headerTitleAlign: "center",
          }}
          component={Contact}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

