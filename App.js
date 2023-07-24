import { useState } from "react";
import {
  Alert,
  Button,
  Dimensions,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useGallery } from "./src/use-gallery";

const width = Dimensions.get("screen").width;
const columnSize = width / 3;

export default function App() {
  const { images, pickImage, deleteImage } = useGallery();

  const onPressOpenGalley = () => {
    pickImage();
  };

  const renderItem = ({ item: { id, uri }, index }) => {
    const onLongPress = () => {
      deleteImage(id);
    };

    return (
      <TouchableOpacity onLongPress={onLongPress}>
        <Image
          source={{ uri: uri }}
          style={{ width: columnSize, height: columnSize }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="갤러리 열기" onPress={onPressOpenGalley} />
      <FlatList data={images} renderItem={renderItem} numColumns={3} />
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
