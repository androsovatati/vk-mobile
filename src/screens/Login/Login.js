import React, { Component } from "react";
import LoginHeader from "./LoginHeader";
import Input from "../../components/Input";
import { Container, LoginForm, Divider } from "./Login.styles";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <LoginHeader />
        <LoginForm>
          <Input
            textContentType={"emailAddress"}
            keyboardType={"email-address"}
            placeholder="Почта или телефон"
          />
          <Divider />
          <Input
            textContentType={"password"}
            secureTextEntry={true}
            placeholder="Пароль"
          />
        </LoginForm>
      </Container>
    );
  }
}
