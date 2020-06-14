import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { Container, Card, ModalText, Button, ButtonText } from "./styles";

interface ModalProps {
  open: boolean;
  onClose(): void;
}

const Modal: React.FC<ModalProps> = ({ open = false, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <Container>
      <Card>
        <Ionicons name="ios-close-circle-outline" size={60} color="#E23428" />

        <ModalText>E-mail/Senha Inválidos!</ModalText>
        <Button onPress={onClose}>
          <ButtonText>OK</ButtonText>
        </Button>
      </Card>
    </Container>
  );
};

export default Modal;
