import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { COLORS } from "../../constants";
import Header from "../../components/common/header/Header";
import { useRouter } from "expo-router";
import { eContents } from "../../constants/eContents";
import { Image } from "react-native";
import Blog from "../../assets/images/Blog.png";
import Pdf from "../../assets/images/Pdf.png";
import Youtube from "../../assets/images/Youtube.png";

const index = () => {
  const router = useRouter();
  function handlePress(pdfData) {
    router.push("/eContent/" + pdfData);
  }
  function handlePressLink(link) {
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
      <Header headerTitle={"E-Content"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.keys(eContents).map((item, index) => (
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
              }}
              onPress={() => handlePress(item)}
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  margin: 5,
                  borderRadius: 10,
                  borderWidth: 1,
                  padding: 5,
                  backgroundColor: COLORS.lightWhite,
                }}
              >
                <Image
                  source={Pdf}
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: "cover", // or 'contain' or 'stretch' or 'center'
                    borderRadius: 10, // if you want to add rounded corners
                  }}
                />
                <Text
                  style={{
                    color: "black",
                    fontSize: 20,
                    textAlign: "left",
                    margin: 5,
                    padding: 5,
                    flex: 1,
                    flexWrap: "wrap",
                    flexShrink: 1,
                    flexGrow: 1,
                    fontFamily: "Gothic",
                  }}
                >
                  {item}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
        <View
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 30,
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
            }}
            onPress={() => handlePressLink("https://kevinobrienorthoblog.com/")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                margin: 5,
                borderRadius: 10,
                borderWidth: 1,
                padding: 5,
                backgroundColor: COLORS.lightWhite,
              }}
            >
              <Image
                source={Blog}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: "cover", // or 'contain' or 'stretch' or 'center'
                  borderRadius: 10, // if you want to add rounded corners
                }}
              />
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  textAlign: "left",
                  margin: 5,
                  padding: 5,
                  flex: 1,
                  flexWrap: "wrap",
                  flexShrink: 1,
                  flexGrow: 1,
                  fontFamily: "Gothic",
                }}
              >
                {"Orthodontic blog"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 30,
          }}
        >
          <TouchableOpacity
            style={{
              width: "100%",
            }}
            onPress={() =>
              handlePressLink(
                "https://youtube.com/playlist?list=PLakr0c0RdWSyusqVgXHp0YliOc4HG_UsU"
              )
            }
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                margin: 5,
                borderRadius: 10,
                borderWidth: 1,
                padding: 5,
                backgroundColor: COLORS.lightWhite,
              }}
            >
              <Image
                source={Youtube}
                style={{
                  width: 50,
                  height: 50,
                  resizeMode: "cover", // or 'contain' or 'stretch' or 'center'
                  borderRadius: 10, // if you want to add rounded corners
                }}
              />
              <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  textAlign: "left",
                  margin: 5,
                  padding: 5,
                  flex: 1,
                  flexWrap: "wrap",
                  flexShrink: 1,
                  flexGrow: 1,
                  fontFamily: "Gothic",
                }}
              >
                {"Mechanotherapy"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
