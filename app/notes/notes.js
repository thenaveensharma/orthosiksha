import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../../constants";
import { Image } from "react-native";
import PICS from "../../components/common/PHOTOS";
import { Notes } from "../../constants/Notes";
const NotesComp = () => {
  const router = useRouter();

  function handlePress(pdfData) {
    router.push("/notes/" + pdfData);
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
          headerTitle: "Quick Notes",
          headerTitleAlign: "center",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
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
          {Object.keys(Notes).map((item, index) => (
            <View
              style={{
                width: "48%",
                height: "auto",
              }}
              key={index}
            >
              <TouchableOpacity
                style={{ width: "100%", backgroundColor: COLORS.lightWhite }}
                onPress={() => handlePress(item)}
              >
                <View
                  style={{
                    backgroundColor: COLORS.lightWhite,

                    borderColor: COLORS.primary,
                    borderWidth: 1,
                    paddingBottom: 2,
                    marginBottom: SIZES.medium,
                  }}
                >
                  <Image
                    source={PICS[1].link}
                    resizeMode="contain"
                    style={{
                      width: "100%",
                      height: 300,
                    }}
                  />
                  <Text
                    style={{
                      color: "black",
                      fontSize: SIZES.medium,
                      textAlign: "center",
                    }}
                  >
                    {item}
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

export default NotesComp;
