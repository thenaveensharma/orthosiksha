import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Linking,
  Button,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../../constants";
import { Image } from "react-native";
import { useState } from "react";
const Questions_bank = () => {
  const router = useRouter();
  const questions = [
    {
      id: 1,
      title: "What is your pet name?",
      optionA: "Jazz",
      optionB: "Jessy",
      optionC: "Alex",
      optionD: "Albert",
      rightOption: "Alex",
    },
    {
      id: 2,
      title: "Please select age of your pet with date of birth ?",
      optionA: "Jazz",
      optionB: "Jessy",
      optionC: "Alex",
      optionD: "Albert",
      rightOption: "Alex",
    },
  ];
  function handlePress(question) {
    console.log(
      "🚀 ~ file: questions_bank.js:36 ~ handlePress ~ question:",
      question,
    );
    router.push({ pathname: "/questions_bank/MCQ", params: question });
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
          headerTitle: "Question Bank",
          headerTitleAlign: "center",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {questions.map((question, index) => (
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
              onPress={() => handlePress(question)}
            >
              <View
                style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 25,
                  margin: 5,
                  flex: 1,
                  flexDirection: "row",
                  alignquestions: "center",
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
                    width: "100%",
                    flexWrap: "wrap",
                    flexShrink: 1,
                    flexGrow: 1,
                  }}
                >
                  {question?.title}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Questions_bank;
