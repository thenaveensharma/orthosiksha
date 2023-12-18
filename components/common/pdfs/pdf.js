import { View, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import Pdf from "react-native-pdf";
import Header from "../header/Header";
const PdfComponent = ({ pdfData }) => {
  const { width, height } = useWindowDimensions();

  const PdfResource = {
    // uri: "https://firebasestorage.googleapis.com/v0/b/orthosiksha.appspot.com/o/docs%2FNaveen_Kumar_Resume_SDE.pdf?alt=media&token=28831fe4-ce55-4deb-b2c0-ab46ff2ef06c ",
    uri: pdfData,
    cache: true,
  };
  return (
    <>
      <Header headerTitle={""} />
      <View style={styles.container}>
        <Pdf
          // trustAllCerts={false}
          source={PdfResource}
          style={[styles.pdf, { width, height }]}
          onLoadComplete={(numberOfPages, filePath) => {}}
          onPressLink={(url) => console.log(url)}
        />
      </View>
    </>
  );
};

export default PdfComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  pdf: {
    flex: 1,
  },
});
