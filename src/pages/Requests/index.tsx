import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  Container,
  Header,
  Back,
  Content,
  TitlePage,
  ContainerCards,
  Card,
  Box,
  Title,
  Value,
  Invisible,
  Go,
} from "./styles";

const Requests: React.FC = () => {
  return (
    <Container>
      <Header>
        <Back>
          <Ionicons name="ios-arrow-back" size={24} color="#fff" />
        </Back>
        <TitlePage>Minhas Solicitações</TitlePage>
        <Invisible />
      </Header>
      <Content>
        <ContainerCards>
          <Card activeOpacity={0.9}>
            <Box>
              <Title>Data</Title>
              <Value>10/11/2019</Value>
            </Box>
            <Box>
              <Title>Valor do Empréstimo</Title>
              <Value>R$ 750,00</Value>
            </Box>
            <Go>
              <Ionicons name="ios-arrow-forward" size={24} color="#f3903d" />
            </Go>
          </Card>
        </ContainerCards>
      </Content>
    </Container>
  );
};

export default Requests;
