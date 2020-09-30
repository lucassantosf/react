import React from "react";

import { Container, SignForm } from "../styles";

import Button from "../../../styles/components/Button";

const SignIn = () => (
  <Container>
    <SignForm onSubmit={() => {}}>
      <h1>Boas Vindas</h1>

      <span>Email</span>
      <input type="email" name="email" value="" />

      <span>Senha</span>
      <input type="password" name="password" value="" />

      <Button size="big" type="submit">
        Entrar
      </Button>
    </SignForm>
  </Container>
);

export default SignIn;
