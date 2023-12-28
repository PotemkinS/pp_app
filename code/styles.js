import { StyleSheet, Dimensions } from "react-native";

export const gStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(211, 214, 219)",
    alignContent: "center",
  },

  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },

  scanCameraContainer: {
    flex: 1,
  },
  cameraContainer: {
    flex: 1,
  },
  fixedRatio: {
    flex: 1,
  },

  bottomContainer: {
    height: 70,
    position: "absolute",
    bottom: 10,
    padding: 10,
    backgroundColor: "dimgray",
    width: "96%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },

  text: {
    marginTop: 10,
    fontSize: 20,
    alignSelf: "center",
  },

  info: {
    flexDirection: "row",
  },

  main: {
    width: "90%",
    height: 500,
    backgroundColor: "rgb(229, 233, 238)",
    borderRadius: 10,
    alignSelf: "center",
  },

  infoTitle: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
    alignSelf: "flex-start",
  },

  infoValues: {
    marginLeft: 20,
    width: "40%",
    alignSelf: "flex-start",
  },

  titleText: {
    marginTop: 60,
    marginBottom: 40,
    textAlign: "center",
    fontSize: 40,
  },

  textInput: {
    alignSelf: "center",
    textAlign: "center",
    width: "50%",
    marginTop: 10,
    borderRadius: 10,
    alignSelf: "center",
  },

  scanContainer: {
    alignSelf: "center",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height / 3,
    padding: 20,
    flexDirection: "row",
    width: "80%",
  },

  confirmationButton: {
    alignSelf: "center",
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 20,
    fontSize: 20,
    width: "50%",
    height: 55,
  },

  scanButton: {
    width: "40%",
    fontSize: 15,
    marginTop: 0,
  },

  testsContainer: {
    margin: 30,
    width: "80%",
    backgroundColor: "rgb(229, 233, 238)",
    borderRadius: 10,
    alignSelf: "center",
  },

  shadow: {
    borderRadius: 10,
    backgroundColor: "rgb(229, 233, 238)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.27,
    shadowRadius: 10.65,
    elevation: 6,
  },

  wideButton: {
    width: 250,
  },

  button: {
    flex: 0.1,
    padding: 10,
    alignSelf: "flex-end",
    alignItems: "center",
  },
});
