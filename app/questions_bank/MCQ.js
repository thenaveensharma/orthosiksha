import {
  View,
  Text,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import {
  Stack,
  useGlobalSearchParams,
  useLocalSearchParams,
} from "expo-router";
import { COLORS } from "../../constants";

export default function MCQ() {
  const routeParams = useLocalSearchParams();
  const question = routeParams;
  const [selectedOption, setSelectedOption] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const handleOptionSelected = (option) => {
    setSelectedOption(option);
    setIsCorrect(null);
  };

  const checkAnswer = () => {
    if (selectedOption === question.rightOption) {
      // The user answered the question correctly.
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      // The user answered the question incorrectly.
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backGroundColor: COLORS.gray,
          },
          headerShadowVisible: true,
          headerTitle: String(question?.id),
          headerTitleAlign: "center",
        }}
      />
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
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <TouchableOpacity
          key={question?.optionA}
          style={{
            width: "100%",
            padding: 10,
            backgroundColor:
              selectedOption === question?.optionA ? "gray" : "white",
          }}
          onPress={handleOptionSelected.bind(null, question?.optionA)}
        >
          <Text>A. {question?.optionA}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          key={question?.optionB}
          style={{
            width: "100%",
            padding: 10,
            backgroundColor:
              selectedOption === question?.optionB ? "gray" : "white",
          }}
          onPress={handleOptionSelected.bind(null, question?.optionB)}
        >
          <Text>B. {question?.optionB}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          key={question?.optionC}
          style={{
            width: "100%",
            padding: 10,
            backgroundColor:
              selectedOption === question?.optionC ? "gray" : "white",
          }}
          onPress={handleOptionSelected.bind(null, question?.optionC)}
        >
          <Text>C. {question?.optionC}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          key={question?.optionD}
          style={{
            width: "100%",
            padding: 10,
            backgroundColor:
              selectedOption === question?.optionD ? "gray" : "white",
          }}
          onPress={handleOptionSelected.bind(null, question?.optionD)}
        >
          <Text>D. {question?.optionD}</Text>
        </TouchableOpacity>
      </View>
      <Button
        title={
          isCorrect == null
            ? "Check Answer"
            : isCorrect
            ? "Correct Answer"
            : "Wrong Answer"
        }
        color={isCorrect == null ? "blue" : isCorrect ? "green" : "red"}
        onPress={checkAnswer}
      />
    </SafeAreaView>
  );
}
