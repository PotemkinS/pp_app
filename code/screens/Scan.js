import {
  View,
  Button,
  Image,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";
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
  const [image, setImage] = useState();
  const [test, setTest] = useState({
    result: {
      test_id: 123,
      student_id: "noStudent",
      class_id: "",
      score: "",
      answers: [
        "Василий петрович очень любил муму и потому решил не использовать тетрогидрохлоридвинил ",
        "да",
      ],
    },
    status_code: 123,
  });

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const loadTestUri = "http://91.107.124.140:8000/testresult/";
  function showAnswers() {
    return test.result.answers.map((answer, index) => {
      const key = index;
      return (
        <Text key={key} style={gStyles.text}>
          {index + 1}: {answer}
        </Text>
      );
    });
  }

  const permisionFunction = async () => {
    const cameraPermission = await Camera.requestCameraPermissionsAsync();

    setCameraPermission(cameraPermission.status === "granted");

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();

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
      let result = await camera.takePictureAsync();
      if (result.cancelled) {
        return;
      }
      setImageUri(result.uri);
      setMakingPhoto(false);
    }
  };

  const sendPicture = () => {
    let formData = new FormData();
    formData.append("file", {
      uri: imageUri,
      name: "image.jpg",
      filename: "imageName.jpg",
      type: "image/jpg",
    });
    formData.append("Content-Type", "image/jpg");
    setImage(formData);

    axios(loadTestUri, {
      method: "post",
      headers: {
        "content-type": "multipart/form-data",
      },
      data: formData,
    }).then((resp) => setTest(JSON.parse(resp.request._response)));
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
          <View
            style={[
              !(test.result.student_id === "noStudent")
                ? gStyles.scanContainerResults
                : gStyles.scanContainerNoResults,
              gStyles.shadow,
            ]}
          >
            {!(test.result.student_id === "noStudent") ? (
              <View>
                <Text style={[gStyles.text]}>
                  Класс: {test.result.class_id}, Ученик:{" "}
                  {test.result.student_id}
                </Text>
                <Text style={[gStyles.text]}>
                  Результат: {test.result.score}
                </Text>
                <Text style={[gStyles.text]}>Ответы:</Text>
                <ScrollView style={[gStyles.shadow, { height: 200 }]}>
                  {showAnswers()}
                </ScrollView>
              </View>
            ) : (
              <Text></Text>
            )}
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
              onPress={sendPicture}
            >
              Проверить
            </Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );
}
