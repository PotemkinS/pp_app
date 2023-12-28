import { View, Button, Image, Text, ImageBackground } from "react-native";
import { gStyles } from "../styles";
import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

export default function Scan({ route }) {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const [madePhoto, setMadePhoto] = useState(false);
  const [makingPhoto, setMakingPhoto] = useState(false);
  const { token } = route.params;
  const [formData, setFormData] = useState();
  const [fde, setFde] = useState();

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const loadTestUri = "http://91.107.124.140:8000/testresult/";

  const permisionFunction = async () => {
    // here is how you can get the camera permission
    const cameraPermission = await Camera.requestCameraPermissionsAsync();

    setCameraPermission(cameraPermission.status === "granted");

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log(imagePermission.status);

    setGalleryPermission(imagePermission.status === "granted");

    if (
      imagePermission.status !== "granted" &&
      cameraPermission.status !== "granted"
    ) {
      alert("Permission for media access needed.");
    }
  };

  useEffect(() => {
    permisionFunction();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync();
      let filename = data.uri.split("/").pop();
      setMadePhoto(true);
      setMakingPhoto(false);
      setImageUri(data.uri);
      console.log("imageUri");
      console.log(imageUri);
      console.log(data.path);
      console.log("imageUri");
      const fd = new FormData();
      setFde(fd);
      fd.append("file", {
        uri: imageUri,
      });
      setFormData(fd);
      console.log(JSON.stringify(fd));
      console.log(formData);
    }
  };

  return (
    <View style={gStyles.container}>
      <ImageBackground style={[{ flex: 1 }]} source={{ uri: imageUri }}>
        {makingPhoto ? (
          <View style={gStyles.scanCameraContainer}>
            <View style={gStyles.cameraContainer}>
              <Camera
                ref={(ref) => setCamera(ref)}
                style={gStyles.fixedRatio}
                type={type}
                ratio="4:3"
              />
            </View>
            <Button
              style={gStyles.button}
              title={"Сделать фото бланка"}
              onPress={takePicture}
            />
          </View>
        ) : (
          <View style={[gStyles.scanContainer, gStyles.shadow]}>
            <Text
              style={[
                gStyles.confirmationButton,
                gStyles.shadow,
                gStyles.scanButton,
              ]}
              onPress={() => setMakingPhoto(true)}
            >
              {madePhoto ? "Ещё раз" : "Сделать фото"}
            </Text>
            <Text
              style={[
                gStyles.confirmationButton,
                gStyles.shadow,
                gStyles.scanButton,
              ]}
              onPress={() => (
                console.log(JSON.stringify("/////////////////")),
                console.log(JSON.stringify(fde)),
                console.log(JSON.stringify(formData)),
                console.log(JSON.stringify(imageUri)),
                axios
                  .post(loadTestUri, {
                    headers: {
                      "Content-Type": "multipart/form-data",
                    },
                    formData,
                  })
                  .then((resp) =>
                    console.log(JSON.stringify(resp.request._response))
                  )
              )}
            >
              Проверить
            </Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );
}
