import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import { ActivityIndicator } from "react-native";

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
  ContainerLoading,
} from "./styles";

import { useQuery } from "@apollo/react-hooks";
import { allLoanRequests } from "./../../services/queries";

import formatDate from "./../../utils/formatDate";
import formatMoney from "./../../utils/formatMoney";

interface User {
  nome: string;
  email: string;
  id: Number;
}

interface QueryResponse {
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

const Requests: React.FC = () => {
  const navigation = useNavigation();
  const [requests, setRequests] = useState<QueryResponse[]>([]);

  const [user, setUser] = useState<string>();

  const { data, loading } = useQuery(allLoanRequests, {
    variables: { funcionario_Nome: user },
  });

  useEffect(() => {
    if (data) {
      setRequests(data.todasSolicitacoesEmprestimoRelay.edges);
    }
  }, [loading]);

  useEffect(() => {
    async function getUserId() {
      const storagedUser = await AsyncStorage.getItem("@RNAuth:user");
      const user: User = JSON.parse(storagedUser as string);
      setUser(user.nome);
    }
    getUserId();
  }, []);

  return (
    <Container>
      <Header>
        <Back onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={30} color="#fff" />
        </Back>
        <TitlePage>Minhas Solicitações</TitlePage>
        <Invisible />
      </Header>

      {loading || requests.length === 0 ? (
        <ContainerLoading>
          <ActivityIndicator size="large" color="#fff" />
        </ContainerLoading>
      ) : (
        <Content>
          <ContainerCards>
            {requests.map(({ node }, index) => (
              <Card
                key={index}
                activeOpacity={0.9}
                onPress={() => navigation.navigate("Details", { node })}
              >
                <Box>
                  <Title>Data</Title>
                  <Value>{formatDate(String(node.data))}</Value>
                </Box>
                <Box>
                  <Title>Valor do Empréstimo</Title>
                  <Value>{formatMoney(Number(node.valorDesejado))}</Value>
                </Box>
                <Go>
                  <Ionicons
                    name="ios-arrow-forward"
                    size={24}
                    color="#f3903d"
                  />
                </Go>
              </Card>
            ))}
          </ContainerCards>
        </Content>
      )}
    </Container>
  );
};

export default Requests;
