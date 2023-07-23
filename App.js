import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useGallery } from "./src/use-gallery";

export default function App() {
  const { images, pickImage } = useGallery();

  const onPressOpenGalley = () => {
    pickImage();
  };

  const renderItem = ({ item, index }) => {
    return <Image source={{ uri: item }} style={{ width: 200, height: 200 }} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="갤러리 열기" onPress={onPressOpenGalley} />
      <FlatList data={images} renderItem={renderItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
});
