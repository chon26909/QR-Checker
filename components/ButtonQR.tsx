import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "./colors";

const ButtonQR = (props: any) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        // position: "absolute",
        bottom: 20,
        backgroundColor: colors.white,
        width: 85,
        height: 85,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: colors.gray,
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>สแกน</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonQR;
