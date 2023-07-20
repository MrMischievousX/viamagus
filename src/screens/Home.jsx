import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../constants/colors";
import {
  ChartIcon,
  ClockIcon,
  CoinIcon,
  DownArrowIcon,
  InfoIcon,
  UpArrowIcon,
  UserIcon,
} from "../svgs";
import { BannerBg } from "../images";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Today’s Games</Text>
      <View style={styles.main}>
        <ImageBackground
          resizeMode="cover"
          style={styles.bgImg}
          source={BannerBg}
        >
          <View style={styles.topView}>
            <View style={styles.startView}>
              <Text style={styles.underText}>Under or Over</Text>
              <InfoIcon style={styles.icon} />
            </View>
            <View style={styles.midView}>
              <Text style={styles.startText}>Starting in</Text>
              <ClockIcon style={styles.icon} />
              <Text style={styles.timeText}>03:23:12</Text>
            </View>
          </View>
          <View>
            <Text style={styles.newsHeading}>Bitcoin price will be under</Text>
            <Text style={styles.newsTime}>
              <Text style={{ fontWeight: "700", fontFamily: "mrt-bold" }}>
                $24,524
              </Text>{" "}
              at 7 a ET on 22nd Jan’21
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.prizeView}>
          <View>
            <Text style={styles.prizeText}>Prize Pool</Text>
            <Text style={styles.prizeValueText}>$12,000</Text>
          </View>
          <View>
            <Text style={styles.prizeText}>Under</Text>
            <Text style={styles.prizeValueText}>3.25x</Text>
          </View>
          <View>
            <Text style={styles.prizeText}>Over</Text>
            <Text style={styles.prizeValueText}>1.25x</Text>
          </View>
          <View>
            <Text style={styles.prizeText}>Entry Fees</Text>
            <View style={[styles.flexRow, { alignSelf: "flex-end" }]}>
              <Text style={{ ...styles.prizeValueText, textAlign: "right" }}>
                5
              </Text>
              <CoinIcon style={{ marginLeft: 8 }} />
            </View>
          </View>
        </View>
        <Text style={styles.predictionText}>What’s your prediction?</Text>
        <View style={styles.secondView}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate("update");
            }}
            style={[
              styles.buttonView,
              { backgroundColor: COLORS.secondaryButton },
            ]}
          >
            <View style={styles.btnViewIcon}>
              <DownArrowIcon />
              <Text style={styles.btnText}>Under</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate("update");
            }}
            style={[
              styles.buttonView,
              { backgroundColor: COLORS.primaryButton },
            ]}
          >
            <View style={styles.btnViewIcon}>
              <UpArrowIcon />
              <Text style={styles.btnText}>Over</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.thirdView}>
          <View style={styles.playerView}>
            <View style={styles.flexRow}>
              <UserIcon style={{ marginRight: 8 }} />
              <Text style={styles.playerText}>355 Players</Text>
            </View>
            <View style={styles.flexRow}>
              <ChartIcon style={{ marginRight: 8 }} />
              <Text style={styles.playerText}>View chart</Text>
            </View>
          </View>
          <View style={styles.progressView}>
            <View style={styles.failureBar} />
            <View style={styles.successBar} />
          </View>
          <View style={styles.predictedView}>
            <Text style={styles.predictedText}>232 predicted under</Text>
            <Text style={styles.predictedText}>123 predicted over</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    backgroundColor: "transparent",
  },
  main: {
    width: "100%",
    marginTop: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    overflow: "hidden",
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.primaryText,
    fontFamily: "avr-semi",
  },
  bgImg: {
    padding: 16,
    gap: 16,
  },
  topView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  startView: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 14,
    height: 14,
  },
  midView: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  timeText: {
    color: COLORS.primaryLightPurple,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "mrt-medium",
  },
  underText: {
    color: COLORS.primaryLightPurple,
    fontWeight: "600",
    textTransform: "uppercase",
    fontSize: 12,
    fontFamily: "mrt-semi",
  },
  startText: {
    color: COLORS.secondaryLightPurple,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "mrt-medium",
  },
  newsHeading: {
    color: COLORS.primaryLightPurple,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 19,
    fontFamily: "mrt-medium",
  },
  newsTime: {
    color: COLORS.whiteText,
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 19,
  },
  prizeText: {
    color: COLORS.tertiaryText,
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 19,
    textTransform: "uppercase",
    fontFamily: "mrt-medium",
  },
  prizeValueText: {
    color: COLORS.primaryText,
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase",
    fontFamily: "avr-semi",
    marginTop: 4,
  },
  predictionText: {
    marginTop: 20,
    color: COLORS.secondaryText,
    fontSize: 14,
    fontWeight: "600",
    paddingHorizontal: 16,
    fontFamily: "mrt-semi",
  },
  prizeView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 16,
  },
  playerText: {
    color: COLORS.secondaryText,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "mrt-semi",
  },
  predictedText: {
    color: COLORS.tertiaryText,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "mrt-medium",
  },
  secondView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
    paddingHorizontal: 16,
  },
  buttonView: {
    height: 40,
    width: 148,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.whiteText,
    fontFamily: "mrt-semi",
  },
  thirdView: {
    paddingHorizontal: 16,
    marginTop: 20,
    backgroundColor: COLORS.primaryBackground,
    paddingVertical: 20,
  },
  playerView: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  progressView: {
    height: 10,
    width: "100%",
    marginTop: 14,
    borderRadius: 10,
    flexDirection: "row",
    overflow: "hidden",
  },
  failureBar: {
    width: "70%",
    backgroundColor: COLORS.failure,
    height: "100%",
  },
  successBar: {
    width: "30%",
    backgroundColor: COLORS.success,
    height: "100%",
  },
  predictedView: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 12,
  },
  btnViewIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
