import React, { Component } from "react";

import TeamSwitcher from "../../components/TeamSwitcher";
import Project from "../../components/Project";

import { Container } from "./styles";

const Main = () => (
  <Container>
    <TeamSwitcher />
    <Project />
  </Container>
);

export default Main;
