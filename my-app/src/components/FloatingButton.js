import React from "react";
import { Container, Button, lightColors } from "react-floating-action-button";
import { Plus } from "react-bootstrap-icons";

function FloatingButton() {
  return (
    <Container  className = "mb-auto">
      <Button
        styles={{
          backgroundColor: lightColors.lightBlue,
          color: lightColors.white,
        }}
      >
        <Plus size={40}/>
      </Button>
    </Container>
    
    
  );
}

export default FloatingButton;
