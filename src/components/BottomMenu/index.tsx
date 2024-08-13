import React, {  } from "react";

import { 
  Container, 
  HomeIcon,
  MenuIcon,
  PeopleIcon,
} from "./styles";

const BottomMenu: React.FC = () => {
	return (
    <Container>
      <HomeIcon />
      <PeopleIcon />
      <MenuIcon />
    </Container>
  );
};

export default BottomMenu;  