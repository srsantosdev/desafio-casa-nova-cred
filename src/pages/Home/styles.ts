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

export const TitlePage = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 22px;
  color: #fff;
`;

export const OptionButton = styled.TouchableOpacity``;

export const ContentContainer = styled.View`
  background-color: #fff;
  height: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Banner = styled.View`
  justify-content: center;
  align-items: center;
  padding: 30px 25px;
`;

export const Card = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  margin-bottom: 20px;
`;

export const MainContent = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 18px;
  text-align: center;
`;

export const DescriptionBanner = styled.Text`
  margin-top: 16px;
  font-family: Roboto_400Regular;
  font-size: 16px;
  text-transform: uppercase;
  color: #f3903d;
`;

export const Description = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 14px;
  text-align: center;
`;

export const Small = styled.Text`
  font-family: Roboto_700Bold;
  color: #f3903d;
  text-align: center;
`;

export const Illustration = styled.Image``;

export const TitleCard = styled.Text`
  font-family: Roboto_700Bold;
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #f3903d;
  border-radius: 25px;
  height: 50px;
  margin: 25px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: Roboto_700Bold;
  font-size: 20px;
  text-transform: uppercase;
  color: #fff;
`;

export const Invisible = styled.View`
  width: 35px;
`;
