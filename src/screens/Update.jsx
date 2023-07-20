import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { WIDTH } from "../constants/layout";
import { COLORS } from "../constants/colors";
import {
  BlueDownArrowIcon,
  BlueUpArrowIcon,
  ChartIcon,
  ChevronDownIcon,
  GreyClockIcon,
  UserIcon,
} from "../svgs";
import BottomSheetView from "../components/BottomSheetView";
import { useEffect, useRef } from "react";
import { UpdateBg } from "../images";

export default function Update({ navigation }) {
  const bottomSheetRef = useRef(null);

  const openSheet = () => {
    bottomSheetRef?.current?.expand();
  };

  useEffect(() => {
    setTimeout(() => {
      openSheet();
    }, 100);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Today’s Games</Text>
        <View style={styles.main}>
          <View style={styles.bgView}>
            <View style={styles.topView}>
              <View style={styles.startView}>
                <Text style={styles.underText}>Under or Over</Text>
              </View>
              <View style={styles.midView}>
                <Text style={styles.startText}>Starts in</Text>
                <GreyClockIcon style={styles.icon} />
                <Text style={styles.timeText}>03:23:12</Text>
              </View>
            </View>
            <View style={{ gap: 8 }}>
              <Text style={styles.newsHeading}>
                Shifu predicts Bitcoin’s value will reach
              </Text>
              <Text style={styles.newsTime}>$24524</Text>
            </View>
          </View>
          <View style={styles.secondView}>
            <View style={styles.flexRow}>
              <Text style={styles.midText}>232 chose under</Text>
              <Text style={styles.midText}>123 chose over</Text>
            </View>
            <View style={styles.progressView}>
              <View style={styles.failureBar} />
              <View style={styles.successBar} />
            </View>
            <View style={styles.flexRow}>
              <View
                style={{
                  ...styles.flexRow,
                  gap: 8,
                }}
              >
                <UserIcon />
                <Text style={styles.midSecondText}>355</Text>
              </View>
              <View style={styles.flexRow}>
                <ChartIcon />
                <Text
                  style={{
                    ...styles.midSecondText,
                    marginRight: 4,
                    marginLeft: 8,
                  }}
                >
                  View chart
                </Text>
                <ChevronDownIcon />
              </View>
            </View>
          </View>
          <ImageBackground
            source={UpdateBg}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 28,
              width: WIDTH - 32,
            }}
            resizeMode="cover"
          >
            <Text style={styles.betText}>Place your bet</Text>
            <View style={styles.prizeView}>
              <Text style={styles.poolText}>Prize Pool</Text>
              <Text style={styles.prizeText}>$12,000</Text>
            </View>
            <View style={styles.flexRow}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={openSheet}
                style={[styles.buttonView]}
              >
                <View style={styles.btnViewIcon}>
                  <BlueDownArrowIcon />
                  <Text style={styles.btnText}>Under</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={openSheet}
                style={[styles.buttonView]}
              >
                <View style={styles.btnViewIcon}>
                  <BlueUpArrowIcon />
                  <Text style={styles.btnText}>Over</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
      <BottomSheetView
        bottomSheetRef={bottomSheetRef}
        navigation={navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btnText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.btnText,
  },
  prizeView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 5,
    marginTop: 12,
    marginBottom: 20,
  },
  prizeText: {
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.goldText,
  },
  betText: {
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.whiteText,
  },
  buttonView: {
    height: 40,
    width: 148,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
    backgroundColor: COLORS.whiteText,
  },
  poolText: {
    fontSize: 12,
    fontWeight: "500",
    color: COLORS.whiteText,
  },
  btnViewIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  midText: {
    fontSize: 12,
    fontWeight: "500",
    color: COLORS.secondaryText,
  },
  midSecondText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.secondaryText,
  },
  secondView: {
    paddingHorizontal: 20,
    paddingVertical: 28,
    gap: 13,
  },
  container: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: "transparent",
  },
  main: {
    width: "100%",
    marginTop: 16,
    borderWidth: 1,
    borderColor: COLORS.secondaryBorder,
    borderBottomRightRadius: 9,
    borderBottomLeftRadius: 9,
    overflow: "hidden",
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.secondaryText,
    fontFamily: "avr-semi",
  },
  bgView: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 28,
    gap: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.secondaryBorder,
  },
  topView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  midView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  underText: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    color: COLORS.secondaryText,
    fontFamily: "mrt-semi",
  },
  startText: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.secondaryText,
  },
  timeText: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.secondaryText,
  },
  newsHeading: {
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.primaryText,
  },
  newsTime: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.primaryText,
  },
  progressView: {
    height: 10,
    borderRadius: 10,
    flexDirection: "row",
    overflow: "hidden",
  },
  failureBar: {
    width: "70%",
    backgroundColor: COLORS.firstBar,
    height: "100%",
  },
  successBar: {
    width: "30%",
    backgroundColor: COLORS.secondBar,
    height: "100%",
  },
});
