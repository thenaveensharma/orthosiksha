import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import { Image } from "react-native";
import Welcome from "../components/home/welcome/Welcome";
const Home = () => {
  const router = useRouter();

  const DATA = [
    {
      id: 1,
      title: "Lecture Bytes",
      navigate: "/videos/videos",
      link: images.Video,
    },
    {
      id: 2,
      title: "Quick Notes",
      navigate: "/notes/notes",
      link: images.Notes,
    },
    {
      id: 3,
      title: "Questions Bank",
      navigate: "/questions_bank/questions_bank",
      link: images.Questions,
    },
    {
      id: 4,
      title: "Case Scenarios",
      navigate: "/cases/cases",
      link: images.Cases,
    },
    {
      id: 5,
      title: "E-Content Links",
      navigate: "/e_content_links",
      link: images.EContent,
    },
    {
      id: 6,
      title: "OS Community",
      navigate: "os_community",
      link: images.Community,
    },
  ];
  function handlePress(index) {
    const path = DATA[index]["navigate"];
    router.push(path);
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
          headerTitle: "Orthoshiksha",
          headerTitleAlign: "center",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Welcome />
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {DATA.map((item, index) => (
            <View
              style={{
                width: "48%",
                height: 200,
                borderRadius: 30,
              }}
              key={item.id}
            >
              <TouchableOpacity
                style={{ width: "100%", backgroundColor: COLORS.lightWhite }}
                onPress={() => handlePress(index)}
              >
                <View
                  style={{
                    backgroundColor: COLORS.lightWhite,
                    borderRadius: 25,
                    borderColor: COLORS.primary,
                    borderWidth: 1,
                    paddingBottom: 2,
                  }}
                >
                  <Image
                    source={item.link}
                    resizeMode="contain"
                    style={{
                      width: "100%",
                      height: 150,
                      borderRadius: 30,
                    }}
                  />
                  <Text
                    style={{
                      color: "black",
                      fontSize: SIZES.medium,
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
