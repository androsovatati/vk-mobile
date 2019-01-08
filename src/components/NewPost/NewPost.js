import React, { Component } from "react";
import { Wrapper, AddPost, AddPostText, Button } from "./NewPost.styles";
import UserPlaceholder from "../UserPlaceholder";
import { GRAY } from "../../constants/colors";
import Store from "../../store/Store";
import { observer } from "mobx-react";
import { observable, computed } from "mobx";
import LiveIcon from "../../components/Icons/LiveIcon";
import GalleryIcon from "../../components/Icons/GalleryIcon";

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
          <GalleryIcon color={GRAY} />
        </Button>
        <Button>
          <LiveIcon color={GRAY} />
        </Button>
      </Wrapper>
    );
  }
}

export default NewPost;
