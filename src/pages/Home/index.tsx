import React from "react";
import { Ionicons } from "@expo/vector-icons";

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
  return (
    <Container>
      <Header>
        <Invisible />
        <TitlePage>Olá, Maria!</TitlePage>
        <OptionButton>
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
