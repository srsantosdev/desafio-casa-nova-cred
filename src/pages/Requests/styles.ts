import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  background-color: #f3903d;
  height: 100%;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Header = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export const Back = styled.TouchableOpacity``;

export const Content = styled.ScrollView`
  margin-top: 16px;
`;

export const TitlePage = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 22px;
  color: #fff;
  text-align: center;
`;

export const ContainerCards = styled.View`
  padding: 0 15px;
  margin-bottom: 16px;
`;

export const Card = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 15px;
  height: 80px;
  border-radius: 12px;
  margin-bottom: 8px;
`;

export const Box = styled.View``;

export const Title = styled.Text`
  font-family: Roboto_700Bold;
  font-size: 16px;
`;

export const Value = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 20px;
`;

export const Go = styled.View``;

export const Invisible = styled.View`
  width: 24px;
`;
