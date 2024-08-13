import React from "react";
// import { Link } from "react-router-dom";

import { Container } from "./styles";
import Header from "../../components/Header";
import BottomMenu from "../../components/BottomMenu";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <BottomMenu />
    </Container>
  );
};

export default Home;