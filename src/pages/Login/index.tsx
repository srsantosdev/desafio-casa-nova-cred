import React, { useState, useContext } from "react";
import { ActivityIndicator } from "react-native";
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

import AuthContext from "./../../contexts/auth";

const Login: React.FC = () => {
  const [page, setPage] = useState<string>("LOGIN");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const { signIn } = useContext(AuthContext);

  function handleSignIn() {
    setLoading(true);
    const credentials = {
      username: email,
      password,
    };
    signIn(credentials);
    setLoading(false);
  }

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
              <Input
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                placeholder="E-mail"
                placeholderTextColor="#707070C6"
                onChangeText={(text) => setEmail(text)}
              />

              <Input
                placeholder="Senha"
                placeholderTextColor="#707070C6"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
              />

              <Box>
                <ForgotPassword>
                  <ForgotPasswordText>Esqueci a senha</ForgotPasswordText>
                </ForgotPassword>
              </Box>

              <SubmitButton onPress={handleSignIn} disabled={loading}>
                {loading ? (
                  <ActivityIndicator size="small" color="#f3903d" />
                ) : (
                  <SubmitText>Entrar</SubmitText>
                )}
              </SubmitButton>
            </>
          )}
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default Login;
