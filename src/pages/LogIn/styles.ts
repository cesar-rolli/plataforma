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
	display: none;

	@media (min-width: 960px) {
		display: flex;
		width: 100vw;
		height: 100vh;
	}
`;

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	display: flex;
	width: 100vw;
	height: 100vh;
  background: rgba(0, 0, 0, 0.3);
	justify-content: center;
	align-items: center;
	
	@media (min-width: 960px) {
		justify-content: end;
	}
`;

export const LoginArea = styled.div`
	height: 90vh;
	width: 80vw;
	background: var(--azul);
	border-radius: 2vw;
	padding: 3vh 0 0 5vw;

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

	@media (min-width: 960px) {
		height: 94vh;
		width: 30vw;
		background: var(--azul);
		border-radius: 2vw;
		margin-right: 3vh;
		padding: 5vh 0 0 2.5vw;
	}
`;

export const Input = styled.input`
	width: 70vw;
	height: 5vh;
	background: var(--branco);
	border-radius: 1vh;
	outline: none;
	padding-left: 1vw;
  border: 3px solid var(--cinza-claro);
  -webkit-transition: 0.5s;
  transition: 0.5s;

	&:focus {
		border: 3px solid var(--laranja);
	}

	@media (min-width: 960px) {
		width: 25vw;
	}
`;

export const Links = styled(Link)`
	display: flex;
  text-decoration: none;
  color: var(--branco);  
  font-size: 2vh;
	width: 70vw;
	margin: 2vh 0 3vh 0;

  &:hover {
    text-decoration: 2px underline var(--branco);
  }

	@media (min-width: 960px) {
		width: 10vw;
	}
`;

export const Acessar = styled(Link)`
	display: flex;
	text-decoration: none;
	color: var(--branco);  
	font-size: 2vh;
	font-weight: bold;
	background: var(--laranja);
	width: 70vw;
	height: 5vh;
	border-radius: 1vh;
	justify-content: center;
	align-items: center;

	@media (min-width: 960px) {
		width: 25vw;
	}
`;

export const Divisor = styled.div`
	width: 70vw;
	height: 1px;
	background: var(--branco);
	margin: 5vh 0;

	@media (min-width: 960px) {
		width: 25vw;
	}
`;

export const Cadastrese = styled.div`
	display: flex;
	flex-direction: row;
	width: 70vw;
	justify-content: center;

	> p {
		color: var(--branco);  
		font-weight: 400;
		font-size: 1.8vh;
	}

	@media (min-width: 960px) {
		width: 25vw;
	}
`;

export const CadastroLink = styled(Link)`
	color: var(--laranja);  
	font-weight: 400;
	text-decoration: none;
	font-size: 1.8vh;
	margin-left: 2vw;

	&:hover {
    text-decoration: 2px underline var(--laranja);
	}

	@media (min-width: 960px) {
		margin-left: 0.5vw;
	}
`;

export const Rodape = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 70vw;
	margin-top: 25vh;

	> p {
    font-size: 2vh;
    color: var(--branco);
    font-weight: 400;
		font-family: "Comfortaa", sans-serif;
	}

	@media (min-width: 960px) {
		width: 25vw;
	}
`;

export const MeioContato = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;

  > h1 {
		padding-left: 2vw;
    font-size: 2vh;
    color: var(--branco);
    font-weight: 400;
		font-family: "Comfortaa", sans-serif;
  }
 
	@media (min-width: 960px) {
    > h1 {
      font-size: 1.8vh;
			padding-left: 0.5vw;
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