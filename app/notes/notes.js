import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../constants";
import { Image } from "react-native";
import { Notes } from "../../constants/Notes";
import Header from "../../components/common/header/Header";
import NOTES_THUMBNAILS from "../../constants/NotesThumbnails.js";
import { useFonts } from "expo-font";
const NotesComp = () => {
  const router = useRouter();
  const [loaded] = useFonts({
    Gothic: require("../../assets/fonts/GothicA1-Regular.ttf"),
  });
  if (!loaded) return null;

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
      <Header headerTitle={"Quick Notes"} />

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
                    height: 330,
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: SIZES.medium,
                      textAlign: "center",
                      textTransform: "uppercase",
                      fontFamily: "Gothic",
                    }}
                  >
                    {item}
                  </Text>
                  <Image
                    source={NOTES_THUMBNAILS[index]?.image}
                    resizeMode="contain"
                    style={{
                      width: "100%",
                      height: 300,
                    }}
                  />
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
