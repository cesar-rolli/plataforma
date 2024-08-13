import React from "react";

import { 
  Acessar,
  Cadastrese,
  CadastroLink,
  Container,
  Divisor,
  Foto,
  Input,
  InstagramIcon,
  Links,
  LoginArea,
  MeioContato,
  Rodape,
  Wrapper,

} from "./styles";

import foto0 from '../../assets/fotosLogin/foto0.png';

const LogIn: React.FC = () => {
  return (
    <Container>
      <Foto src={foto0} />
      <Wrapper>
        <LoginArea>
          <h1>Bem vindo à NEJFlix</h1>
          <h2>Usuário</h2>
          <Input 
            placeholder="Usuário"/>
          <h2>Senha</h2>
          <Input 
            placeholder="Senha"/>
          <Links to={"/esqueceu-senha"}>Esqueceu a senha?</Links>
          <Acessar to={"/inicio"}><p>Sign In</p></Acessar>
          <Divisor />
          <Cadastrese>
            <p>Não tem uma conta?</p>
            <CadastroLink to={"/cadastro"}><p>Cadastre-se</p></CadastroLink>
          </Cadastrese>
          <Rodape>
            <MeioContato href="https://www.instagram.com/nejpoa">
              <InstagramIcon />
              <h1>@nejpoa</h1>
            </MeioContato>
            <p>2024 | NEJ POA</p>
          </Rodape>
        </LoginArea>
      </Wrapper>
    </Container>
  );
};

export default LogIn;