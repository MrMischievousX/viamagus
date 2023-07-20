import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { COLORS } from "../constants/colors";
import CustomWheelPicker from "./CustomWheelPicker";
import { CoinIcon } from "../svgs";

const BottomSheetView = ({ bottomSheetRef, navigation }) => {
  // variables
  const snapPoints = useMemo(() => ["56%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {}, []);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      enableOverDrag
      animateOnMount
      enablePanDownToClose
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={(backdropProps) => (
        <BottomSheetBackdrop
          {...backdropProps}
          disappearsOnIndex={-1}
          opacity={1}
          enableTouchThrough
        />
      )}
      backgroundStyle={{ backgroundColor: COLORS.whiteText }}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>Your Prediction is Under</Text>
        <Text style={styles.ticket}>Entry tickets</Text>
        <CustomWheelPicker />
        <Text style={styles.winText}>You can win</Text>
        <View style={styles.prizeView}>
          <Text style={styles.prizeText}>$2000</Text>
          <View style={styles.optionView}>
            <Text style={styles.totalText}>Total</Text>
            <CoinIcon />
            <Text style={styles.amount}>5</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.5}
          onPress={() => navigation?.navigate("profile")}
        >
          <Text style={styles.btnText}>Submit my prediction</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.primaryButton,
    width: "100%",
    marginTop: 28,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "mrt-semi",
    color: COLORS.whiteText,
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 16,
  },
  heading: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.primaryText,
    fontFamily: "mrt-semi",
  },
  ticket: {
    fontSize: 12,
    fontWeight: "600",
    color: COLORS.secondaryText,
    fontFamily: "mrt-semi",
    marginTop: 24,
    textTransform: "uppercase",
  },
  winText: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "mrt-medium",
    color: COLORS.tertiaryText,
  },
  prizeView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 4,
  },
  prizeText: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "mrt-semi",
    color: COLORS.greenText,
  },
  optionView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  totalText: {
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "mrt-medium",
    color: COLORS.secondaryText,
  },
  amount: {
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "mrt-medium",
    color: COLORS.primaryText,
  },
});

export default BottomSheetView;
