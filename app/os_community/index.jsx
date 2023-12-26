import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import Header from "../../components/common/header/Header";
import { COLORS } from "../../constants";
import Instagram from "../../assets/images/Instagram.png";
import Discord from "../../assets/images/Discord.png";
import Coder from "../../assets/images/Coder.png";
export default function index() {
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
      <Header headerTitle={"OS Community"} />

      <ScrollView showsVerticalScrollIndicator={false}>
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
              handlePressLink("https://www.instagram.com/ortho.shiksha")
            }
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                margin: 5,
                borderRadius: 10,
                borderWidth: 1,
                padding: 5,
                backgroundColor: COLORS.lightWhite,
              }}
            >
              <Image
                source={Instagram}
                style={{
                  width: 100,
                  height: 100,
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
                {"Connect on Instagram"}
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
              handlePressLink("https://discord.com/invite/n3Axc3Z9g8")
            }
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                margin: 5,
                borderRadius: 10,
                borderWidth: 1,
                padding: 5,
                backgroundColor: COLORS.lightWhite,
              }}
            >
              <Image
                source={Discord}
                style={{
                  width: 100,
                  height: 100,
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
                {"Connect on Discord"}
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
            onPress={() => handlePressLink("https://linktr.ee/shadow.dev")}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                margin: 5,
                borderRadius: 10,
                borderWidth: 1,
                padding: 5,
                backgroundColor: COLORS.lightWhite,
              }}
            >
              <Image
                source={Coder}
                style={{
                  width: 100,
                  height: 100,
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
                {"Connect to Developer"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
