import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const Card = styled.View`
  width: 300px;
  height: 200px;
  background-color: #fff;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  z-index: 200;
`;

export const ModalText = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 14px;
  color: #000;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #f3903d;
  width: 50%;
  height: 40px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 14px;
  color: #fff;
`;
