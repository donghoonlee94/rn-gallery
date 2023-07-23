import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

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
      setImage([...images, result.assets[0].uri]);
    }
  };

  return {
    pickImage,
    images,
  };
};
