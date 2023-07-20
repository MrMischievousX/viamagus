import React, { useCallback } from "react";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile";
import { LogBox, View } from "react-native";
import { COLORS } from "./src/constants/colors";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Update from "./src/screens/Update";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigation } from "./src/navigation/BottomTabNavigation";
import { ROUTES } from "./src/constants/routes";

LogBox.ignoreAllLogs();

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const App = ({ params }) => {
  const [isLoaded] = useFonts({
    "avr-semi": require("./assets/fonts/avr-semi.otf"),
    "avr-medium": require("./assets/fonts/avr-medium.otf"),
    "mrt-semi": require("./assets/fonts/mrt-semi.ttf"),
    "mrt-medium": require("./assets/fonts/mrt-medium.ttf"),
    "mrt-bold": require("./assets/fonts/mrt-bold.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <View
      style={{ backgroundColor: COLORS.whiteText, flex: 1 }}
      onLayout={handleOnLayout}
    >
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          <Stack.Screen name={ROUTES.home} component={Home} />
          <Stack.Screen name={ROUTES.update} component={Update} />
          <Stack.Screen name={ROUTES.profile} component={BottomTabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
