import React from "react";
import { Container, TextInput } from "./styles";

const Input: React.FC = (props) => {
  return (
    <Container>
      <TextInput {...props} />
    </Container>
  );
};

export default Input;
