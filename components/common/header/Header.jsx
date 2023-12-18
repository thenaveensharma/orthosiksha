import { Stack } from "expo-router";
import { COLORS } from "../../../constants";
const Header = (props) => {
  return (
    <Stack.Screen
      options={{
        headerStyle: {
          backGroundColor: COLORS.gray,
        },
        headerShadowVisible: true,
        headerTitle: "Untitled",
        headerTitleAlign: "center",
        ...props,
      }}
    />
  );
};

export default Header;
