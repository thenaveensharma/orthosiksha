import React from "react";
import { TouchableOpacity, Image, Text } from "react-native";

import styles from "./screenheader.style";
import { useRouter } from "expo-router";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  const router = useRouter();

  function handlePress() {
    router.push("/videos/" + 1);
  }
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
    // <></>
  );
};

export default ScreenHeaderBtn;
