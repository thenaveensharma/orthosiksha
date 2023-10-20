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
      title: "Lecture Bytes",
      navigate: "/videos/videos",
    },
    {
      id: 2,
      title: "quick notes",
      navigate: "/quick_notes",
    },
    {
      id: 3,
      title: "Questions Bank",
      navigate: "/questions_bank",
    },
    {
      id: 4,
      title: "Case Scenarios",
      navigate: "/case_scenarios",
    },
    {
      id: 5,
      title: "E-Content Links",
      navigate: "/e_content_links",
    },
    {
      id: 16,
      title: "OS Community",
      navigate: "os_community",
    },
  ];
  function handlePress() {
    // router.push("/video/" + id);
    Linking.canOpenURL("https://youtu.be/B0bb8q12KOg?si=HGLN3W3a5Eu3DUvd")
      .then((supported) => {
        if (supported) {
          return Linking.openURL(
            "https://youtu.be/B0bb8q12KOg?si=HGLN3W3a5Eu3DUvd",
          );
        } else {
          return Linking.openURL("https://www.youtube.com");
        }
      })
      .catch((err) => console.error("An error occurred", err));
    // Linking.openURL("instagram://user?username=apple").catch(() => {
    //   Linking.openURL("https://www.instagram.com/apple");
    // });
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
              onPress={() => handlePress(item.id)}
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
