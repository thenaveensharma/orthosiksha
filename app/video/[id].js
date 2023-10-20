import { Stack, useGlobalSearchParams, useSearchParams } from "expo-router";
import { View, SafeAreaView, ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { COLORS } from "../../constants";

export default function Player() {
  const params = useGlobalSearchParams();
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
          headerTitle: "",
          headerTitleAlign: "center",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 600 }}>
          <YoutubePlayer height={300} videoId={params?.id} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
