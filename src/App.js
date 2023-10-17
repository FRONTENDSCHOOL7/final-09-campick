import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Wrapper } from "./styles/Wrapper";

function App() {
  return (
    <>
      <Wrapper>
        <Home />
        <Navbar />
      </Wrapper>
    </>
  );
}
export default App;
