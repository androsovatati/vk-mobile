import React from "react";
import { TextInput } from "./Input.styled";

const Input = props => <TextInput {...props} onChange={props.onChange} />;

export default Input;
