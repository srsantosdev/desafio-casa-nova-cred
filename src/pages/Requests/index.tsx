import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useQuery, QueryHookOptions } from "@apollo/react-hooks";
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

import { allLoanRequests } from "./../../services/queries";

const Requests: React.FC = () => {
  const navigation = useNavigation();
  const [request, setRequest] = useState();
  const { data } = useQuery<QueryHookOptions>(allLoanRequests);

  return (
    <Container>
      <Header>
        <Back onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={30} color="#fff" />
        </Back>
        <TitlePage>Minhas Solicitações</TitlePage>
        <Invisible />
      </Header>
      <Content>
        <ContainerCards>
          <Card
            activeOpacity={0.9}
            onPress={() => navigation.navigate("Details")}
          >
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
