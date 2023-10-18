import styled from "styled-components";

export const BtnWrap = styled.div`
  background-color: black;
  border-radius: 20px 20px 0 0;
  padding: 50px 34px;
`;

export const SocialLogin = styled.button`
  border-radius: 44px;
  border: 1px solid ${props => props.color};

  width: 322px;
  height: 44px;
  color: #767676;
  font-size: 14px;

  position: relative;

  margin-bottom: 10px;

  &::before {
    content: "";
    position: absolute;
    background-image: url(${props => props.img});
    background-color: black;
    background-repeat: no-repeat;
    top: 10px;
    left: 10px;
    width: 24px;
    height: 24px;
  }
`;

export const LoginLink = styled.a`
  color: #767676;
  text-decoration: none;
  cursor: pointer;
`;

export const SignUpLink = styled.a`
  color: #767676;
  text-decoration: none;
  margin-left: 10px;
  cursor: pointer;

  &::before {
    content: "|";
    margin-right: 10px;
  }
`;

export const LinkWrap = styled.div`
  text-align: center;
`;
