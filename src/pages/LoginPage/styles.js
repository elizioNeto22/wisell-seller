import styled from "styled-components";
import loginImage from "../../assets/images/auth/wisell_back_login8.jpg";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #998ff1;
  //background-image: url('https://image.freepik.com/fotos-gratis/representantes-internacionais-de-atendimento-ao-cliente-com-fone-de-ouvido_13339-186750.jpg');
  background-image: url(${loginImage});
  background-position: center;
  background-repeat: no-repeat;
  //background-size: 100%;
  background-size: cover;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 30px;

  > h2 {
    color: ${(props) => props.theme.colors.white};
    margin-left: 7px;
  }

  > img {
    width: 100%;
    height: 100%;
  }
`;

export const Form = styled.form`
  width: 300px;
  height: 300px;

  padding: 30px;

  border-radius: 10px;

  background-color: #3d4e9d;
`;

export const FormTitle = styled.h1`
  margin-bottom: 40px;

  color: ${(props) => props.theme.colors.white};

  &:after {
    content: "";
    display: block;
    width: 55px;
    border-bottom: 10px solid ${(props) => props.theme.colors.warning};
  }
`;
export const SignUp = styled.a`
  cursor: pointer;
  color: #000;
  background: #452f96;
  border-radius: 5px;
  padding: 7px 57px;
  margin: 10px 0px;
  text-decoration: none;
  text-align: center;
  font-size: 16px;
`;
export const Link = styled.a`
  cursor: pointer;
  font-size: 14px;
  margin: 10px 20px;
  text-decoration: none;
  color: white;
  &:visited {
    color: white;
  }
`;
