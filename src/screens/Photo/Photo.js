import React, { Component } from "react";
import { RNCamera } from "react-native-camera";
import { Container, Camera } from "./Photo.styled";

class Photo extends Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: false
  };

  render() {
    return (
      <Container>
        <Camera
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={"Permission to use camera"}
          permissionDialogMessage={
            "We need your permission to use your camera phone"
          }
        />
      </Container>
    );
  }
}

export default Photo;
