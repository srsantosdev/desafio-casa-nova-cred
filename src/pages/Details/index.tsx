import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  Header,
  Back,
  TitlePage,
  Invisible,
  Content,
  Data,
  Title,
  Value,
  Session,
  TitleSession,
  ContainerButtons,
  OptionButton,
  OptionText,
} from "./styles";

const Details: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <Back onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={30} color="#fff" />
        </Back>
        <TitlePage>Detalhes</TitlePage>
        <Invisible />
      </Header>
      <Content>
        <Session>
          <TitleSession>Empréstimo</TitleSession>
          <Data>
            <Title>Data</Title>
            <Value>00/00/0000</Value>
          </Data>
          <Data>
            <Title>Valor do Empréstimo</Title>
            <Value>R$ 500,00</Value>
          </Data>
          <Data>
            <Title>Total a ser pago</Title>
            <Value>R$ 750,00</Value>
          </Data>
          <Data>
            <Title>Total Parcelado</Title>
            <Value>12x de R$ 62,50</Value>
          </Data>
        </Session>

        <Session>
          <TitleSession>Dados do Titular</TitleSession>
          <Data>
            <Title>Nome</Title>
            <Value>Maria Santos</Value>
          </Data>
          <Data>
            <Title>CPF/CNPJ</Title>
            <Value>000.000.000-00</Value>
          </Data>
          <Data>
            <Title>Número do Cartão</Title>
            <Value>**** **** **** 0000</Value>
          </Data>
        </Session>

        <ContainerButtons>
          <OptionButton activeOpacity={0.8}>
            <Feather name="download" size={24} color="#fff" />
            <OptionText>Download</OptionText>
          </OptionButton>
          <OptionButton activeOpacity={0.8}>
            <Feather name="share-2" size={24} color="#fff" />
            <OptionText>Compartilhar</OptionText>
          </OptionButton>
        </ContainerButtons>
      </Content>
    </Container>
  );
};

export default Details;
