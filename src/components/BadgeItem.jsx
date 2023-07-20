import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import { GameItem } from "../svgs";

const BadgeItem = ({ params }) => (
  <View style={styles.container}>
    <GameItem />
    <View style={styles.headView}>
      <Text style={styles.title}>First Stripe Earned</Text>
      <Text style={styles.detail}>
        Top 10% of highest spending players in a month
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  headView: {
    width: "70%",
    gap: 4,
  },
  container: {
    backgroundColor: COLORS.whiteText,
    marginHorizontal: 16,
    padding: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "mrt-semi",
    color: COLORS.primaryText,
  },
  detail: {
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "mrt-medium",
    color: COLORS.secondaryText,
    lineHeight: 20,
  },
});

export default BadgeItem;
