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
import { Cases } from "../../constants/Cases";
import Header from "../../components/common/header/Header";
const CasesComp = () => {
  const router = useRouter();

  function handlePress(pdfData) {
    router.push("/cases/" + pdfData);
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Header headerTitle={"Case Scenarios"} />

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
          {Object.keys(Cases).map((item, index) => (
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
                    source={PICS[3].link}
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
                    {"Case " + (index + 1)}
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

export default CasesComp;
