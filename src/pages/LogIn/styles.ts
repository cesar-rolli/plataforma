import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Instagram,
} from "../../styles/Icons";

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
`;

export const Foto = styled.img`
  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	display: flex;
	justify-content: end;
	width: 100vw;
	height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;

export const LoginArea = styled.div`
	height: 94vh;
	width: 30vw;
	background: var(--azul);
	border-radius: 2vw;
	margin: 3vh 3vh 0 0;
	padding: 5vh 0 0 5vh;

	> h1 {
    font-size: 3vh;
    color: var(--branco);
    font-family: "Comfortaa", sans-serif;
	}

	> h2 {
    font-size: 2vh;
    color: var(--branco);
		font-weight: 400;
    font-family: "Comfortaa", sans-serif;
		margin: 5vh 0 1vh 1vw;
	}
`;

export const Input = styled.input`
	width: 25vw;
	height: 5vh;
	background: var(--branco);
	border-radius: 1vh;
`;

export const Links = styled(Link)`
	display: flex;
  text-decoration: none;
  color: var(--branco);  
  font-size: 2vh;
	width: 10vw;;
	margin: 2vh 0 3vh 0;

  &:hover {
    text-decoration: 2px underline var(--branco);
  }
`;

export const Acessar = styled(Link)`
	display: flex;
	text-decoration: none;
	color: var(--branco);  
	font-size: 2vh;
	font-weight: bold;
	background: var(--laranja);
	width: 25vw;
	height: 5vh;
	border-radius: 1vh;
	justify-content: center;
	align-items: center
`;

export const Divisor = styled.div`
	width: 25vw;
	height: 1px;
	background: var(--branco);
	margin: 5vh 0;
`;

export const Cadastrese = styled.div`
	display: flex;
	flex-direction: row;
	width: 25vw;
	justify-content: center;

	> p {
		color: var(--branco);  
		font-weight: 400;
		font-size: 1.8vh;
	}
`;

export const CadastroLink = styled(Link)`
	color: var(--laranja);  
	font-weight: 400;
	text-decoration: none;
	font-size: 1.8vh;
	margin-left: 0.5vw;

	&:hover {
    text-decoration: 2px underline var(--laranja);
	}
`;

export const Rodape = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 25vw;
	position: fixed;
	bottom: 7.5vh;

	> p {
    font-size: 2vh;
    color: var(--branco);
    font-weight: 400;
		font-family: "Comfortaa", sans-serif;
	}
`;

export const MeioContato = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;

  > h1 {
		padding-left: 0.5vw;
    font-size: 2vh;
    color: var(--branco);
    font-weight: 400;
		font-family: "Comfortaa", sans-serif;
  }
 
	@media (min-width: 960px) {
    > h1 {
      font-size: 1.8vh;
    }
  }
`;

export const InstagramIcon = styled(Instagram)`
	height: 8vw;
	fill: var(--azul);
	background: var(--laranja);
	border-radius: 1vh;

	&:hover {
		fill: var(--branco);
	}
	@media (min-width: 960px) {
		height: 2.5vw;
	}
`;