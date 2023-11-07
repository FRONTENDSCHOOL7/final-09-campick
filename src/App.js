import { Wrapper } from "./styles/Wrapper";
import Router from "./routes/Router.jsx";
import background from "../src/assets/image/background3.png";
import styled from "styled-components"; // 잘못된 import 수정

function App() {
  return (
    <>
      <Background />
      <Wrapper>
        <Router />
      </Wrapper>
    </>
  );
}
export default App;

const Background = styled.div`
  width: 450px;
  height: 555px;
  margin-right: 50px;
  background: url(${background}) no-repeat center center;
  background-size: cover;
  @media (max-width: 768px) {
    display: none;
  }
`;
