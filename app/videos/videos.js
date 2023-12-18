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
import Header from "../../components/common/header/Header";
const Home = () => {
  const DATA = [
    {
      id: 1,
      title: "Basics of biomechanics",
      link: "https://www.youtube.com/watch?v=MQPaNMNg_Sc",
    },
    {
      id: 2,
      title: "Myofunctional appliance",
      link: "https://youtu.be/kyfwGHb_2Ig?si=LdCDyo4v4XBEzPD0",
    },
    {
      id: 3,
      title: "More on YouTube",
      link: "https://youtube.com/playlist?list=PLc-i0T3_PG6Tjx-tjV49BYP6CbvdOJlct&si=gTbj4mee4O4bnS2U",
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
      <Header headerTitle={"Lecture Bytes"} />
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
