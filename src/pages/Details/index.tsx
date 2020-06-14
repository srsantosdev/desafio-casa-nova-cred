import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
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

import formatDate from "./../../utils/formatDate";
import formatMoney from "./../../utils/formatMoney";
import calculateTotalValue from "./../../utils/calculateTotalValue";
import serializedInstallment from "./../../utils/serializedInstallment";
import amountInstallment from "./../../utils/amountInstallment";

interface RouteParams {
  node: {
    data: String;
    valorDesejado: Number;
    taxaAplicada: Number;
    parcelas: String;
    cliente: {
      cpf: String;
      nome: String;
    };
  };
}

const Details: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { node } = route.params as RouteParams;

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
            <Value>{formatDate(String(node.data))}</Value>
          </Data>
          <Data>
            <Title>Valor do Empréstimo</Title>
            <Value>{formatMoney(Number(node.valorDesejado))}</Value>
          </Data>
          <Data>
            <Title>Total a ser pago</Title>
            <Value>
              {calculateTotalValue(
                Number(node.valorDesejado),
                Number(node.taxaAplicada)
              )}
            </Value>
          </Data>
          <Data>
            <Title>Total Parcelado</Title>
            <Value>
              {amountInstallment(
                Number(node.valorDesejado),
                Number(node.taxaAplicada),
                Number(serializedInstallment(String(node.parcelas)))
              )}
            </Value>
          </Data>
        </Session>

        <Session>
          <TitleSession>Dados do Titular</TitleSession>
          <Data>
            <Title>Nome</Title>
            <Value>{node.cliente.nome}</Value>
          </Data>
          <Data>
            <Title>CPF/CNPJ</Title>
            <Value>{node.cliente.cpf}</Value>
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
