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
  background-color: #fff;
  height: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const TitlePage = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 22px;
  color: #fff;
  text-align: center;
`;

export const Data = styled.View`
  margin: 8px 16px;
`;

export const Invisible = styled.View`
  width: 24px;
`;

export const Title = styled.Text`
  font-family: Roboto_700Bold;
  font-size: 16px;
  color: #f3903d;
`;

export const Value = styled.Text`
  font-family: Roboto_400Regular;
  font-size: 24px;
`;

export const Session = styled.View``;

export const TitleSession = styled.Text`
  margin-left: 16px;
  margin-top: 24px;
  text-transform: uppercase;
  font-family: Roboto_300Light;
  font-size: 16px;
`;

export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const OptionButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #f3903d;
  width: 150px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin: 40px 16px;
`;

export const OptionText = styled.Text`
  margin-left: 10px;
  color: #fff;
  font-family: Roboto_400Regular;
  font-size: 16px;
`