import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants/colors";
import { ROUTES } from "../constants/routes";
import Profile from "../screens/Profile";
import { TABICONSIZE } from "../constants/layout";
import HomeTabIcon from "../icons/HomeTabIcon";
import TrophyTabIcon from "../icons/TrophyTabIcon";
import SearchTabIcon from "../icons/SearchTabIcon";
import LeagueTabIcon from "../icons/LeagueTabIcon";
import UserTabIcon from "../icons/UserTabIcon";

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.profile}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: COLORS.primaryButton,
        tabBarInactiveTintColor: COLORS.tertiaryText,
        tabBarStyle: {
          backgroundColor: COLORS.whiteText,
        },
        tabBarLabelStyle: { marginBottom: 4 },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name={ROUTES.homeTab}
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <HomeTabIcon color={color} size={TABICONSIZE} />;
          },
          title: "Home",
        }}
      />
      <Tab.Screen
        name={ROUTES.trophyTab}
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <TrophyTabIcon color={color} size={TABICONSIZE} />;
          },
          title: "Leagues",
        }}
      />
      <Tab.Screen
        name={ROUTES.searchTab}
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <SearchTabIcon color={color} size={TABICONSIZE} />;
          },
          title: "Research",
        }}
      />
      <Tab.Screen
        name={ROUTES.leagueTab}
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <LeagueTabIcon color={color} size={TABICONSIZE} />;
          },
          title: "Leaderboard",
        }}
      />
      <Tab.Screen
        name={ROUTES.userTab}
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return <UserTabIcon color={color} size={TABICONSIZE} />;
          },
          title: "Profile",
        }}
      />
    </Tab.Navigator>
  );
}

export { BottomTabNavigation };
