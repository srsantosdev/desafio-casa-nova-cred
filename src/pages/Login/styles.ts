import styled from "styled-components/native";

export const Container = styled.SafeAreaView``;

export const BackgroundImage = styled.ImageBackground`
  height: 379px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  z-index: 3;
`;

export const Opacity = styled.View`
  position: absolute;
  width: 100%;
  height: 379px;
  z-index: 2;
  background-color: #f3903d;
  opacity: 0.7;
  top: 0;
  left: 0;
`;

export const ContainerForm = styled.View`
  background-color: #fff;
  border-radius: 60px;
  height: 100%;
  z-index: 10;
  margin-top: -60px;
`;

export const ContainerMenu = styled.View`
  width: 100%;
  position: absolute;
  top: -20px;
`;

export const Menu = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

const Option = styled.TouchableOpacity`
  width: 150px;
  height: 60px;
  background-color: ${(props) => (props.disabled ? "#EAEAEA" : "#f2f2f2")};
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled(Option)`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const RegisterButton = styled(Option)`
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const OptionText = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 18px;
  color: #707070c6;
  text-transform: uppercase;
`;

export const Form = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

export const Input = styled.TextInput`
  font-family: Roboto_400Regular;
  font-size: 18px;
  color: #707070c6;
  text-transform: uppercase;

  background-color: #f2f2f2;
  width: 80%;
  margin-bottom: 20px;
  height: 60px;
  border-radius: 12px;
  padding: 10px 15px;
`;

export const InputDocs = styled.TextInput`
  font-family: Roboto_400Regular;
  font-size: 18px;
  color: #707070c6;
  text-transform: uppercase;
  background-color: #f2f2f2;
  margin-bottom: 20px;
  height: 60px;
  border-radius: 12px;
  padding: 10px 15px;
  width: 48%;
`;

export const Docs = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const Box = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: 80%;
  margin-top: -10px;
`;

export const ForgotPassword = styled.TouchableOpacity``;

export const ForgotPasswordText = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 12px;
  color: #707070c6;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #f2f2f2;
  width: 60%;
  height: 50px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const SubmitText = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 18px;
  color: #707070c6;
  text-transform: uppercase;
`;
