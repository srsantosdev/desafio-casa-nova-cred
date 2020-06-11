import React, { useState } from "react";
import {
  Container,
  BackgroundImage,
  Logo,
  Opacity,
  ContainerForm,
  ContainerMenu,
  Menu,
  LoginButton,
  RegisterButton,
  OptionText,
  Form,
  Docs,
  Input,
  InputDocs,
  ForgotPassword,
  ForgotPasswordText,
  SubmitButton,
  SubmitText,
  Box,
} from "./styles";

const Login: React.FC = () => {
  const [page, setPage] = useState<string>("LOGIN");

  return (
    <Container>
      <BackgroundImage
        source={require("./../../assets/foto-8.png")}
        resizeMode="cover"
      >
        <Opacity />
        <Logo source={require("./../../assets/logo-casanova.png")} />
      </BackgroundImage>
      <ContainerForm>
        <ContainerMenu>
          <Menu>
            <LoginButton
              activeOpacity={1}
              disabled={page === "LOGIN"}
              onPress={() => setPage("LOGIN")}
            >
              <OptionText>Entrar</OptionText>
            </LoginButton>
            <RegisterButton
              activeOpacity={1}
              disabled={page === "REGISTER"}
              onPress={() => setPage("REGISTER")}
            >
              <OptionText>Cadastre-se</OptionText>
            </RegisterButton>
          </Menu>
        </ContainerMenu>
        <Form>
          {page === "REGISTER" ? (
            <>
              <Input placeholder="Nome" placeholderTextColor="#707070C6" />
              <Input placeholder="E-mail" placeholderTextColor="#707070C6" />
              <Docs>
                <InputDocs placeholder="RG" placeholderTextColor="#707070C6" />
                <InputDocs placeholder="CPF" placeholderTextColor="#707070C6" />
              </Docs>
              <Input
                placeholder="Senha"
                placeholderTextColor="#707070C6"
                secureTextEntry
              />

              <SubmitButton>
                <SubmitText>Criar Conta</SubmitText>
              </SubmitButton>
            </>
          ) : (
            <>
              <Input placeholder="E-mail" placeholderTextColor="#707070C6" />

              <Input placeholder="Senha" placeholderTextColor="#707070C6" />

              <Box>
                <ForgotPassword>
                  <ForgotPasswordText>Esqueci a senha</ForgotPasswordText>
                </ForgotPassword>
              </Box>

              <SubmitButton>
                <SubmitText>Entrar</SubmitText>
              </SubmitButton>
            </>
          )}
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default Login;
