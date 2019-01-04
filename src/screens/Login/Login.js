import React, { Component } from "react";
import LoginHeader from "./LoginHeader";
import Input from "../../components/Input";
import {
  Container,
  LoginForm,
  Divider,
  ErrorContainer,
  ErrorMessage,
  ForgetPassword
} from "./Login.styles";
import Store from "../../store";
import Icon from "react-native-vector-icons/FontAwesome5";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { GRAY } from "../../constants/colors";

@observer
export default class Login extends Component {
  @observable username = "";
  @observable password = "";
  @observable errorMessage = "";

  get isValidForm() {
    return this.username && this.password;
  }

  onUsernameChange = value => {
    this.username = value;
  };

  onPasswordChange = value => {
    this.password = value;
  };

  onLogin = async () => {
    try {
      const id = await Store.login({
        username: this.username,
        password: this.password
      });
      if (id) {
        this.props.navigation.navigate("Main");
      }
    } catch (error) {
      if (error.description) {
        this.errorMessage = error.description;
      } else {
        this.errorMessage = "Произошла ошибка. Попробуйте позже";
      }
      setTimeout(() => {
        this.errorMessage = "";
      }, 1500);
    }
  };

  render() {
    return (
      <Container>
        <LoginHeader disabledLogin={!this.isValidForm} onLogin={this.onLogin} />
        <LoginForm>
          {!!this.errorMessage && (
            <ErrorContainer>
              <Icon name="times-circle" size={25} color={GRAY} solid />
              <ErrorMessage>{this.errorMessage}</ErrorMessage>
            </ErrorContainer>
          )}
          <Input
            textContentType={"emailAddress"}
            keyboardType={"email-address"}
            placeholder="Почта или телефон"
            value={this.username}
            onChangeText={this.onUsernameChange}
          />
          <Divider />
          <Input
            textContentType={"password"}
            secureTextEntry={true}
            placeholder="Пароль"
            value={this.password}
            onChangeText={this.onPasswordChange}
          />
          <ForgetPassword>Забыли пароль?</ForgetPassword>
        </LoginForm>
      </Container>
    );
  }
}
