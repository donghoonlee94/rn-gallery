import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Alert } from "react-native";

export const useGallery = () => {
  const [images, setImage] = useState([]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      const lastId = images.length === 0 ? 0 : images[images.length - 1].id;
      const newImage = {
        id: lastId,
        uri: result.assets[0].uri,
      };
      setImage([...images, newImage]);
    }
  };

  const deleteImage = (id) => {
    Alert.alert("이미지를 삭제하시겠어요?", "", [
      { style: "cancel", text: "아니오" },
      {
        text: "네",
        onPress: () => {
          const newImages = images.filter((image) => image.id !== id);
          setImage(newImages);
        },
      },
    ]);
  };

  return {
    pickImage,
    images,
    deleteImage,
  };
};
