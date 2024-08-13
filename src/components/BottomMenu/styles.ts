import styled, { css } from "styled-components";

import { HomeAlt, Menu, People } from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
	width: 100vw;
	height: 10vh;
	background: var(--cinza-claro);
  position: absolute;
  bottom: 0;

  @media (min-width: 960px) {
    display: none;
  }
`;

const Icons = css`
  width: 12vw;
  height: 12vw;
  fill: var(--preto);

  &.active{
    fill: var(--azul);
  }
`;

export const HomeIcon = styled(HomeAlt)`
  ${Icons}
`;

export const MenuIcon = styled(Menu)`
  ${Icons}
`;

export const PeopleIcon = styled(People)`
  ${Icons}
`;