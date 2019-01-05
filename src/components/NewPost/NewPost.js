import React, { Component } from "react";
import { Wrapper, AddPost, AddPostText, Button } from "./NewPost.styles";
import UserPlaceholder from "../UserPlaceholder";
import Icon from "react-native-vector-icons/FontAwesome5";
import { GRAY } from "../../constants/colors";
import Store from "../../store/Store";
import { observer } from "mobx-react";
import { observable, computed } from "mobx";

@observer
class NewPost extends Component {
  render() {
    return (
      <Wrapper>
        <UserPlaceholder size={30} />
        <AddPost>
          <AddPostText>Что у Вас нового?</AddPostText>
        </AddPost>
        <Button>
          <Icon name="image" size={25} color={GRAY} />
        </Button>
        <Button>
          <Icon name="dot-circle" size={22} color={GRAY} />
        </Button>
      </Wrapper>
    );
  }
}

export default NewPost;
