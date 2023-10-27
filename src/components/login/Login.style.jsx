import styled from "styled-components";
import socialImage from "../../assets/image/social_login_sprites.png";

export const BtnWrap = styled.div`
  /* background-color: black; */
  border-radius: 20px 20px 0 0;
  padding: 50px 34px;
`;

export const SocialLoginButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px;
  color: var(--font-primary-color);
  font-size: 14px;
  background-color: #fff;
  text-align: center;
  border-radius: 44px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  margin-bottom: 10px;
  border: 1px solid ${props => props.bordercolor};
  &::before {
    content: "";
    display: block;
    height: 24px;
    width: 24px;
    margin: 10px;
    position: absolute;
    top: 30%;
    left: 3%;
    transform: translateY(-50%);
    background: url(${socialImage})
      ${({ socialimage }) =>
        socialimage === "kakao"
          ? `-48px -10px;`
          : socialimage === "google"
          ? `-10px -10px`
          : `-86px -10px`};
  }
  &:hover {
    background-color: ${props =>
      props.socialimage === "kakao"
        ? "#f3dfa3"
        : props.socialimage === "google"
        ? "#cac8c8"
        : "#69b2dd"};
    border-color: transparent;
    color: #fff;
  }
`;

export const LoginLink = styled.a`
  color: var(--font-primary-color);
  text-decoration: none;
  cursor: pointer;
`;

export const SignUpLink = styled.a`
  color: var(--font-primary-color);
  text-decoration: none;
  margin-left: 10px;
  cursor: pointer;

  &::before {
    content: "|";
    margin-right: 10px;
  }
`;

export const LinkWrap = styled.div`
  color: var(--font-primary-color);
  text-align: center;
`;
