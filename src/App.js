import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Wrapper } from "./styles/Wrapper";
import Router from "./routes/Router.jsx";
function App() {
  return (
    <>
      <Wrapper>
        <Router />
      </Wrapper>
    </>
  );
}
export default App;
