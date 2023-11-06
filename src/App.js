import { Wrapper } from "./styles/Wrapper";
import Router from "./routes/Router.jsx";
import background from "../src/assets/image/backgroundImg.png";
import { styled } from "styled-components";
function App() {
  return (
    <>
      <div>
        <Background src={background} />
      </div>
      <Wrapper>
        <Router />
      </Wrapper>
    </>
  );
}
export default App;

const Background = styled.img`
  width: 450px;
  height: 555px;
  margin-right: 50px;
`;
