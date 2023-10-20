import { View, Text, TouchableOpacity, Image } from "react-native";
import { SIZES, SHADOWS, COLORS, FONT } from "../../../constants";
const Welcome = () => {
  return (
    <View
      style={{
        width: "95%",
        padding: SIZES.medium,
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.medium,
        justifyContent: "space-between",
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
        margin: 10,
      }}
    >
      <Text
        style={{
          fontSize: SIZES.xLarge,
          color: COLORS.primary,
          margin: SIZES.small / 1.5,
        }}
        numberOfLines={1}
      >
        Hi, Doctor!
      </Text>

      {/* <View
        style={{
          backgroundColor: COLORS.gray,
          padding: 10,
          borderRadius: 15,
          marginTop: SIZES.medium,
          marginBottom: SIZES.xSmall,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: SIZES.large,
          }}
        >
          Categories
        </Text>
      </View> */}
    </View>
  );
};

export default Welcome;
