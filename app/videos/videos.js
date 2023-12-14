import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../../constants";
import { Image } from "react-native";
const Home = () => {
  const DATA = [
    {
      id: 1,
      title: "Basics of biomechanics",
      link: "https://www.youtube.com/watch?v=MQPaNMNg_Sc",
    },
  ];
  function handlePress(link) {
    Linking.canOpenURL(link)
      .then(() => {
        Linking.openURL(link);
      })
      .catch((err) => console.error("An error occurred", err))
      .finally(() => {
        Linking.openURL(link);
      });
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backGroundColor: COLORS.gray,
          },
          headerShadowVisible: true,
          headerTitle: "Lecture Bytes",
          headerTitleAlign: "center",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {DATA.map((item, index) => (
          <View
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 30,
            }}
            key={index}
          >
            <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: COLORS.lightWhite,
              }}
              onPress={() => handlePress(item.link)}
            >
              <View
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 25,
                  margin: 5,
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  borderWidth: 1,
                }}
              >
                <Image
                  source={images.Play}
                  style={{ width: 50, height: 50, margin: 5 }}
                ></Image>
                <Text
                  style={{
                    color: "black",
                    fontSize: 20,
                    textAlign: "left",
                    margin: 5,
                    padding: 5,
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
