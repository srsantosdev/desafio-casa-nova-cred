import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import {
  Container,
  Header,
  TitlePage,
  OptionButton,
  ContentContainer,
  Banner,
  Card,
  MainContent,
  Description,
  DescriptionBanner,
  Small,
  Illustration,
  TitleCard,
  Button,
  ButtonText,
  Invisible,
} from "./styles";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    async function getUsername() {
      const storagedUser = await AsyncStorage.getItem("@RNAuth:user");
      const { nome } = JSON.parse(String(storagedUser));

      const capitalizeName = nome.charAt(0).toUpperCase() + nome.slice(1);

      setUsername(capitalizeName);
    }
    getUsername();
  }, []);

  return (
    <Container>
      <Header>
        <Invisible />
        <TitlePage>Olá, {username}!</TitlePage>
        <OptionButton
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <Ionicons name="ios-menu" size={35} color="#fff" />
        </OptionButton>
      </Header>
      <ContentContainer>
        <Banner>
          <MainContent>
            Emprestimo descomplicado com serviços para cartão de crédito, cheque
            e consignado.
          </MainContent>
          <DescriptionBanner>
            Divida em <Small>12 vezes</Small>!
          </DescriptionBanner>
        </Banner>
        <Card>
          <Illustration
            source={require("./../../assets/illustrations/EmprestimoPessoal.png")}
          />
          <TitleCard>Empréstimo Pessoal</TitleCard>
          <Description>
            Sem consulta. Aprovação em até 30 min. Pague com cartão de
            crédito.Temos as melhores taxas do mercado.
          </Description>
        </Card>
        <Card>
          <Illustration
            source={require("./../../assets/illustrations/Payment.png")}
          />
          <TitleCard>Pague em até 12x</TitleCard>
          <Description>
            Parcele o seu emprestimo em até 12x no cartão de crédito e garanta
            mais agilidade para você.
          </Description>
        </Card>
        <Card>
          <Illustration
            source={require("./../../assets/illustrations/Money.png")}
          />
          <TitleCard>Dinheiro em até 30 min</TitleCard>
          <Description>
            Após a aprovação do empréstimo, a quantia solicitada será depositada
            na sua conta bancária em até 30 min.
          </Description>
        </Card>
        <Button>
          <ButtonText>Solicitar Empréstimo</ButtonText>
        </Button>
      </ContentContainer>
    </Container>
  );
};

export default Home;
