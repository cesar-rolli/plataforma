import React, { useEffect, useState } from "react";

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
  OlhoIcon,
  Rodape,
  Wrapper,

} from "./styles";

import foto0 from '../../assets/fotosLogin/foto0.png';

const LogIn: React.FC = () => {
  const [senha, setSenha] = useState("password");
  const [valor_senha, setValor_senha] = useState(true);
  const hancleClick = () => {
    if (valor_senha) {
      setSenha("text");
      setValor_senha(!valor_senha);
    } else {
      setSenha("password");
      setValor_senha(!valor_senha);
    }
  }

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
            placeholder="Senha"
            type={senha} />
          <OlhoIcon 
            id="olho"
            onClick={hancleClick} />
          <Links to={"/esqueceu-senha"}>Esqueceu a senha?</Links>
          <Acessar to={"/inicio"}><p>Entrar</p></Acessar>
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