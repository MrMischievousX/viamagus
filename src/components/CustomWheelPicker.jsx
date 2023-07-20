import React, { useState } from "react";
import { View, Text, Platform } from "react-native";

import Picker from "@uynguyen505/react-native-wheel-picker";
import { WIDTH } from "../constants/layout";
import { COLORS } from "../constants/colors";
var PickerItem = Picker.Item;

const wheelData = Array(100)
  .fill(0)
  .map((item, index) => index.toString());

const WheelPicker = () => {
  const [selectedItem, setSelectedItem] = useState(14);

  return (
    <View
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Platform.OS == "ios" && (
        <Picker
          selectedTextColor={COLORS.primaryText} // Work for Android
          lineColor="#000000" //to set top and bottom line color (Without gradients)
          lineGradientColorFrom="#008000" //to set top and bottom starting gradient line color
          lineGradientColorTo="#FF5733" //to set top and bottom ending gradient
          selectedValue={selectedItem}
          itemStyle={{
            color: COLORS.primaryText,
            fontSize: 26,
          }}
          onValueChange={(index) => setSelectedItem(index)}
          style={{ width: "100%" }}
        >
          {wheelData.map((value, i) => (
            <PickerItem
              label={value}
              value={i}
              key={i}
              color={COLORS.primaryText}
            />
          ))}
        </Picker>
      )}
    </View>
  );
};

export default WheelPicker;
